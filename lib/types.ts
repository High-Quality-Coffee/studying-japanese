export type Example = {
  jp: string;
  reading: string;
  meaning: string;
};

export type KanaGroup = "basic" | "dakuten" | "yoon";

export type KanaCard = {
  char: string;
  reading: string;
  romaji: string;
  group: KanaGroup;
  examples: Example[];
};

export type KanjiExample = {
  word: string;
  reading: string;
  meaning: string;
};

export type KanjiCard = {
  id: string;
  char: string;
  korean: string;
  onYomiWords: KanjiExample[];
  kunYomiWords: KanjiExample[];
};

export type StudyCardKind = "kana" | "kanji";
