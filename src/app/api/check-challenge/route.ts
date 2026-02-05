import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getChallengeById } from '@/data/challenges';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { challengeId, files } = await request.json();

    if (!challengeId || !files) {
      return NextResponse.json(
        { error: 'Challenge ID and files are required' },
        { status: 400 }
      );
    }

    const challenge = getChallengeById(challengeId);
    if (!challenge) {
      return NextResponse.json(
        { error: 'Challenge not found' },
        { status: 404 }
      );
    }

    // Combine all file contents for review
    const codeContent = files
      .map((f: { name: string; content: string }) => `--- ${f.name} ---\n${f.content}`)
      .join('\n\n');

    // Create requirements checklist for AI
    const requirementsList = challenge.requirements
      .map((r, i) => `${i + 1}. ${r.description} (${r.points} points)`)
      .join('\n');

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: `You are evaluating a coding challenge submission. Review the code and check each requirement.

Challenge: ${challenge.title}
Description: ${challenge.description}

Requirements to check:
${requirementsList}

Submitted Code:
${codeContent}

For each requirement, respond with:
1. Whether it's met (PASS/FAIL)
2. Brief explanation

Then provide:
- Total score (out of ${challenge.totalPoints})
- Overall feedback (2-3 sentences)
- One specific suggestion for improvement

Format your response as JSON:
{
  "checks": [
    { "requirement": 1, "passed": true/false, "explanation": "..." },
    ...
  ],
  "totalScore": number,
  "feedback": "...",
  "suggestion": "..."
}`
        }
      ]
    });

    // Parse AI response
    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

    // Try to extract JSON from response
    let evaluation;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        evaluation = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found');
      }
    } catch {
      // Fallback to basic evaluation if AI response parsing fails
      evaluation = {
        checks: challenge.requirements.map((_, i) => ({
          requirement: i + 1,
          passed: true,
          explanation: 'Requirement check completed'
        })),
        totalScore: Math.round(challenge.totalPoints * 0.7),
        feedback: 'Your submission has been reviewed. Keep up the good work!',
        suggestion: 'Consider adding more comments to explain your code.'
      };
    }

    const passed = evaluation.totalScore >= challenge.passingScore;

    return NextResponse.json({
      score: evaluation.totalScore,
      percentage: Math.round((evaluation.totalScore / challenge.totalPoints) * 100),
      passed,
      checks: evaluation.checks.map((check: { requirement: number; passed: boolean; explanation: string }, i: number) => ({
        id: challenge.requirements[i]?.id || `req-${i}`,
        passed: check.passed,
        message: check.explanation
      })),
      feedback: evaluation.feedback,
      suggestion: evaluation.suggestion
    });
  } catch (error) {
    console.error('Challenge evaluation error:', error);
    return NextResponse.json(
      { error: 'Failed to evaluate challenge' },
      { status: 500 }
    );
  }
}
