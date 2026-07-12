import type { Confidence, StageNumber } from "../types/test";

export function calculatePoints(
  isCorrect: boolean,
  confidence: Confidence,
): 0 | 1 | 2 {
  if (!isCorrect) return 0;
  return confidence === "confident" ? 2 : 1;
}

export function getStageScore(
  answers: ReadonlyArray<{ stage: StageNumber; points: number }>,
  stage: StageNumber,
): number {
  return answers
    .filter((answer) => answer.stage === stage)
    .reduce((sum, answer) => sum + answer.points, 0);
}

export function getDemoLevel(totalScore: number): {
  title: string;
  description: string;
} {
  if (totalScore <= 4) {
    return {
      title: "Низкое совпадение",
      description:
        "В этой короткой версии выбранные образы редко совпадали с ключом методики.",
    };
  }

  if (totalScore <= 10) {
    return {
      title: "Умеренное совпадение",
      description:
        "Часть музыкально-визуальных соответствий была распознана устойчиво.",
    };
  }

  if (totalScore <= 14) {
    return {
      title: "Высокое совпадение",
      description:
        "Большинство соответствий совпало с ключом демонстрационной методики.",
    };
  }

  return {
    title: "Очень высокое совпадение",
    description:
      "Ответы почти полностью совпали с ключом демонстрационной методики.",
  };
}
