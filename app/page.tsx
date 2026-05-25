import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";

type Menu = {
  href: string;
  title: string;
  subtitle: string;
  tagline: string;
  bgImage: string;
  bgAlt: string;
  objectPosition?: string;
};

const menus: Menu[] = [
  {
    href: "/hiragana",
    title: "히라가나",
    subtitle: "ひらがな",
    tagline: "기본 가나 46자와 탁음 · 반탁음 · 요음까지.",
    bgImage: "/ruffy.png",
    bgAlt: "루피",
    objectPosition: "center 25%",
  },
  {
    href: "/katakana",
    title: "가타카나",
    subtitle: "カタカナ",
    tagline: "외래어와 의성어를 표기하는 가나 46자.",
    bgImage: "/naruto.png",
    bgAlt: "나루토",
    objectPosition: "center 40%",
  },
  {
    href: "/kana-mix",
    title: "히라가나 + 가타카나",
    subtitle: "ひらがな + カタカナ",
    tagline: "두 가나를 섞어서 셔플로 — 자동으로 무작위 출제.",
    bgImage: "/reje.jpg",
    bgAlt: "레제",
    objectPosition: "center 25%",
  },
  {
    href: "/kanji",
    title: "상용한자",
    subtitle: "常用漢字",
    tagline:
      "일본 상용한자 2136자 중, 초등 1~6학년이 익히는 1026자를 단계별로.",
    bgImage: "/hinata.png",
    bgAlt: "히나타",
    objectPosition: "center 30%",
  },
];

function Card({ menu }: { menu: Menu }) {
  return (
    <Link
      href={menu.href}
      className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-hairline bg-canvas transition hover:border-ink-muted-48 active:scale-[0.99]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment">
        <Image
          src={menu.bgImage}
          alt={menu.bgAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: menu.objectPosition }}
          priority
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline gap-2">
          <h2 className="text-[20px] font-semibold leading-[1.2] text-ink sm:text-[22px] tracking-apple-display">
            {menu.title}
          </h2>
          <span className="font-jp text-[13px] font-normal text-ink-muted-48 sm:text-[14px]">
            {menu.subtitle}
          </span>
        </div>
        <p className="mt-2 flex-1 text-[14px] font-normal leading-[1.5] text-ink-muted-80 sm:text-[15px]">
          {menu.tagline}
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-[14px] font-normal text-primary tracking-apple-caption sm:text-[15px]">
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
  );
}

export default function Home() {
  return (
    <>
      <header className="bg-parchment">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-12 text-center sm:px-6 sm:py-16 md:py-20">
          <Logo size={88} priority />
          <h1 className="mt-6 text-[28px] font-semibold leading-[1.1] sm:text-[34px] md:text-[40px] lg:text-[56px] text-ink tracking-apple-hero">
            일본어 학습
          </h1>
          <p className="mt-4 max-w-xl text-[16px] font-light leading-[1.5] sm:mt-5 sm:text-[18px] md:text-[20px] lg:text-[24px] text-ink-muted-80">
            카드를 보고 답을 떠올린 뒤, 정답보기를 눌러 확인하세요.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            히라가나 · 가타카나 · 상용한자, 하나씩 차근차근.
          </p>
        </div>
      </header>

      <main className="bg-parchment pb-12 sm:pb-16 md:pb-20">
        <nav className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 sm:gap-6 sm:px-6">
          {menus.map((menu) => (
            <Card key={menu.href} menu={menu} />
          ))}
        </nav>
      </main>

      <footer className="bg-parchment">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-10 text-center text-[12px] font-normal text-ink-muted-48 sm:gap-1.5 sm:px-6 sm:py-12">
          <p>
            © {new Date().getFullYear()} 일본어 학습. Made by{" "}
            <a
              href="https://github.com/High-Quality-Coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition hover:text-primary-focus"
            >
              High-Quality-Coffee
            </a>
            .
          </p>
          <p>
            <a
              href="https://github.com/High-Quality-Coffee/studying-japanese"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition hover:text-primary-focus"
            >
              github.com/High-Quality-Coffee/studying-japanese
            </a>
          </p>
          <p className="mt-1">
            이 프로젝트는 개인 학습용으로 만들어졌으며, 어떠한 수익도 창출하지
            않습니다.
          </p>
        </div>
      </footer>
    </>
  );
}
