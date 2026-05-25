import { notFound } from "next/navigation";
import { StudySession, type SessionCard } from "@/components/StudySession";
import { kanjiStages, KANJI_STORAGE_KEY } from "@/data/kanji";

type Props = { params: Promise<{ volume: string }> };

export function generateStaticParams() {
  return kanjiStages.map((s) => ({ volume: String(s.volume) }));
}

export async function generateMetadata({ params }: Props) {
  const { volume } = await params;
  const stage = kanjiStages.find((s) => String(s.volume) === volume);
  if (!stage) return { title: "단계를 찾을 수 없음" };
  return { title: `${stage.volume}단계 · 상용한자` };
}

export default async function KanjiStagePage({ params }: Props) {
  const { volume } = await params;
  const stage = kanjiStages.find((s) => String(s.volume) === volume);
  if (!stage) notFound();

  const cards: SessionCard[] = stage.cards.map((k) => ({
    char: k.char,
    reading: k.korean,
    onYomiWords: k.onYomiWords,
    kunYomiWords: k.kunYomiWords,
  }));

  return (
    <StudySession
      title={`상용한자 ${stage.volume}단계`}
      subtitle={`常用漢字 · ${stage.range}`}
      kind={`kanji-stage-${stage.volume}`}
      storageKey={KANJI_STORAGE_KEY}
      cards={cards}
      backHref="/kanji"
      backLabel="단계 선택"
    />
  );
}
