"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  kanji,
  kanjiStages,
  KANJI_STORAGE_KEY,
  type KanjiStage,
} from "@/data/kanji";

function loadMemorized(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(`progress:${KANJI_STORAGE_KEY}`);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (Array.isArray(arr))
      return new Set(arr.filter((x): x is string => typeof x === "string"));
    return new Set();
  } catch {
    return new Set();
  }
}

function countMemorizedIn(stage: KanjiStage, memorized: Set<string>) {
  let n = 0;
  for (const c of stage.cards) if (memorized.has(c.char)) n++;
  return n;
}

export default function KanjiLandingPage() {
  const [memorized, setMemorized] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMemorized(loadMemorized());
    setHydrated(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === `progress:${KANJI_STORAGE_KEY}`) setMemorized(loadMemorized());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const totalKanji = kanji.length;
  const totalMemorized = hydrated
    ? kanji.reduce((acc, k) => acc + (memorized.has(k.char) ? 1 : 0), 0)
    : 0;
  const allCleared = hydrated && totalMemorized === totalKanji && totalKanji > 0;

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-divider-soft bg-parchment/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
          <Link
            href="/"
            aria-label="홈으로"
            className="inline-flex items-center gap-2 transition hover:opacity-70"
          >
            <Logo size={28} variant="on-light" />
            <span className="hidden text-[14px] font-normal text-ink tracking-apple-caption sm:inline">
              홈
            </span>
          </Link>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[17px] font-semibold text-ink tracking-apple-body sm:text-[21px]">
              상용한자
            </h1>
            <span className="font-jp text-[12px] font-normal text-ink-muted-48 sm:text-[14px]">
              常用漢字
            </span>
          </div>
          <span className="text-[14px] font-normal tabular-nums text-ink-muted-80 tracking-apple-caption">
            {totalMemorized} / {totalKanji}
          </span>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center px-5 py-8 sm:px-6 sm:py-12">
        <div className="w-full max-w-5xl">
          <section className="mb-8 sm:mb-10">
            <h2 className="text-[24px] font-semibold text-ink sm:text-[28px] tracking-apple-display">
              단계를 선택해 학습하세요
            </h2>
            <p className="mt-2 text-[15px] font-normal text-ink-muted-80 sm:text-[17px]">
              각 단계는 별권으로 분류된 한자를 모아둔 묶음입니다. 단계별로
              셔플과 외움 체크가 가능하고, 한 번 외운 한자는 어느 화면에서든
              외운 상태로 표시됩니다.
            </p>
          </section>

          <Link
            href="/kanji/all"
            className="group mb-8 block w-full overflow-hidden rounded-[18px] bg-tile-1 transition active:scale-[0.995] sm:mb-10"
          >
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex flex-col">
                <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white tracking-apple-caption">
                  전체 학습
                </span>
                <h3 className="mt-3 text-[24px] font-semibold text-white sm:text-[28px] tracking-apple-display">
                  모든 단계를 합쳐서
                </h3>
                <p className="mt-1 text-[15px] font-normal text-body-muted sm:text-[17px]">
                  현재까지 등록된 {totalKanji}자를 셔플로 — 자동으로 무작위
                  출제됩니다.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[12px] font-normal text-body-muted tracking-apple-caption">
                    진도
                  </span>
                  <span className="text-[24px] font-semibold tabular-nums text-white sm:text-[28px]">
                    {totalMemorized} / {totalKanji}
                  </span>
                  {allCleared && (
                    <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[12px] font-semibold text-white tracking-apple-caption">
                      ✓ 완료
                    </span>
                  )}
                </div>
                <span
                  aria-hidden
                  className="text-[18px] text-white/80 transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </div>
          </Link>

          <section>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink-muted-48">
              단계별 학습
            </h3>
            {kanjiStages.length === 0 ? (
              <div className="mt-3 rounded-[18px] border border-hairline bg-canvas p-8 text-center">
                <p className="text-[15px] text-ink-muted-80 sm:text-[17px]">
                  아직 등록된 단계가 없습니다. <code>materials/vol*_kanji.json</code>{" "}
                  파일을 추가하면 자동으로 표시됩니다.
                </p>
              </div>
            ) : (
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
                {kanjiStages.map((stage) => {
                  const done = countMemorizedIn(stage, memorized);
                  const cleared = hydrated && done === stage.count;
                  const started = hydrated && done > 0;
                  return (
                    <li key={stage.volume}>
                      <Link
                        href={`/kanji/stage/${stage.volume}`}
                        className="group flex h-full flex-col justify-between gap-6 rounded-[18px] border border-hairline bg-canvas p-5 transition hover:border-ink-muted-48 active:scale-[0.99] sm:p-6"
                      >
                        <div>
                          <div className="flex items-baseline justify-between gap-2">
                            <h4 className="text-[20px] font-semibold text-ink tracking-apple-display sm:text-[22px]">
                              {stage.volume}단계
                            </h4>
                            {cleared ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-white tracking-apple-caption">
                                ✓ 완료
                              </span>
                            ) : started ? (
                              <span className="inline-flex items-center rounded-full border border-hairline px-2.5 py-0.5 text-[11px] font-normal text-ink-muted-80 tracking-apple-caption">
                                학습 중
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-normal text-ink-muted-48 tracking-apple-caption">
                                시작 안 함
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-[13px] font-normal tabular-nums text-ink-muted-48 tracking-apple-caption">
                            {stage.range} · {stage.count}자
                          </p>
                        </div>

                        <div>
                          <div className="flex items-baseline justify-between">
                            <span className="text-[12px] font-normal text-ink-muted-48 tracking-apple-caption">
                              외운 한자
                            </span>
                            <span className="text-[15px] font-semibold tabular-nums text-ink">
                              {done} / {stage.count}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-divider-soft">
                            <div
                              className="h-full bg-primary transition-[width] duration-300"
                              style={{
                                width: `${stage.count ? (done / stage.count) * 100 : 0}%`,
                              }}
                            />
                          </div>
                          <div className="mt-3 inline-flex items-center gap-1 text-[14px] font-normal text-primary tracking-apple-caption">
                            학습 시작
                            <span
                              aria-hidden
                              className="transition group-hover:translate-x-0.5"
                            >
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
