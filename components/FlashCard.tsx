import type { Example, KanjiExample } from "@/lib/types";

type FlashCardProps = {
  char: string;
  revealed: boolean;
  onToggle: () => void;
  reading: string;
  romaji?: string;
  meanings?: string[];
  examples?: Example[];
  onYomiWords?: KanjiExample[];
  kunYomiWords?: KanjiExample[];
  tag?: string;
};

export function FlashCard({
  char,
  revealed,
  onToggle,
  reading,
  romaji,
  meanings,
  examples,
  onYomiWords,
  kunYomiWords,
  tag,
}: FlashCardProps) {
  const isKanji =
    (onYomiWords && onYomiWords.length > 0) ||
    (kunYomiWords && kunYomiWords.length > 0);

  return (
    <div className="w-full max-w-2xl rounded-[18px] border border-hairline bg-canvas">
      <div className="flex flex-col items-center px-6 py-12 sm:px-12 sm:py-16">
        <div
          className="font-jp font-normal leading-none text-ink select-none"
          style={{ fontSize: "clamp(7rem, 28vw, 14rem)" }}
        >
          {char}
        </div>

        {!revealed ? (
          <button
            type="button"
            onClick={onToggle}
            className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-[15px] font-normal text-white sm:px-[22px] sm:py-[11px] sm:text-[17px] tracking-apple-body transition hover:bg-primary-focus active:scale-95"
            aria-label="정답 보기"
          >
            정답 보기
          </button>
        ) : (
          <div className="mt-10 flex w-full flex-col items-center gap-3">
            {tag && (
              <span className="inline-flex items-center rounded-full bg-parchment px-3 py-1 text-[12px] font-semibold text-ink-muted-80 tracking-apple-caption">
                {tag}
              </span>
            )}
            {meanings && meanings.length > 0 && (
              <div className="text-[24px] font-semibold text-ink sm:text-[28px] tracking-apple-display">
                {meanings.join(" · ")}
              </div>
            )}
            <div
              className={
                meanings && meanings.length > 0
                  ? "text-[18px] font-normal text-ink-muted-80"
                  : "text-[28px] font-semibold text-ink sm:text-[34px] tracking-apple-display"
              }
            >
              {reading}
            </div>
            {romaji && (
              <div className="text-[14px] font-normal text-ink-muted-48 tracking-apple-caption">
                {romaji}
              </div>
            )}

            <button
              type="button"
              onClick={onToggle}
              className="mt-3 text-[14px] font-normal text-primary tracking-apple-caption transition hover:text-primary-focus"
            >
              다시 가리기
            </button>
          </div>
        )}
      </div>

      {revealed && isKanji && (
        <div className="border-t border-divider-soft px-6 py-6 sm:px-12 sm:py-8">
          {onYomiWords && onYomiWords.length > 0 && (
            <ExampleSection label="음독 단어" tone="primary" words={onYomiWords} />
          )}
          {kunYomiWords && kunYomiWords.length > 0 && (
            <div
              className={
                onYomiWords && onYomiWords.length > 0
                  ? "mt-6 border-t border-divider-soft pt-6"
                  : ""
              }
            >
              <ExampleSection label="훈독 단어" tone="ink" words={kunYomiWords} />
            </div>
          )}
        </div>
      )}

      {revealed && !isKanji && examples && examples.length > 0 && (
        <div className="border-t border-divider-soft px-6 py-6 sm:px-12 sm:py-8">
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted-48">
            예시
          </h3>
          <ul className="mt-3 flex flex-col gap-3">
            {examples.map((ex, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="font-jp text-[20px] font-medium text-ink sm:text-[22px]">
                  {ex.jp}
                </span>
                <span className="text-[14px] font-normal text-ink-muted-80 tracking-apple-caption">
                  {ex.reading}
                </span>
                <span className="text-[14px] font-normal text-ink-muted-48 tracking-apple-caption sm:ml-auto">
                  {ex.meaning}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ExampleSection({
  label,
  tone,
  words,
}: {
  label: string;
  tone: "primary" | "ink";
  words: KanjiExample[];
}) {
  const chipClass =
    tone === "primary"
      ? "bg-primary text-white"
      : "bg-ink text-white";
  return (
    <div>
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold tracking-apple-caption ${chipClass}`}
      >
        {label}
      </span>
      <ul className="mt-3 flex flex-col gap-3">
        {words.map((w, i) => (
          <li
            key={i}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="font-jp text-[20px] font-medium text-ink sm:text-[22px]">
              {w.word}
            </span>
            <span className="font-jp text-[14px] font-normal text-ink-muted-80 tracking-apple-caption">
              {w.reading}
            </span>
            <span className="text-[14px] font-normal text-ink-muted-48 tracking-apple-caption sm:ml-auto">
              {w.meaning}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
