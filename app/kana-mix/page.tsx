import { StudySession, type SessionCard } from "@/components/StudySession";
import { hiragana } from "@/data/hiragana";
import { katakana } from "@/data/katakana";

export const metadata = {
  title: "히라가나 + 가타카나 · 일본어 학습",
};

export default function KanaMixPage() {
  const cards: SessionCard[] = [
    ...hiragana.map((c) => ({
      char: c.char,
      reading: c.reading,
      romaji: c.romaji,
      examples: c.examples,
      tag: "히라가나",
    })),
    ...katakana.map((c) => ({
      char: c.char,
      reading: c.reading,
      romaji: c.romaji,
      examples: c.examples,
      tag: "가타카나",
    })),
  ];

  return (
    <StudySession
      title="히라가나 + 가타카나"
      subtitle="ひらがな + カタカナ"
      kind="kana-mix"
      cards={cards}
      defaultShuffle
    />
  );
}
