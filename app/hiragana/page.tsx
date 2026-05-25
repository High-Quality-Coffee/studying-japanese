import { StudySession, type SessionCard } from "@/components/StudySession";
import { hiragana } from "@/data/hiragana";

export const metadata = {
  title: "히라가나 · 일본어 학습",
};

export default function HiraganaPage() {
  const cards: SessionCard[] = hiragana.map((c) => ({
    char: c.char,
    reading: c.reading,
    romaji: c.romaji,
    examples: c.examples,
  }));

  return (
    <StudySession
      title="히라가나"
      subtitle="ひらがな"
      kind="hiragana"
      cards={cards}
    />
  );
}
