import { StudySession, type SessionCard } from "@/components/StudySession";
import { kanji, KANJI_STORAGE_KEY } from "@/data/kanji";

export const metadata = {
  title: "전체 학습 · 상용한자",
};

export default function KanjiAllPage() {
  const cards: SessionCard[] = kanji.map((k) => ({
    char: k.char,
    reading: k.korean,
    onYomiWords: k.onYomiWords,
    kunYomiWords: k.kunYomiWords,
  }));

  return (
    <StudySession
      title="상용한자 전체"
      subtitle="常用漢字 全"
      kind="kanji-all"
      storageKey={KANJI_STORAGE_KEY}
      cards={cards}
      defaultShuffle
      backHref="/kanji"
      backLabel="단계 선택"
    />
  );
}
