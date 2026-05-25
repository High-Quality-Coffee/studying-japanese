import type { KanaCard } from "@/lib/types";

const basic: KanaCard[] = [
  { char: "あ", reading: "아", romaji: "a", group: "basic", examples: [
    { jp: "あさ", reading: "아사", meaning: "아침" },
    { jp: "あお", reading: "아오", meaning: "파랑" },
  ]},
  { char: "い", reading: "이", romaji: "i", group: "basic", examples: [
    { jp: "いえ", reading: "이에", meaning: "집" },
    { jp: "いし", reading: "이시", meaning: "돌" },
  ]},
  { char: "う", reading: "우", romaji: "u", group: "basic", examples: [
    { jp: "うみ", reading: "우미", meaning: "바다" },
    { jp: "うた", reading: "우타", meaning: "노래" },
  ]},
  { char: "え", reading: "에", romaji: "e", group: "basic", examples: [
    { jp: "えき", reading: "에키", meaning: "역" },
    { jp: "えん", reading: "엔", meaning: "엔(円)" },
  ]},
  { char: "お", reading: "오", romaji: "o", group: "basic", examples: [
    { jp: "おに", reading: "오니", meaning: "도깨비" },
    { jp: "おちゃ", reading: "오챠", meaning: "차" },
  ]},
  { char: "か", reading: "카", romaji: "ka", group: "basic", examples: [
    { jp: "かさ", reading: "카사", meaning: "우산" },
    { jp: "かに", reading: "카니", meaning: "게" },
  ]},
  { char: "き", reading: "키", romaji: "ki", group: "basic", examples: [
    { jp: "き", reading: "키", meaning: "나무" },
    { jp: "きた", reading: "키타", meaning: "북쪽" },
  ]},
  { char: "く", reading: "쿠", romaji: "ku", group: "basic", examples: [
    { jp: "くも", reading: "쿠모", meaning: "구름" },
    { jp: "くち", reading: "쿠치", meaning: "입" },
  ]},
  { char: "け", reading: "케", romaji: "ke", group: "basic", examples: [
    { jp: "けむり", reading: "케무리", meaning: "연기" },
    { jp: "いけ", reading: "이케", meaning: "연못" },
  ]},
  { char: "こ", reading: "코", romaji: "ko", group: "basic", examples: [
    { jp: "こえ", reading: "코에", meaning: "목소리" },
    { jp: "こい", reading: "코이", meaning: "사랑" },
  ]},
  { char: "さ", reading: "사", romaji: "sa", group: "basic", examples: [
    { jp: "さくら", reading: "사쿠라", meaning: "벚꽃" },
    { jp: "さかな", reading: "사카나", meaning: "생선" },
  ]},
  { char: "し", reading: "시", romaji: "shi", group: "basic", examples: [
    { jp: "しま", reading: "시마", meaning: "섬" },
    { jp: "した", reading: "시타", meaning: "아래" },
  ]},
  { char: "す", reading: "스", romaji: "su", group: "basic", examples: [
    { jp: "すし", reading: "스시", meaning: "초밥" },
    { jp: "すな", reading: "스나", meaning: "모래" },
  ]},
  { char: "せ", reading: "세", romaji: "se", group: "basic", examples: [
    { jp: "せかい", reading: "세카이", meaning: "세계" },
    { jp: "せき", reading: "세키", meaning: "자리" },
  ]},
  { char: "そ", reading: "소", romaji: "so", group: "basic", examples: [
    { jp: "そら", reading: "소라", meaning: "하늘" },
    { jp: "そと", reading: "소토", meaning: "바깥" },
  ]},
  { char: "た", reading: "타", romaji: "ta", group: "basic", examples: [
    { jp: "たまご", reading: "타마고", meaning: "계란" },
    { jp: "たこ", reading: "타코", meaning: "문어" },
  ]},
  { char: "ち", reading: "치", romaji: "chi", group: "basic", examples: [
    { jp: "ちず", reading: "치즈", meaning: "지도" },
    { jp: "ちち", reading: "치치", meaning: "아버지" },
  ]},
  { char: "つ", reading: "츠", romaji: "tsu", group: "basic", examples: [
    { jp: "つき", reading: "츠키", meaning: "달" },
    { jp: "つくえ", reading: "츠쿠에", meaning: "책상" },
  ]},
  { char: "て", reading: "테", romaji: "te", group: "basic", examples: [
    { jp: "て", reading: "테", meaning: "손" },
    { jp: "てがみ", reading: "테가미", meaning: "편지" },
  ]},
  { char: "と", reading: "토", romaji: "to", group: "basic", examples: [
    { jp: "とり", reading: "토리", meaning: "새" },
    { jp: "とけい", reading: "토케이", meaning: "시계" },
  ]},
  { char: "な", reading: "나", romaji: "na", group: "basic", examples: [
    { jp: "なつ", reading: "나츠", meaning: "여름" },
    { jp: "なみ", reading: "나미", meaning: "파도" },
  ]},
  { char: "に", reading: "니", romaji: "ni", group: "basic", examples: [
    { jp: "にく", reading: "니쿠", meaning: "고기" },
    { jp: "にし", reading: "니시", meaning: "서쪽" },
  ]},
  { char: "ぬ", reading: "누", romaji: "nu", group: "basic", examples: [
    { jp: "ぬま", reading: "누마", meaning: "늪" },
    { jp: "ぬの", reading: "누노", meaning: "천" },
  ]},
  { char: "ね", reading: "네", romaji: "ne", group: "basic", examples: [
    { jp: "ねこ", reading: "네코", meaning: "고양이" },
    { jp: "ねつ", reading: "네츠", meaning: "열" },
  ]},
  { char: "の", reading: "노", romaji: "no", group: "basic", examples: [
    { jp: "のはら", reading: "노하라", meaning: "들판" },
    { jp: "のみもの", reading: "노미모노", meaning: "음료" },
  ]},
  { char: "は", reading: "하", romaji: "ha", group: "basic", examples: [
    { jp: "はな", reading: "하나", meaning: "꽃" },
    { jp: "はる", reading: "하루", meaning: "봄" },
  ]},
  { char: "ひ", reading: "히", romaji: "hi", group: "basic", examples: [
    { jp: "ひと", reading: "히토", meaning: "사람" },
    { jp: "ひる", reading: "히루", meaning: "낮" },
  ]},
  { char: "ふ", reading: "후", romaji: "fu", group: "basic", examples: [
    { jp: "ふね", reading: "후네", meaning: "배" },
    { jp: "ふゆ", reading: "후유", meaning: "겨울" },
  ]},
  { char: "へ", reading: "헤", romaji: "he", group: "basic", examples: [
    { jp: "へや", reading: "헤야", meaning: "방" },
    { jp: "へび", reading: "헤비", meaning: "뱀" },
  ]},
  { char: "ほ", reading: "호", romaji: "ho", group: "basic", examples: [
    { jp: "ほし", reading: "호시", meaning: "별" },
    { jp: "ほん", reading: "혼", meaning: "책" },
  ]},
  { char: "ま", reading: "마", romaji: "ma", group: "basic", examples: [
    { jp: "まど", reading: "마도", meaning: "창문" },
    { jp: "まち", reading: "마치", meaning: "마을" },
  ]},
  { char: "み", reading: "미", romaji: "mi", group: "basic", examples: [
    { jp: "みず", reading: "미즈", meaning: "물" },
    { jp: "みみ", reading: "미미", meaning: "귀" },
  ]},
  { char: "む", reading: "무", romaji: "mu", group: "basic", examples: [
    { jp: "むし", reading: "무시", meaning: "벌레" },
    { jp: "むら", reading: "무라", meaning: "마을" },
  ]},
  { char: "め", reading: "메", romaji: "me", group: "basic", examples: [
    { jp: "め", reading: "메", meaning: "눈(目)" },
    { jp: "めがね", reading: "메가네", meaning: "안경" },
  ]},
  { char: "も", reading: "모", romaji: "mo", group: "basic", examples: [
    { jp: "もも", reading: "모모", meaning: "복숭아" },
    { jp: "もり", reading: "모리", meaning: "숲" },
  ]},
  { char: "や", reading: "야", romaji: "ya", group: "basic", examples: [
    { jp: "やま", reading: "야마", meaning: "산" },
    { jp: "やね", reading: "야네", meaning: "지붕" },
  ]},
  { char: "ゆ", reading: "유", romaji: "yu", group: "basic", examples: [
    { jp: "ゆき", reading: "유키", meaning: "눈(雪)" },
    { jp: "ゆめ", reading: "유메", meaning: "꿈" },
  ]},
  { char: "よ", reading: "요", romaji: "yo", group: "basic", examples: [
    { jp: "よる", reading: "요루", meaning: "밤" },
    { jp: "よこ", reading: "요코", meaning: "옆" },
  ]},
  { char: "ら", reading: "라", romaji: "ra", group: "basic", examples: [
    { jp: "らくだ", reading: "라쿠다", meaning: "낙타" },
    { jp: "らいねん", reading: "라이넨", meaning: "내년" },
  ]},
  { char: "り", reading: "리", romaji: "ri", group: "basic", examples: [
    { jp: "りんご", reading: "링고", meaning: "사과" },
    { jp: "りゆう", reading: "리유우", meaning: "이유" },
  ]},
  { char: "る", reading: "루", romaji: "ru", group: "basic", examples: [
    { jp: "るす", reading: "루스", meaning: "부재중" },
    { jp: "あひる", reading: "아히루", meaning: "오리" },
  ]},
  { char: "れ", reading: "레", romaji: "re", group: "basic", examples: [
    { jp: "れきし", reading: "레키시", meaning: "역사" },
    { jp: "れんしゅう", reading: "렌슈우", meaning: "연습" },
  ]},
  { char: "ろ", reading: "로", romaji: "ro", group: "basic", examples: [
    { jp: "ろうそく", reading: "로우소쿠", meaning: "양초" },
    { jp: "ろば", reading: "로바", meaning: "당나귀" },
  ]},
  { char: "わ", reading: "와", romaji: "wa", group: "basic", examples: [
    { jp: "わたし", reading: "와타시", meaning: "나" },
    { jp: "わに", reading: "와니", meaning: "악어" },
  ]},
  { char: "を", reading: "오", romaji: "wo", group: "basic", examples: [
    { jp: "ほんをよむ", reading: "혼오요무", meaning: "책을 읽다 (조사)" },
    { jp: "みずをのむ", reading: "미즈오노무", meaning: "물을 마시다 (조사)" },
  ]},
  { char: "ん", reading: "ㄴ/ㅇ", romaji: "n", group: "basic", examples: [
    { jp: "ほん", reading: "혼", meaning: "책 (ㄴ)" },
    { jp: "さん", reading: "상", meaning: "씨/-님 (ㅇ)" },
  ]},
];

const dakuten: KanaCard[] = [
  { char: "が", reading: "가", romaji: "ga", group: "dakuten", examples: [
    { jp: "がっこう", reading: "각코우", meaning: "학교" },
    { jp: "めがね", reading: "메가네", meaning: "안경" },
  ]},
  { char: "ぎ", reading: "기", romaji: "gi", group: "dakuten", examples: [
    { jp: "ぎんこう", reading: "긴코우", meaning: "은행" },
    { jp: "かぎ", reading: "카기", meaning: "열쇠" },
  ]},
  { char: "ぐ", reading: "구", romaji: "gu", group: "dakuten", examples: [
    { jp: "ぐあい", reading: "구아이", meaning: "상태" },
    { jp: "かぐ", reading: "카구", meaning: "가구" },
  ]},
  { char: "げ", reading: "게", romaji: "ge", group: "dakuten", examples: [
    { jp: "げんき", reading: "겐키", meaning: "건강함" },
    { jp: "かげ", reading: "카게", meaning: "그림자" },
  ]},
  { char: "ご", reading: "고", romaji: "go", group: "dakuten", examples: [
    { jp: "ごはん", reading: "고한", meaning: "밥" },
    { jp: "ごご", reading: "고고", meaning: "오후" },
  ]},
  { char: "ざ", reading: "자", romaji: "za", group: "dakuten", examples: [
    { jp: "ざっし", reading: "잣시", meaning: "잡지" },
    { jp: "ひざ", reading: "히자", meaning: "무릎" },
  ]},
  { char: "じ", reading: "지", romaji: "ji", group: "dakuten", examples: [
    { jp: "じかん", reading: "지칸", meaning: "시간" },
    { jp: "じしょ", reading: "지쇼", meaning: "사전" },
  ]},
  { char: "ず", reading: "즈", romaji: "zu", group: "dakuten", examples: [
    { jp: "ずっと", reading: "줏토", meaning: "쭉, 계속" },
    { jp: "みず", reading: "미즈", meaning: "물" },
  ]},
  { char: "ぜ", reading: "제", romaji: "ze", group: "dakuten", examples: [
    { jp: "ぜんぶ", reading: "젠부", meaning: "전부" },
    { jp: "かぜ", reading: "카제", meaning: "바람" },
  ]},
  { char: "ぞ", reading: "조", romaji: "zo", group: "dakuten", examples: [
    { jp: "ぞう", reading: "조우", meaning: "코끼리" },
    { jp: "なぞ", reading: "나조", meaning: "수수께끼" },
  ]},
  { char: "だ", reading: "다", romaji: "da", group: "dakuten", examples: [
    { jp: "だいがく", reading: "다이가쿠", meaning: "대학" },
    { jp: "からだ", reading: "카라다", meaning: "몸" },
  ]},
  { char: "ぢ", reading: "지", romaji: "ji", group: "dakuten", examples: [
    { jp: "はなぢ", reading: "하나지", meaning: "코피" },
    { jp: "ちぢむ", reading: "치지무", meaning: "줄어들다" },
  ]},
  { char: "づ", reading: "즈", romaji: "zu", group: "dakuten", examples: [
    { jp: "つづく", reading: "츠즈쿠", meaning: "이어지다" },
    { jp: "みかづき", reading: "미카즈키", meaning: "초승달" },
  ]},
  { char: "で", reading: "데", romaji: "de", group: "dakuten", examples: [
    { jp: "でんわ", reading: "덴와", meaning: "전화" },
    { jp: "でぐち", reading: "데구치", meaning: "출구" },
  ]},
  { char: "ど", reading: "도", romaji: "do", group: "dakuten", examples: [
    { jp: "どこ", reading: "도코", meaning: "어디" },
    { jp: "まど", reading: "마도", meaning: "창문" },
  ]},
  { char: "ば", reading: "바", romaji: "ba", group: "dakuten", examples: [
    { jp: "ばす", reading: "바스", meaning: "버스" },
    { jp: "そば", reading: "소바", meaning: "메밀국수" },
  ]},
  { char: "び", reading: "비", romaji: "bi", group: "dakuten", examples: [
    { jp: "びょういん", reading: "뵤우인", meaning: "병원" },
    { jp: "へび", reading: "헤비", meaning: "뱀" },
  ]},
  { char: "ぶ", reading: "부", romaji: "bu", group: "dakuten", examples: [
    { jp: "ぶた", reading: "부타", meaning: "돼지" },
    { jp: "かぶ", reading: "카부", meaning: "순무" },
  ]},
  { char: "べ", reading: "베", romaji: "be", group: "dakuten", examples: [
    { jp: "べんとう", reading: "벤토우", meaning: "도시락" },
    { jp: "かべ", reading: "카베", meaning: "벽" },
  ]},
  { char: "ぼ", reading: "보", romaji: "bo", group: "dakuten", examples: [
    { jp: "ぼうし", reading: "보우시", meaning: "모자" },
    { jp: "つぼ", reading: "츠보", meaning: "항아리" },
  ]},
  { char: "ぱ", reading: "파", romaji: "pa", group: "dakuten", examples: [
    { jp: "ぱん", reading: "팡", meaning: "빵" },
    { jp: "かんぱい", reading: "칸파이", meaning: "건배" },
  ]},
  { char: "ぴ", reading: "피", romaji: "pi", group: "dakuten", examples: [
    { jp: "ぴあの", reading: "피아노", meaning: "피아노" },
    { jp: "えんぴつ", reading: "엔피츠", meaning: "연필" },
  ]},
  { char: "ぷ", reading: "푸", romaji: "pu", group: "dakuten", examples: [
    { jp: "てんぷら", reading: "텐푸라", meaning: "튀김" },
    { jp: "ぷりん", reading: "푸린", meaning: "푸딩" },
  ]},
  { char: "ぺ", reading: "페", romaji: "pe", group: "dakuten", examples: [
    { jp: "ぺん", reading: "펜", meaning: "펜" },
    { jp: "ぺこぺこ", reading: "페코페코", meaning: "배고픔(의태어)" },
  ]},
  { char: "ぽ", reading: "포", romaji: "po", group: "dakuten", examples: [
    { jp: "さんぽ", reading: "산포", meaning: "산책" },
    { jp: "たんぽぽ", reading: "탄포포", meaning: "민들레" },
  ]},
];

const yoon: KanaCard[] = [
  { char: "きゃ", reading: "캬", romaji: "kya", group: "yoon", examples: [
    { jp: "きゃく", reading: "캬쿠", meaning: "손님" },
    { jp: "おきゃくさん", reading: "오캬쿠상", meaning: "손님(존칭)" },
  ]},
  { char: "きゅ", reading: "큐", romaji: "kyu", group: "yoon", examples: [
    { jp: "きゅう", reading: "큐우", meaning: "9, 갑작스러움" },
    { jp: "やきゅう", reading: "야큐우", meaning: "야구" },
  ]},
  { char: "きょ", reading: "쿄", romaji: "kyo", group: "yoon", examples: [
    { jp: "きょう", reading: "쿄우", meaning: "오늘" },
    { jp: "とうきょう", reading: "토우쿄우", meaning: "도쿄" },
  ]},
  { char: "しゃ", reading: "샤", romaji: "sha", group: "yoon", examples: [
    { jp: "しゃしん", reading: "샤신", meaning: "사진" },
    { jp: "でんしゃ", reading: "덴샤", meaning: "전철" },
  ]},
  { char: "しゅ", reading: "슈", romaji: "shu", group: "yoon", examples: [
    { jp: "しゅみ", reading: "슈미", meaning: "취미" },
    { jp: "しゅくだい", reading: "슈쿠다이", meaning: "숙제" },
  ]},
  { char: "しょ", reading: "쇼", romaji: "sho", group: "yoon", examples: [
    { jp: "しょくじ", reading: "쇼쿠지", meaning: "식사" },
    { jp: "じしょ", reading: "지쇼", meaning: "사전" },
  ]},
  { char: "ちゃ", reading: "챠", romaji: "cha", group: "yoon", examples: [
    { jp: "おちゃ", reading: "오챠", meaning: "차" },
    { jp: "ちゃいろ", reading: "챠이로", meaning: "갈색" },
  ]},
  { char: "ちゅ", reading: "츄", romaji: "chu", group: "yoon", examples: [
    { jp: "ちゅうい", reading: "츄우이", meaning: "주의" },
    { jp: "ちゅうがく", reading: "츄우가쿠", meaning: "중학교" },
  ]},
  { char: "ちょ", reading: "쵸", romaji: "cho", group: "yoon", examples: [
    { jp: "ちょっと", reading: "춋토", meaning: "조금, 잠깐" },
    { jp: "ちょきん", reading: "쵸킨", meaning: "저금" },
  ]},
  { char: "にゃ", reading: "냐", romaji: "nya", group: "yoon", examples: [
    { jp: "にゃんこ", reading: "냔코", meaning: "고양이(애칭)" },
    { jp: "こんにゃく", reading: "콘냐쿠", meaning: "곤약" },
  ]},
  { char: "にゅ", reading: "뉴", romaji: "nyu", group: "yoon", examples: [
    { jp: "にゅういん", reading: "뉴우인", meaning: "입원" },
    { jp: "ぎゅうにゅう", reading: "규우뉴우", meaning: "우유" },
  ]},
  { char: "にょ", reading: "뇨", romaji: "nyo", group: "yoon", examples: [
    { jp: "にょうぼう", reading: "뇨우보우", meaning: "아내" },
    { jp: "かんにょう", reading: "칸뇨우", meaning: "관용" },
  ]},
  { char: "ひゃ", reading: "햐", romaji: "hya", group: "yoon", examples: [
    { jp: "ひゃく", reading: "햐쿠", meaning: "100" },
    { jp: "さんびゃく", reading: "산뱌쿠", meaning: "300" },
  ]},
  { char: "ひゅ", reading: "휴", romaji: "hyu", group: "yoon", examples: [
    { jp: "ひゅうひゅう", reading: "휴우휴우", meaning: "바람 소리" },
    { jp: "ひゅうが", reading: "휴우가", meaning: "휴가(지명)" },
  ]},
  { char: "ひょ", reading: "효", romaji: "hyo", group: "yoon", examples: [
    { jp: "ひょう", reading: "효우", meaning: "표, 표범" },
    { jp: "ひょうし", reading: "효우시", meaning: "표지" },
  ]},
  { char: "みゃ", reading: "먀", romaji: "mya", group: "yoon", examples: [
    { jp: "みゃく", reading: "먀쿠", meaning: "맥, 맥박" },
    { jp: "みゃくはく", reading: "먀쿠하쿠", meaning: "맥박" },
  ]},
  { char: "みゅ", reading: "뮤", romaji: "myu", group: "yoon", examples: [
    { jp: "みゅーじっく", reading: "뮤직쿠", meaning: "뮤직(외래어)" },
    { jp: "みゅーじかる", reading: "뮤지카루", meaning: "뮤지컬" },
  ]},
  { char: "みょ", reading: "묘", romaji: "myo", group: "yoon", examples: [
    { jp: "みょうじ", reading: "묘우지", meaning: "성씨" },
    { jp: "みょうにち", reading: "묘우니치", meaning: "내일(격식)" },
  ]},
  { char: "りゃ", reading: "랴", romaji: "rya", group: "yoon", examples: [
    { jp: "りゃくす", reading: "랴쿠스", meaning: "생략하다" },
    { jp: "せんりゃく", reading: "센랴쿠", meaning: "전략" },
  ]},
  { char: "りゅ", reading: "류", romaji: "ryu", group: "yoon", examples: [
    { jp: "りゅうがく", reading: "류우가쿠", meaning: "유학" },
    { jp: "りゅうこう", reading: "류우코우", meaning: "유행" },
  ]},
  { char: "りょ", reading: "료", romaji: "ryo", group: "yoon", examples: [
    { jp: "りょこう", reading: "료코우", meaning: "여행" },
    { jp: "りょうり", reading: "료우리", meaning: "요리" },
  ]},
  { char: "ぎゃ", reading: "갸", romaji: "gya", group: "yoon", examples: [
    { jp: "ぎゃく", reading: "갸쿠", meaning: "역, 반대" },
    { jp: "ぎゃくてん", reading: "갸쿠텐", meaning: "역전" },
  ]},
  { char: "ぎゅ", reading: "규", romaji: "gyu", group: "yoon", examples: [
    { jp: "ぎゅうにく", reading: "규우니쿠", meaning: "소고기" },
    { jp: "ぎゅうにゅう", reading: "규우뉴우", meaning: "우유" },
  ]},
  { char: "ぎょ", reading: "교", romaji: "gyo", group: "yoon", examples: [
    { jp: "ぎょうじ", reading: "교우지", meaning: "행사" },
    { jp: "きんぎょ", reading: "킨교", meaning: "금붕어" },
  ]},
  { char: "じゃ", reading: "쟈", romaji: "ja", group: "yoon", examples: [
    { jp: "じゃがいも", reading: "쟈가이모", meaning: "감자" },
    { jp: "じゃま", reading: "쟈마", meaning: "방해" },
  ]},
  { char: "じゅ", reading: "쥬", romaji: "ju", group: "yoon", examples: [
    { jp: "じゅぎょう", reading: "쥬교우", meaning: "수업" },
    { jp: "じゅんび", reading: "쥰비", meaning: "준비" },
  ]},
  { char: "じょ", reading: "죠", romaji: "jo", group: "yoon", examples: [
    { jp: "じょせい", reading: "죠세이", meaning: "여성" },
    { jp: "じょうず", reading: "죠우즈", meaning: "잘함, 능숙함" },
  ]},
  { char: "びゃ", reading: "뱌", romaji: "bya", group: "yoon", examples: [
    { jp: "さんびゃく", reading: "산뱌쿠", meaning: "300" },
    { jp: "ろくびゃく", reading: "로쿠뱌쿠", meaning: "600" },
  ]},
  { char: "びゅ", reading: "뷰", romaji: "byu", group: "yoon", examples: [
    { jp: "びゅーびゅー", reading: "뷰우뷰우", meaning: "쌩쌩(바람)" },
    { jp: "デビュー", reading: "데뷰우", meaning: "데뷔" },
  ]},
  { char: "びょ", reading: "뵤", romaji: "byo", group: "yoon", examples: [
    { jp: "びょういん", reading: "뵤우인", meaning: "병원" },
    { jp: "びょうき", reading: "뵤우키", meaning: "병" },
  ]},
  { char: "ぴゃ", reading: "퍄", romaji: "pya", group: "yoon", examples: [
    { jp: "はっぴゃく", reading: "핫퍄쿠", meaning: "800" },
    { jp: "ろっぴゃく", reading: "롯퍄쿠", meaning: "600" },
  ]},
  { char: "ぴゅ", reading: "퓨", romaji: "pyu", group: "yoon", examples: [
    { jp: "ぴゅあ", reading: "퓨아", meaning: "퓨어(외래어)" },
    { jp: "コンピューター", reading: "콘퓨우타아", meaning: "컴퓨터" },
  ]},
  { char: "ぴょ", reading: "표", romaji: "pyo", group: "yoon", examples: [
    { jp: "はっぴょう", reading: "핫표우", meaning: "발표" },
    { jp: "ぴょんぴょん", reading: "푱푱", meaning: "깡충깡충" },
  ]},
];

export const hiragana: KanaCard[] = [...basic, ...dakuten, ...yoon];
