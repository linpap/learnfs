export type ChallengePhase = 1 | 2 | 3 | 4 | 5 | 6;

export type ChallengeType = 'html' | 'html-css' | 'javascript' | 'react' | 'fullstack';

export interface ChallengeRequirement {
  id: string;
  description: string;
  points: number;
  checkType: 'contains' | 'regex' | 'element' | 'style' | 'function' | 'manual';
  checkValue?: string;
}

export interface ChallengeFile {
  name: string;
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'tsx' | 'json';
  starterCode: string;
  solution?: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  phase: ChallengePhase;
  type: ChallengeType;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites: number[]; // lesson IDs
  thumbnail?: string;

  // Challenge details
  overview: string;
  objectives: string[];
  requirements: ChallengeRequirement[];

  // Code setup
  files: ChallengeFile[];
  previewSupport: boolean;

  // Hints and resources
  hints: string[];
  resources: { title: string; url: string }[];

  // Grading
  totalPoints: number;
  passingScore: number;
}

export interface ChallengeSubmission {
  id: string;
  challengeId: number;
  userId: string;
  files: { name: string; content: string }[];
  score: number;
  feedback: string;
  passed: boolean;
  submittedAt: string;
}
