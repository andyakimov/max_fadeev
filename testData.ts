import type { TestQuestion } from "@/types/test";

export const TEST_QUESTIONS: readonly TestQuestion[] = [
  {
    id: "s1-ball-up",
    stage: 1,
    order: 1,
    audioPath: "/assets/audio/stage1/01-ball-up.mp3",
    patentSource: "Демонстрационная реконструкция по фиг. 9 патента RU 2858363 C1",
    options: [
      {
        id: "ball-up",
        label: "Мячик вверх",
        imagePaths: ["/assets/images/stage1/ball-up.svg"],
      },
      {
        id: "ball-down",
        label: "Мячик вниз",
        imagePaths: ["/assets/images/stage1/ball-down.svg"],
      },
    ],
    correctOptionId: "ball-up",
  },
  {
    id: "s1-saw",
    stage: 1,
    order: 2,
    audioPath: "/assets/audio/stage1/02-saw.mp3",
    patentSource: "Демонстрационная реконструкция по фиг. 11 патента RU 2858363 C1",
    options: [
      {
        id: "saw",
        label: "Пила",
        imagePaths: ["/assets/images/stage1/saw.svg"],
      },
      {
        id: "bees",
        label: "Пчёлы",
        imagePaths: ["/assets/images/stage1/bees.svg"],
      },
    ],
    correctOptionId: "saw",
  },
  {
    id: "s1-bear",
    stage: 1,
    order: 3,
    audioPath: "/assets/audio/stage1/03-bear.mp3",
    patentSource: "Демонстрационная реконструкция по фиг. 8 патента RU 2858363 C1",
    options: [
      {
        id: "bear",
        label: "Медведь",
        imagePaths: ["/assets/images/stage1/bear.svg"],
      },
      {
        id: "birds",
        label: "Птицы",
        imagePaths: ["/assets/images/stage1/birds.svg"],
      },
    ],
    correctOptionId: "bear",
  },

  {
    id: "s2-ball-up-saw",
    stage: 2,
    order: 4,
    audioPath: "/assets/audio/stage2/04-ball-up-saw.mp3",
    patentSource: "Последовательное соединение фрагментов первого этапа",
    options: [
      {
        id: "ball-up-saw",
        label: "Мячик вверх + пила",
        imagePaths: [
          "/assets/images/stage1/ball-up.svg",
          "/assets/images/stage1/saw.svg",
        ],
      },
      {
        id: "ball-down-bees",
        label: "Мячик вниз + пчёлы",
        imagePaths: [
          "/assets/images/stage1/ball-down.svg",
          "/assets/images/stage1/bees.svg",
        ],
      },
    ],
    correctOptionId: "ball-up-saw",
  },
  {
    id: "s2-bear-ball-up",
    stage: 2,
    order: 5,
    audioPath: "/assets/audio/stage2/05-bear-ball-up.mp3",
    patentSource: "Последовательное соединение фрагментов первого этапа",
    options: [
      {
        id: "bear-ball-up",
        label: "Медведь + мячик вверх",
        imagePaths: [
          "/assets/images/stage1/bear.svg",
          "/assets/images/stage1/ball-up.svg",
        ],
      },
      {
        id: "birds-ball-down",
        label: "Птицы + мячик вниз",
        imagePaths: [
          "/assets/images/stage1/birds.svg",
          "/assets/images/stage1/ball-down.svg",
        ],
      },
    ],
    correctOptionId: "bear-ball-up",
  },
  {
    id: "s2-saw-bear",
    stage: 2,
    order: 6,
    audioPath: "/assets/audio/stage2/06-saw-bear.mp3",
    patentSource: "Последовательное соединение фрагментов первого этапа",
    options: [
      {
        id: "saw-bear",
        label: "Пила + медведь",
        imagePaths: [
          "/assets/images/stage1/saw.svg",
          "/assets/images/stage1/bear.svg",
        ],
      },
      {
        id: "bees-birds",
        label: "Пчёлы + птицы",
        imagePaths: [
          "/assets/images/stage1/bees.svg",
          "/assets/images/stage1/birds.svg",
        ],
      },
    ],
    correctOptionId: "saw-bear",
  },

  {
    id: "s3-lullaby",
    stage: 3,
    order: 7,
    audioPath: "/assets/audio/stage3/07-lullaby.mp3",
    patentSource: "Сюжеты фиг. 31 и фиг. 22; музыка — демонстрационная реконструкция",
    options: [
      {
        id: "lullaby",
        label: "Колыбельная",
        imagePaths: ["/assets/images/stage3/lullaby.webp"],
      },
      {
        id: "battle",
        label: "Батальная сцена",
        imagePaths: ["/assets/images/stage3/battle.webp"],
      },
    ],
    correctOptionId: "lullaby",
  },
  {
    id: "s3-storm-sea",
    stage: 3,
    order: 8,
    audioPath: "/assets/audio/stage3/08-storm-sea.mp3",
    patentSource: "Сюжеты фиг. 23 и фиг. 37; музыка — демонстрационная реконструкция",
    options: [
      {
        id: "storm-sea",
        label: "Бушующее море",
        imagePaths: ["/assets/images/stage3/storm-sea.webp"],
      },
      {
        id: "underwater",
        label: "Подводный мир",
        imagePaths: ["/assets/images/stage3/underwater.webp"],
      },
    ],
    correctOptionId: "storm-sea",
  },
  {
    id: "s3-fair",
    stage: 3,
    order: 9,
    audioPath: "/assets/audio/stage3/09-fair.mp3",
    patentSource: "Сюжеты фиг. 44 и фиг. 28; музыка — демонстрационная реконструкция",
    options: [
      {
        id: "fair",
        label: "Ярмарка",
        imagePaths: ["/assets/images/stage3/fair.webp"],
      },
      {
        id: "ominous-train",
        label: "Зловещий поезд",
        imagePaths: ["/assets/images/stage3/ominous-train.webp"],
      },
    ],
    correctOptionId: "fair",
  },
] as const;

export const TOTAL_MAX_SCORE = TEST_QUESTIONS.length * 2;
export const STAGE_MAX_SCORE = 6;
export const DEMO_STAGE_PASS_SCORE = 3;
export const ENFORCE_STAGE_GATE = false;
