export interface Question {
  id: number;
  type: 'vocabulary' | 'grammar';
  question: string;
  options: string[];
  correctAnswer: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

export interface TestResult {
  score: number;
  level: string;
  timestamp: string;
  email?: string;
  source: string;
}

export const testQuestions: Question[] = [
  {
    id: 1,
    type: 'vocabulary',
    question: "What color is a banana?",
    options: ['Red', 'Yellow', 'Blue', 'Green'],
    correctAnswer: 1,
    level: 'A1'
  },
  {
    id: 2,
    type: 'grammar',
    question: "She _____ a teacher.",
    options: ['is', 'are', 'be', 'being'],
    correctAnswer: 0,
    level: 'A1'
  },
  {
    id: 3,
    type: 'vocabulary',
    question: "How do you say 'veinte' in English?",
    options: ['Twelve', 'Twenty', 'Two', 'Ten'],
    correctAnswer: 1,
    level: 'A1'
  },
  {
    id: 4,
    type: 'grammar',
    question: "I _____ three brothers.",
    options: ['have', 'has', 'had', 'having'],
    correctAnswer: 0,
    level: 'A1'
  },
  {
    id: 5,
    type: 'vocabulary',
    question: "Your mother's daughter is your _____.",
    options: ['Niece', 'Sister', 'Cousin', 'Aunt'],
    correctAnswer: 1,
    level: 'A2'
  },
  {
    id: 6,
    type: 'grammar',
    question: "Yesterday I _____ to the cinema.",
    options: ['go', 'going', 'gone', 'went'],
    correctAnswer: 3,
    level: 'A2'
  },
  {
    id: 7,
    type: 'vocabulary',
    question: "What do you call a person who writes code?",
    options: ['Writer', 'Engineer', 'Programmer', 'Teacher'],
    correctAnswer: 2,
    level: 'A2'
  },
  {
    id: 8,
    type: 'grammar',
    question: "This book is _____ than that one.",
    options: ['Interesting', 'More interesting', 'Most interesting', 'Good'],
    correctAnswer: 1,
    level: 'B1'
  },
  {
    id: 9,
    type: 'vocabulary',
    question: "If you 'give up', you...",
    options: ['Continue trying', 'Stop trying', 'Give something away', 'Apologize'],
    correctAnswer: 1,
    level: 'B1'
  },
  {
    id: 10,
    type: 'grammar',
    question: "If it _____ tomorrow, we will cancel the trip.",
    options: ['Rain', 'Rains', 'Rained', 'Would rain'],
    correctAnswer: 1,
    level: 'B1'
  },
  {
    id: 11,
    type: 'vocabulary',
    question: "To 'break the ice' means to:",
    options: ['Make ice', 'Start a conversation', 'Fight someone', 'Wake up early'],
    correctAnswer: 1,
    level: 'B2'
  },
  {
    id: 12,
    type: 'grammar',
    question: "She said that she _____ the job.",
    options: ['Want', 'Wants', 'Wanted', 'Had wanted'],
    correctAnswer: 2,
    level: 'C1'
  }
];

export function calculateLevel(score: number): string {
  if (score <= 3) return 'A1';
  if (score <= 5) return 'A2';
  if (score <= 7) return 'B1';
  if (score <= 9) return 'B2';
  return 'C1';
}

export function getLevelDescription(level: string): string {
  const descriptions: Record<string, string> = {
    A1: 'You are a beginner. You can understand and use familiar everyday expressions.',
    A2: 'You can communicate in simple and routine tasks requiring direct exchange of information.',
    B1: 'You can deal with most situations likely to arise while travelling. You can describe experiences, events, dreams, and ambitions.',
    B2: 'You can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible.',
    C1: 'You can express ideas fluently and spontaneously without much obvious searching for expressions.'
  };
  return descriptions[level] || '';
}