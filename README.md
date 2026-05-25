# 일본어 개인 학습 · 語

히라가나 · 가타카나 · 상용한자를 카드로 익히는 개인 학습용 웹 앱입니다.
카드를 보고 답을 떠올린 뒤, 정답을 눌러 확인하는 단순한 플래시카드 형식이며,
학습 진도(외운 카드)는 브라우저에 자동 저장됩니다.

## 라이선스 · 사용 안내

이 프로젝트는 **순수하게 개인 학습용**으로 만들어졌으며, 어떠한 수익도
창출하지 않습니다.

- 소스 코드는 자유롭게 가져가서 사용·수정하셔도 됩니다.
- 로컬에서 직접 실행하셔도 되고, 원하시는 곳에 직접 배포해서 쓰셔도 됩니다.
- 별도로 호스팅 중인 서비스가 있다면 그곳에서 그대로 사용하셔도 됩니다.

## 기능

- **히라가나 / 가타카나** — 기본 가나 46자 + 탁음 · 반탁음 · 요음, 총 104자씩
- **히라가나 + 가타카나 통합** — 두 가나를 섞어서 셔플 출제 (기본 셔플 ON)
- **상용한자 단계별 학습** — 볼륨 단위로 단계가 자동 구성되며, 각 단계별 진도 ·
  클리어 여부가 표시됩니다. 모든 단계를 합쳐서 학습하는 모드도 제공합니다.
- **공통 기능**
  - 정답 보기 / 다시 가리기 토글
  - 셔플 (시드 기반 — 같은 세션 내에선 순서 유지, "다시 섞기"로 새 순서)
  - 필터: 전체 / 모르는 것만 / 외운 것만
  - 외움 표시 (브라우저 `localStorage` 에 자동 저장)
  - 진도 초기화 (확인 모달 포함)
  - 키보드: `←` / `→` 이동, `Space` 정답, `M` 외움, `S` 셔플
  - 좌우 스와이프로 카드 이동 (모바일)

## 데이터 출처

- **히라가나 / 가타카나** — 직접 작성 (한국어 발음 + 예시 단어 2~3개씩)
- **상용한자** — **YBM 일본 상용한자 1026** 핵심단어카드를 기반으로 구성

## 기술 스택

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 · Apple-style 디자인 토큰 (`DESIGN.md` 참고)
- React Server Components + 일부 Client Components (학습 세션)
- 데이터: 정적 JSON / TS 파일 · 진도는 `localStorage`

## 로컬에서 실행

저장소를 받은 뒤 의존성 설치 후 개발 서버를 띄우면 됩니다.

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인하실 수 있습니다.

## 빌드 후 배포

정적 빌드 후 원하시는 환경에 직접 배포하셔도 됩니다.

```bash
npm run build
npm run start
```

Vercel · Netlify · Cloudflare Pages 같은 Next.js 호환 호스팅에 그대로 올리시면 됩니다.

## 한자 데이터 추가

상용한자 학습 자료는 `materials/vol*_kanji.json` 형식으로 볼륨 단위로 관리됩니다.
새 볼륨을 추가하시려면:

1. `materials/` 폴더에 `vol2_kanji.json`, `vol3_kanji.json` ... 형식으로 파일 추가
2. `npm run dev` 다시 실행 (또는 `npm run kanji:index` 로 수동 재생성)

`predev` / `prebuild` 훅이 자동으로 `data/kanji-volumes.generated.ts` 를 생성합니다.

각 볼륨 JSON 의 형식:

```jsonc
{
  "meta": {
    "source": "YBM 일본어 상용한자 1026 핵심단어카드",
    "volume": 1,
    "total_kanji_in_volume": 40,
    "kanji_range": "0001-0040"
  },
  "kanji_list": [
    {
      "kanji_id": "0001",
      "kanji": "一",
      "korean_reading": "한 일",
      "on_yomi_words": [
        { "word": "一番", "reading": "いちばん", "meaning": "1번, 제일" }
      ],
      "kun_yomi_words": [
        { "word": "一つ", "reading": "ひとつ", "meaning": "한 개" }
      ]
    }
  ]
}
```

## 폴더 구조

```
app/                Next.js App Router 페이지
  hiragana/         히라가나 학습
  katakana/         가타카나 학습
  kana-mix/         히라가나 + 가타카나 통합 학습
  kanji/            단계 선택 페이지
  kanji/all/        전체 한자 통합 학습
  kanji/stage/[n]/  N단계 학습
components/         FlashCard · StudySession · Logo
data/               히라가나·가타카나·한자 TS 모듈
materials/          한자 원본 JSON (vol*_kanji.json)
public/             로고 · 배경 이미지 · OG 이미지
scripts/            빌드 보조 스크립트 (한자 인덱스 생성 등)
lib/types.ts        공용 타입
DESIGN.md           디자인 시스템 (Apple)
```

## 제작

Made by [High-Quality-Coffee](https://github.com/High-Quality-Coffee).

저장소: [github.com/High-Quality-Coffee/studying-japanese](https://github.com/High-Quality-Coffee/studying-japanese)
