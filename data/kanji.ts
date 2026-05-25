import type { KanjiCard, KanjiExample } from "@/lib/types";
import { rawKanjiVolumes } from "./kanji-volumes.generated";

type RawWord = { word: string; reading: string; meaning: string };
type RawKanji = {
  kanji_id: string;
  kanji: string;
  korean_reading: string;
  on_yomi_words: RawWord[];
  kun_yomi_words: RawWord[];
};

export type RawVolume = {
  meta: {
    volume: number;
    total_kanji_in_volume: number;
    kanji_range: string;
    source?: string;
    description?: string;
  };
  kanji_list: RawKanji[];
};

export type KanjiStage = {
  volume: number;
  range: string;
  count: number;
  cards: KanjiCard[];
};

function mapWords(words: RawWord[]): KanjiExample[] {
  return words.map((w) => ({
    word: w.word,
    reading: w.reading,
    meaning: w.meaning,
  }));
}

export const kanjiStages: KanjiStage[] = rawKanjiVolumes
  .map((v) => ({
    volume: v.meta.volume,
    range: v.meta.kanji_range,
    count: v.meta.total_kanji_in_volume,
    cards: v.kanji_list.map((k) => ({
      id: k.kanji_id,
      char: k.kanji,
      korean: k.korean_reading,
      onYomiWords: mapWords(k.on_yomi_words),
      kunYomiWords: mapWords(k.kun_yomi_words),
    })),
  }))
  .sort((a, b) => a.volume - b.volume);

export const kanji: KanjiCard[] = kanjiStages.flatMap((s) => s.cards);

export const KANJI_STORAGE_KEY = "kanji";
