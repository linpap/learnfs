'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import CodeEditor from '@/components/CodeEditor';
import LivePreview from '@/components/LivePreview';
import { useAuth } from '@/context/AuthContext';
import { getChallengeById } from '@/data/challenges';
import { Challenge, ChallengeFile } from '@/types/challenge';

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [activeFile, setActiveFile] = useState(0);
  const [files, setFiles] = useState<{ name: string; content: string; language: string }[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [revealedHints, setRevealedHints] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    passed: boolean;
    checks: { id: string; passed: boolean; message: string }[];
  } | null>(null);

  const challengeId = typeof params.id === 'string' ? parseInt(params.id) : 0;

  useEffect(() => {
    if (challengeId) {
      const foundChallenge = getChallengeById(challengeId);
      if (foundChallenge) {
        setChallenge(foundChallenge);
        setFiles(foundChallenge.files.map(f => ({
          name: f.name,
          content: f.starterCode,
          language: f.language
        })));
      } else {
        router.push('/challenges');
      }
    }
  }, [challengeId, router]);

  const handleCodeChange = (newCode: string) => {
    setFiles(prev => prev.map((f, i) =>
      i === activeFile ? { ...f, content: newCode } : f
    ));
  };

  const handleSubmit = async () => {
    if (!challenge) return;

    setSubmitting(true);
    setResults(null);

    // Simulate checking requirements
    await new Promise(resolve => setTimeout(resolve, 1500));

    const checks = challenge.requirements.map(req => {
      let passed = false;
      const allContent = files.map(f => f.content).join('\n');

      switch (req.checkType) {
        case 'contains':
          passed = allContent.includes(req.checkValue || '');
          break;
        case 'regex':
          try {
            const regex = new RegExp(req.checkValue || '', 'gi');
            passed = regex.test(allContent);
          } catch {
            passed = false;
          }
          break;
        case 'element':
          const elements = (req.checkValue || '').split(',');
          passed = elements.every(el =>
            allContent.toLowerCase().includes(`<${el.trim()}`)
          );
          break;
        case 'manual':
          // For manual checks, we give partial credit
          passed = allContent.length > 200;
          break;
        default:
          passed = false;
      }

      return {
        id: req.id,
        passed,
        message: passed ? `✓ ${req.description}` : `✗ ${req.description}`
      };
    });

    const earnedPoints = checks.reduce((sum, check, i) => {
      return sum + (check.passed ? challenge.requirements[i].points : 0);
    }, 0);

    const score = Math.round((earnedPoints / challenge.totalPoints) * 100);
    const passed = score >= challenge.passingScore;

    setResults({ score, passed, checks });
    setSubmitting(false);
  };

  const handleReset = () => {
    if (challenge) {
      setFiles(challenge.files.map(f => ({
        name: f.name,
        content: f.starterCode,
        language: f.language
      })));
      setResults(null);
    }
  };

  const revealNextHint = () => {
    if (challenge && revealedHints < challenge.hints.length) {
      setRevealedHints(prev => prev + 1);
    }
  };

  // Generate preview content
  const getPreviewContent = () => {
    const htmlFile = files.find(f => f.name.endsWith('.html'));
    const cssFile = files.find(f => f.name.endsWith('.css'));
    const jsFile = files.find(f => f.name.endsWith('.js'));

    let html = htmlFile?.content || '';
    const css = cssFile?.content || '';
    const javascript = jsFile?.content || '';

    return { html, css, javascript };
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading challenge...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-full mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/challenges">
              <Logo size="sm" />
            </Link>
            <span className="text-gray-600">|</span>
            <div>
              <span className="text-xs text-pink-400 font-medium">Phase {challenge.phase}</span>
              <h1 className="text-white font-semibold">{challenge.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-2 py-1 text-xs rounded-full capitalize ${
              challenge.difficulty === 'beginner'
                ? 'bg-green-900/50 text-green-400'
                : challenge.difficulty === 'intermediate'
                ? 'bg-yellow-900/50 text-yellow-400'
                : 'bg-red-900/50 text-red-400'
            }`}>
              {challenge.difficulty}
            </span>
            <span className="text-gray-400 text-sm">{challenge.estimatedTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Instructions */}
        <div className="w-96 bg-gray-800 border-r border-gray-700 overflow-y-auto">
          <div className="p-6">
            {/* Overview */}
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{challenge.overview}</p>
            </section>

            {/* Objectives */}
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-3">Objectives</h2>
              <ul className="space-y-2">
                {challenge.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-pink-400 mt-0.5">•</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-3">
                Requirements ({challenge.totalPoints} pts)
              </h2>
              <div className="space-y-2">
                {challenge.requirements.map((req) => {
                  const result = results?.checks.find(c => c.id === req.id);
                  return (
                    <div
                      key={req.id}
                      className={`p-3 rounded-lg text-sm ${
                        result
                          ? result.passed
                            ? 'bg-green-900/30 border border-green-700'
                            : 'bg-red-900/30 border border-red-700'
                          : 'bg-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={result ? (result.passed ? 'text-green-400' : 'text-red-400') : 'text-gray-300'}>
                          {result ? (result.passed ? '✓' : '✗') : '○'} {req.description}
                        </span>
                        <span className="text-xs text-gray-500">{req.points} pts</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Hints */}
            <section className="mb-6">
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center justify-between w-full text-lg font-semibold text-white mb-3"
              >
                Hints ({revealedHints}/{challenge.hints.length})
                <svg className={`w-5 h-5 transition-transform ${showHints ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showHints && (
                <div className="space-y-2">
                  {challenge.hints.slice(0, revealedHints).map((hint, i) => (
                    <div key={i} className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg text-sm text-yellow-200">
                      💡 {hint}
                    </div>
                  ))}
                  {revealedHints < challenge.hints.length && (
                    <button
                      onClick={revealNextHint}
                      className="text-sm text-yellow-400 hover:text-yellow-300"
                    >
                      Reveal next hint
                    </button>
                  )}
                </div>
              )}
            </section>

            {/* Resources */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Resources</h2>
              <ul className="space-y-2">
                {challenge.resources.map((res, i) => (
                  <li key={i}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                    >
                      {res.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Right Panel - Code Editor & Preview */}
        <div className="flex-1 flex flex-col">
          {/* File Tabs */}
          <div className="bg-gray-800 border-b border-gray-700 px-4 flex items-center justify-between">
            <div className="flex">
              {files.map((file, i) => (
                <button
                  key={file.name}
                  onClick={() => setActiveFile(i)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeFile === i
                      ? 'text-white border-pink-500 bg-gray-700/50'
                      : 'text-gray-400 border-transparent hover:text-gray-200'
                  }`}
                >
                  {file.name}
                </button>
              ))}
            </div>
            {challenge.previewSupport && (
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`px-3 py-1 text-sm rounded ${
                  showPreview
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
            )}
          </div>

          {/* Editor + Preview */}
          <div className="flex-1 flex">
            <div className={`${showPreview ? 'w-1/2' : 'w-full'} h-full`}>
              <CodeEditor
                code={files[activeFile]?.content || ''}
                language={files[activeFile]?.language || 'html'}
                onChange={handleCodeChange}
                darkMode={true}
              />
            </div>
            {showPreview && (
              <div className="w-1/2 border-l border-gray-700">
                <LivePreview {...getPreviewContent()} />
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="bg-gray-800 border-t border-gray-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                Reset Code
              </button>
              {results && (
                <div className={`flex items-center gap-2 ${results.passed ? 'text-green-400' : 'text-yellow-400'}`}>
                  <span className="font-bold text-lg">{results.score}%</span>
                  <span className="text-sm">
                    {results.passed ? 'Challenge Passed!' : `Need ${challenge.passingScore}% to pass`}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-2 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {submitting ? (
                <>
                  <span className="animate-spin">⟳</span>
                  Checking...
                </>
              ) : (
                <>Submit Challenge</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
