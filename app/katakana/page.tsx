import { StudySession, type SessionCard } from "@/components/StudySession";
import { katakana } from "@/data/katakana";

export const metadata = {
  title: "가타카나 · 일본어 학습",
};

export default function KatakanaPage() {
  const cards: SessionCard[] = katakana.map((c) => ({
    char: c.char,
    reading: c.reading,
    romaji: c.romaji,
    examples: c.examples,
  }));

  return (
    <StudySession
      title="가타카나"
      subtitle="カタカナ"
      kind="katakana"
      cards={cards}
    />
  );
}
