export type StageNumber = 1 | 2 | 3;
export type Confidence = "unsure" | "confident";

export interface TestOption {
  id: string;
  label: string;
  imagePaths: string[];
}

export interface TestQuestion {
  id: string;
  stage: StageNumber;
  order: number;
  audioPath: string;
  patentSource: string;
  options: readonly [TestOption, TestOption];
  correctOptionId: string;
}

export interface AnswerRecord {
  questionId: string;
  selectedOptionId: string;
  confidence: Confidence;
  isCorrect: boolean;
  points: 0 | 1 | 2;
  playCount: number;
  responseTimeMs: number;
}

export interface TestSession {
  version: "demo-v1";
  status: "not-started" | "in-progress" | "completed";
  currentQuestionIndex: number;
  startedAt: string | null;
  completedAt: string | null;
  optionOrder: Record<string, [string, string]>;
  answers: AnswerRecord[];
}
