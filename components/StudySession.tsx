"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FlashCard } from "./FlashCard";
import { Logo } from "./Logo";
import type { Example, KanjiExample } from "@/lib/types";

export type SessionCard = {
  char: string;
  reading: string;
  romaji?: string;
  meanings?: string[];
  examples?: Example[];
  onYomiWords?: KanjiExample[];
  kunYomiWords?: KanjiExample[];
  tag?: string;
};

export type StudyKind = string;

type Filter = "all" | "unknown" | "known";

type Props = {
  title: string;
  subtitle: string;
  kind: StudyKind;
  cards: SessionCard[];
  defaultShuffle?: boolean;
  /** localStorage key suffix (defaults to `kind`). Use to share progress across pages — e.g. all kanji pages use the same key. */
  storageKey?: string;
  /** Override the back link href (defaults to "/"). */
  backHref?: string;
  /** Override the back link label (defaults to "홈"). */
  backLabel?: string;
};

function mulberry32(seed: number) {
  let a = seed || 1;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function loadMemorized(key: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(`progress:${key}`);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return new Set(arr.filter((x) => typeof x === "string"));
    return new Set();
  } catch {
    return new Set();
  }
}

export function StudySession({
  title,
  subtitle,
  kind,
  cards,
  defaultShuffle = false,
  storageKey,
  backHref = "/",
  backLabel = "홈",
}: Props) {
  const resolvedStorageKey = storageKey ?? kind;
  const [hydrated, setHydrated] = useState(false);
  const [memorized, setMemorized] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<Filter>("all");
  const [shuffleOn, setShuffleOn] = useState(defaultShuffle);
  const [shuffleSeed, setShuffleSeed] = useState(1);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);

  useEffect(() => {
    setMemorized(loadMemorized(resolvedStorageKey));
    setHydrated(true);
  }, [resolvedStorageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        `progress:${resolvedStorageKey}`,
        JSON.stringify([...memorized]),
      );
    } catch {
      /* ignore quota errors */
    }
  }, [memorized, resolvedStorageKey, hydrated]);

  const orderIndices = useMemo(() => {
    let indices = cards.map((_, i) => i);
    if (filter === "unknown") indices = indices.filter((i) => !memorized.has(cards[i].char));
    else if (filter === "known") indices = indices.filter((i) => memorized.has(cards[i].char));
    if (shuffleOn) {
      const rng = mulberry32(shuffleSeed);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
    }
    return indices;
  }, [cards, filter, shuffleOn, shuffleSeed, memorized]);

  useEffect(() => {
    setIndex(0);
    setRevealed(false);
  }, [filter, shuffleOn, shuffleSeed]);

  useEffect(() => {
    if (orderIndices.length === 0) return;
    if (index >= orderIndices.length) {
      setIndex(orderIndices.length - 1);
      setRevealed(false);
    }
  }, [orderIndices, index]);

  const total = orderIndices.length;
  const safeIndex = total > 0 ? Math.min(index, total - 1) : 0;
  const card = total > 0 ? cards[orderIndices[safeIndex]] : null;
  const isMemorized = card ? memorized.has(card.char) : false;
  const memorizedCount = memorized.size;
  const cardsCount = cards.length;

  const next = useCallback(() => {
    if (total === 0) return;
    setIndex((i) => (i + 1) % total);
    setRevealed(false);
  }, [total]);

  const prev = useCallback(() => {
    if (total === 0) return;
    setIndex((i) => (i - 1 + total) % total);
    setRevealed(false);
  }, [total]);

  const toggleRevealed = useCallback(() => {
    setRevealed((v) => !v);
  }, []);

  const toggleMemorized = useCallback(() => {
    if (!card) return;
    setMemorized((prev) => {
      const next = new Set(prev);
      if (next.has(card.char)) next.delete(card.char);
      else next.add(card.char);
      return next;
    });
  }, [card]);

  const reshuffle = useCallback(() => {
    setShuffleSeed((s) => s + 1);
  }, []);

  const resetMemorized = useCallback(() => {
    setMemorized(new Set());
    setResetOpen(false);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleRevealed();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMemorized();
      } else if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        setShuffleOn((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, toggleRevealed, toggleMemorized]);

  useEffect(() => {
    if (resetOpen) return;
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let tracking = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      startTime = Date.now();
      tracking = true;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const dt = Date.now() - startTime;

      const minDist = 60;
      const maxTime = 800;
      if (Math.abs(dx) < minDist) return;
      if (Math.abs(dx) < Math.abs(dy) * 1.4) return;
      if (dt > maxTime) return;

      if (dx < 0) next();
      else prev();
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev, resetOpen]);

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-divider-soft bg-parchment/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
          <Link
            href={backHref}
            aria-label={`${backLabel}으로`}
            className="inline-flex items-center gap-2 transition hover:opacity-70"
          >
            <Logo size={28} variant="on-light" />
            <span className="hidden text-[14px] font-normal text-ink tracking-apple-caption sm:inline">
              {backLabel}
            </span>
          </Link>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[17px] font-semibold text-ink tracking-apple-body sm:text-[21px]">
              {title}
            </h1>
            <span className="font-jp text-[12px] font-normal text-ink-muted-48 sm:text-[14px]">
              {subtitle}
            </span>
          </div>
          <span className="text-[14px] font-normal tabular-nums text-ink-muted-80 tracking-apple-caption">
            {total > 0 ? `${safeIndex + 1} / ${total}` : "0 / 0"}
          </span>
        </div>
      </header>

      <section className="border-b border-divider-soft bg-parchment">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
              전체 {cardsCount}
            </FilterPill>
            <FilterPill
              active={filter === "unknown"}
              onClick={() => setFilter("unknown")}
            >
              모르는 것만 {cardsCount - memorizedCount}
            </FilterPill>
            <FilterPill active={filter === "known"} onClick={() => setFilter("known")}>
              외운 것만 {memorizedCount}
            </FilterPill>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShuffleOn((v) => !v)}
              className={`inline-flex min-h-9 items-center gap-1 rounded-full px-4 py-2 text-[13px] font-normal transition active:scale-95 ${
                shuffleOn
                  ? "bg-primary text-white hover:bg-primary-focus"
                  : "border border-hairline bg-canvas text-ink hover:border-ink-muted-48"
              }`}
              aria-pressed={shuffleOn}
            >
              <span aria-hidden>⇋</span>
              {shuffleOn ? "셔플 켜짐" : "셔플"}
            </button>
            {shuffleOn && (
              <button
                type="button"
                onClick={reshuffle}
                className="inline-flex min-h-9 items-center rounded-full border border-hairline bg-canvas px-4 py-2 text-[13px] font-normal text-ink transition hover:border-ink-muted-48 active:scale-95"
              >
                다시 섞기
              </button>
            )}
            {memorizedCount > 0 && (
              <button
                type="button"
                onClick={() => setResetOpen(true)}
                className="inline-flex min-h-9 items-center rounded-full px-3 py-2 text-[13px] font-normal text-ink-muted-48 tracking-apple-caption transition hover:text-ink active:scale-95"
              >
                진도 초기화
              </button>
            )}
          </div>
        </div>
      </section>

      <ResetModal
        open={resetOpen}
        memorizedCount={memorizedCount}
        title={title}
        onCancel={() => setResetOpen(false)}
        onConfirm={resetMemorized}
      />

      <main className="flex flex-1 flex-col items-center px-5 py-8 sm:px-6 sm:py-12">
        {card ? (
          <>
            <FlashCard
              char={card.char}
              revealed={revealed}
              onToggle={toggleRevealed}
              reading={card.reading}
              romaji={card.romaji}
              meanings={card.meanings}
              examples={card.examples}
              onYomiWords={card.onYomiWords}
              kunYomiWords={card.kunYomiWords}
              tag={card.tag}
            />

            <div className="mt-6 flex w-full max-w-2xl items-center justify-center">
              <button
                type="button"
                onClick={toggleMemorized}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-[15px] font-normal transition active:scale-95 sm:text-[17px] ${
                  isMemorized
                    ? "bg-ink text-white hover:bg-ink-muted-80"
                    : "border border-hairline bg-canvas text-ink hover:border-ink-muted-48"
                }`}
                aria-pressed={isMemorized}
              >
                <span aria-hidden>{isMemorized ? "✓" : "○"}</span>
                {isMemorized ? "외움" : "외웠음으로 표시"}
              </button>
            </div>

            <div className="mt-6 flex w-full max-w-2xl items-center justify-between gap-3 sm:mt-8">
              <button
                type="button"
                onClick={prev}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-hairline bg-canvas px-5 py-3 text-[15px] font-normal text-ink tracking-apple-body transition hover:border-ink-muted-48 active:scale-95 sm:px-[22px] sm:py-[11px] sm:text-[17px]"
                aria-label="이전 카드"
              >
                <span aria-hidden className="mr-1">
                  ←
                </span>
                이전
              </button>

              <button
                type="button"
                onClick={next}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-[15px] font-normal text-white tracking-apple-body transition hover:bg-primary-focus active:scale-95 sm:px-[22px] sm:py-[11px] sm:text-[17px]"
                aria-label="다음 카드"
              >
                다음
                <span aria-hidden className="ml-1">
                  →
                </span>
              </button>
            </div>

            <p className="mt-6 text-center text-[12px] font-normal text-ink-muted-48 tracking-apple-caption">
              <span className="hidden sm:inline">
                ← / → 이동 · 스페이스 정답 · M 외움 · S 셔플
              </span>
              <span className="sm:hidden">좌우로 스와이프하여 카드 이동</span>
            </p>
          </>
        ) : (
          <EmptyState filter={filter} onReset={() => setFilter("all")} />
        )}
      </main>
    </>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-9 items-center rounded-full px-4 py-2 text-[13px] font-normal tracking-apple-caption transition active:scale-95 ${
        active
          ? "bg-ink text-white"
          : "border border-hairline bg-canvas text-ink hover:border-ink-muted-48"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

function ResetModal({
  open,
  memorizedCount,
  title,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  memorizedCount: number;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCancel();
      }
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 py-6"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-[18px] bg-canvas p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="reset-modal-title"
          className="text-[20px] font-semibold text-ink tracking-apple-display sm:text-[24px]"
        >
          {title} 진도를 초기화할까요?
        </h2>
        <p className="mt-3 text-[15px] font-normal text-ink-muted-80 sm:text-[17px]">
          현재 외운 것으로 표시된{" "}
          <span className="font-semibold text-ink">{memorizedCount}개</span>의
          카드가 모두 모름 상태로 되돌아갑니다. 이 작업은 되돌릴 수 없어요.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-hairline bg-canvas px-5 py-3 text-[15px] font-normal text-ink transition hover:border-ink-muted-48 active:scale-95 sm:px-[22px] sm:py-[11px] sm:text-[17px]"
          >
            취소
          </button>
          <button
            type="button"
            onClick={onConfirm}
            autoFocus
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-[15px] font-normal text-white transition hover:bg-primary-focus active:scale-95 sm:px-[22px] sm:py-[11px] sm:text-[17px]"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ filter, onReset }: { filter: Filter; onReset: () => void }) {
  const message =
    filter === "unknown"
      ? "모든 카드를 외우셨네요! 축하합니다."
      : filter === "known"
        ? "아직 외운 카드가 없어요."
        : "보여드릴 카드가 없습니다.";

  return (
    <div className="flex w-full max-w-2xl flex-col items-center rounded-[18px] border border-hairline bg-canvas px-6 py-16 text-center sm:py-24">
      <p className="text-[20px] font-semibold text-ink tracking-apple-display sm:text-[24px]">
        {message}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-[15px] font-normal text-white transition hover:bg-primary-focus active:scale-95 sm:px-[22px] sm:py-[11px] sm:text-[17px]"
      >
        전체 카드로 돌아가기
      </button>
    </div>
  );
}
