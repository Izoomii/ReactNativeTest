export interface Answer {
  label: string;
  correct: boolean;
}

export interface Question {
  id: number;
  answers: Answer[];
  image?: string | null;
  label: string;
  time: number;
}

export const data: Question[] = [
  {
    id: 1,
    answers: [
      { label: "Rabat", correct: true },
      { label: "Casablanca", correct: false },
    ],
    image: null,
    label: "Capitale du maroc ?",
    time: 60,
  },
  {
    id: 2,
    answers: [
      { label: "Espagne", correct: true },
      { label: "italie", correct: false },
    ],
    label:
      "Dans quel pays peut-on trouver la Catalogne, l'Andalousie et la Castille ?",
    time: 30,
  },
  {
    id: 3,
    answers: [
      { label: "Vercingétorix", correct: false },
      { label: "César", correct: true },
      { label: "Attila", correct: false },
    ],
    label: "Qui a dit : « Le sort en est jeté » (Alea jacta est) ?",
    time: 60,
  },
];
