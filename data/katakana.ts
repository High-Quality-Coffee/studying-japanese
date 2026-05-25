import type { KanaCard } from "@/lib/types";

const basic: KanaCard[] = [
  { char: "ア", reading: "아", romaji: "a", group: "basic", examples: [
    { jp: "アイス", reading: "아이스", meaning: "아이스(크림)" },
    { jp: "アメリカ", reading: "아메리카", meaning: "미국" },
  ]},
  { char: "イ", reading: "이", romaji: "i", group: "basic", examples: [
    { jp: "インク", reading: "잉쿠", meaning: "잉크" },
    { jp: "イタリア", reading: "이타리아", meaning: "이탈리아" },
  ]},
  { char: "ウ", reading: "우", romaji: "u", group: "basic", examples: [
    { jp: "ウール", reading: "우우루", meaning: "울(양털)" },
    { jp: "ウェブ", reading: "웨부", meaning: "웹" },
  ]},
  { char: "エ", reading: "에", romaji: "e", group: "basic", examples: [
    { jp: "エアコン", reading: "에아콘", meaning: "에어컨" },
    { jp: "エンジン", reading: "엔진", meaning: "엔진" },
  ]},
  { char: "オ", reading: "오", romaji: "o", group: "basic", examples: [
    { jp: "オレンジ", reading: "오렌지", meaning: "오렌지" },
    { jp: "オフィス", reading: "오피스", meaning: "오피스" },
  ]},
  { char: "カ", reading: "카", romaji: "ka", group: "basic", examples: [
    { jp: "カメラ", reading: "카메라", meaning: "카메라" },
    { jp: "カフェ", reading: "카페", meaning: "카페" },
  ]},
  { char: "キ", reading: "키", romaji: "ki", group: "basic", examples: [
    { jp: "キロ", reading: "키로", meaning: "킬로" },
    { jp: "キス", reading: "키스", meaning: "키스" },
  ]},
  { char: "ク", reading: "쿠", romaji: "ku", group: "basic", examples: [
    { jp: "クラス", reading: "쿠라스", meaning: "클래스, 반" },
    { jp: "クッキー", reading: "쿡키이", meaning: "쿠키" },
  ]},
  { char: "ケ", reading: "케", romaji: "ke", group: "basic", examples: [
    { jp: "ケーキ", reading: "케에키", meaning: "케이크" },
    { jp: "ケータイ", reading: "케에타이", meaning: "휴대전화" },
  ]},
  { char: "コ", reading: "코", romaji: "ko", group: "basic", examples: [
    { jp: "コーヒー", reading: "코오히이", meaning: "커피" },
    { jp: "コップ", reading: "콥푸", meaning: "컵" },
  ]},
  { char: "サ", reading: "사", romaji: "sa", group: "basic", examples: [
    { jp: "サラダ", reading: "사라다", meaning: "샐러드" },
    { jp: "サッカー", reading: "삭카아", meaning: "축구" },
  ]},
  { char: "シ", reading: "시", romaji: "shi", group: "basic", examples: [
    { jp: "シャツ", reading: "샤츠", meaning: "셔츠" },
    { jp: "システム", reading: "시스테무", meaning: "시스템" },
  ]},
  { char: "ス", reading: "스", romaji: "su", group: "basic", examples: [
    { jp: "スポーツ", reading: "스포오츠", meaning: "스포츠" },
    { jp: "スマホ", reading: "스마호", meaning: "스마트폰" },
  ]},
  { char: "セ", reading: "세", romaji: "se", group: "basic", examples: [
    { jp: "セール", reading: "세에루", meaning: "세일" },
    { jp: "セット", reading: "셋토", meaning: "세트" },
  ]},
  { char: "ソ", reading: "소", romaji: "so", group: "basic", examples: [
    { jp: "ソファ", reading: "소화", meaning: "소파" },
    { jp: "ソース", reading: "소오스", meaning: "소스" },
  ]},
  { char: "タ", reading: "타", romaji: "ta", group: "basic", examples: [
    { jp: "タクシー", reading: "타쿠시이", meaning: "택시" },
    { jp: "タオル", reading: "타오루", meaning: "수건" },
  ]},
  { char: "チ", reading: "치", romaji: "chi", group: "basic", examples: [
    { jp: "チーズ", reading: "치이즈", meaning: "치즈" },
    { jp: "チケット", reading: "치켓토", meaning: "티켓" },
  ]},
  { char: "ツ", reading: "츠", romaji: "tsu", group: "basic", examples: [
    { jp: "ツアー", reading: "츠아아", meaning: "투어" },
    { jp: "スポーツ", reading: "스포오츠", meaning: "스포츠" },
  ]},
  { char: "テ", reading: "테", romaji: "te", group: "basic", examples: [
    { jp: "テレビ", reading: "테레비", meaning: "텔레비전" },
    { jp: "テスト", reading: "테스토", meaning: "테스트" },
  ]},
  { char: "ト", reading: "토", romaji: "to", group: "basic", examples: [
    { jp: "トマト", reading: "토마토", meaning: "토마토" },
    { jp: "ノート", reading: "노오토", meaning: "노트" },
  ]},
  { char: "ナ", reading: "나", romaji: "na", group: "basic", examples: [
    { jp: "ナイフ", reading: "나이후", meaning: "나이프" },
    { jp: "バナナ", reading: "바나나", meaning: "바나나" },
  ]},
  { char: "ニ", reading: "니", romaji: "ni", group: "basic", examples: [
    { jp: "ニュース", reading: "뉴우스", meaning: "뉴스" },
    { jp: "テニス", reading: "테니스", meaning: "테니스" },
  ]},
  { char: "ヌ", reading: "누", romaji: "nu", group: "basic", examples: [
    { jp: "カヌー", reading: "카누우", meaning: "카누" },
    { jp: "ヌードル", reading: "누우도루", meaning: "누들" },
  ]},
  { char: "ネ", reading: "네", romaji: "ne", group: "basic", examples: [
    { jp: "ネクタイ", reading: "네쿠타이", meaning: "넥타이" },
    { jp: "ネット", reading: "넷토", meaning: "넷, 망" },
  ]},
  { char: "ノ", reading: "노", romaji: "no", group: "basic", examples: [
    { jp: "ノート", reading: "노오토", meaning: "노트" },
    { jp: "ノック", reading: "녹쿠", meaning: "노크" },
  ]},
  { char: "ハ", reading: "하", romaji: "ha", group: "basic", examples: [
    { jp: "ハム", reading: "하무", meaning: "햄" },
    { jp: "ハート", reading: "하아토", meaning: "하트" },
  ]},
  { char: "ヒ", reading: "히", romaji: "hi", group: "basic", examples: [
    { jp: "ヒーロー", reading: "히이로오", meaning: "히어로" },
    { jp: "ヒント", reading: "힌토", meaning: "힌트" },
  ]},
  { char: "フ", reading: "후", romaji: "fu", group: "basic", examples: [
    { jp: "フライト", reading: "후라이토", meaning: "비행, 플라이트" },
    { jp: "フォーク", reading: "호오쿠", meaning: "포크" },
  ]},
  { char: "ヘ", reading: "헤", romaji: "he", group: "basic", examples: [
    { jp: "ヘア", reading: "헤아", meaning: "헤어" },
    { jp: "ヘルメット", reading: "헤루멧토", meaning: "헬멧" },
  ]},
  { char: "ホ", reading: "호", romaji: "ho", group: "basic", examples: [
    { jp: "ホテル", reading: "호테루", meaning: "호텔" },
    { jp: "ホーム", reading: "호오무", meaning: "홈, 플랫폼" },
  ]},
  { char: "マ", reading: "마", romaji: "ma", group: "basic", examples: [
    { jp: "マスク", reading: "마스쿠", meaning: "마스크" },
    { jp: "マーク", reading: "마아쿠", meaning: "마크" },
  ]},
  { char: "ミ", reading: "미", romaji: "mi", group: "basic", examples: [
    { jp: "ミルク", reading: "미루쿠", meaning: "밀크" },
    { jp: "ミス", reading: "미스", meaning: "미스, 실수" },
  ]},
  { char: "ム", reading: "무", romaji: "mu", group: "basic", examples: [
    { jp: "ゲーム", reading: "게에무", meaning: "게임" },
    { jp: "ホーム", reading: "호오무", meaning: "홈" },
  ]},
  { char: "メ", reading: "메", romaji: "me", group: "basic", examples: [
    { jp: "メール", reading: "메에루", meaning: "메일" },
    { jp: "メモ", reading: "메모", meaning: "메모" },
  ]},
  { char: "モ", reading: "모", romaji: "mo", group: "basic", examples: [
    { jp: "モデル", reading: "모데루", meaning: "모델" },
    { jp: "モニター", reading: "모니타아", meaning: "모니터" },
  ]},
  { char: "ヤ", reading: "야", romaji: "ya", group: "basic", examples: [
    { jp: "タイヤ", reading: "타이야", meaning: "타이어" },
    { jp: "ヤード", reading: "야아도", meaning: "야드" },
  ]},
  { char: "ユ", reading: "유", romaji: "yu", group: "basic", examples: [
    { jp: "ユニーク", reading: "유니이쿠", meaning: "유니크" },
    { jp: "ユーザー", reading: "유우자아", meaning: "유저" },
  ]},
  { char: "ヨ", reading: "요", romaji: "yo", group: "basic", examples: [
    { jp: "ヨーグルト", reading: "요오구루토", meaning: "요거트" },
    { jp: "ヨーロッパ", reading: "요오롯파", meaning: "유럽" },
  ]},
  { char: "ラ", reading: "라", romaji: "ra", group: "basic", examples: [
    { jp: "ラジオ", reading: "라지오", meaning: "라디오" },
    { jp: "ラーメン", reading: "라아멘", meaning: "라면" },
  ]},
  { char: "リ", reading: "리", romaji: "ri", group: "basic", examples: [
    { jp: "リスト", reading: "리스토", meaning: "리스트" },
    { jp: "リボン", reading: "리본", meaning: "리본" },
  ]},
  { char: "ル", reading: "루", romaji: "ru", group: "basic", examples: [
    { jp: "ルール", reading: "루우루", meaning: "룰" },
    { jp: "ホテル", reading: "호테루", meaning: "호텔" },
  ]},
  { char: "レ", reading: "레", romaji: "re", group: "basic", examples: [
    { jp: "レモン", reading: "레몬", meaning: "레몬" },
    { jp: "レストラン", reading: "레스토란", meaning: "레스토랑" },
  ]},
  { char: "ロ", reading: "로", romaji: "ro", group: "basic", examples: [
    { jp: "ロボット", reading: "로봇토", meaning: "로봇" },
    { jp: "ロビー", reading: "로비이", meaning: "로비" },
  ]},
  { char: "ワ", reading: "와", romaji: "wa", group: "basic", examples: [
    { jp: "ワイン", reading: "와인", meaning: "와인" },
    { jp: "ワイシャツ", reading: "와이샤츠", meaning: "와이셔츠" },
  ]},
  { char: "ヲ", reading: "오", romaji: "wo", group: "basic", examples: [
    { jp: "ヲタク", reading: "오타쿠", meaning: "오타쿠(드물게)" },
    { jp: "—", reading: "—", meaning: "거의 사용되지 않음" },
  ]},
  { char: "ン", reading: "ㄴ/ㅇ", romaji: "n", group: "basic", examples: [
    { jp: "パン", reading: "팡", meaning: "빵 (ㅇ)" },
    { jp: "ペン", reading: "펜", meaning: "펜 (ㄴ)" },
  ]},
];

const dakuten: KanaCard[] = [
  { char: "ガ", reading: "가", romaji: "ga", group: "dakuten", examples: [
    { jp: "ガラス", reading: "가라스", meaning: "유리" },
    { jp: "ガイド", reading: "가이도", meaning: "가이드" },
  ]},
  { char: "ギ", reading: "기", romaji: "gi", group: "dakuten", examples: [
    { jp: "ギター", reading: "기타아", meaning: "기타" },
    { jp: "ギフト", reading: "기후토", meaning: "기프트" },
  ]},
  { char: "グ", reading: "구", romaji: "gu", group: "dakuten", examples: [
    { jp: "グループ", reading: "구루우푸", meaning: "그룹" },
    { jp: "グラス", reading: "구라스", meaning: "유리잔" },
  ]},
  { char: "ゲ", reading: "게", romaji: "ge", group: "dakuten", examples: [
    { jp: "ゲーム", reading: "게에무", meaning: "게임" },
    { jp: "ゲスト", reading: "게스토", meaning: "게스트" },
  ]},
  { char: "ゴ", reading: "고", romaji: "go", group: "dakuten", examples: [
    { jp: "ゴール", reading: "고오루", meaning: "골" },
    { jp: "ゴルフ", reading: "고루후", meaning: "골프" },
  ]},
  { char: "ザ", reading: "자", romaji: "za", group: "dakuten", examples: [
    { jp: "ピザ", reading: "피자", meaning: "피자" },
    { jp: "ザリガニ", reading: "자리가니", meaning: "가재" },
  ]},
  { char: "ジ", reading: "지", romaji: "ji", group: "dakuten", examples: [
    { jp: "ジュース", reading: "쥬우스", meaning: "주스" },
    { jp: "テレビジョン", reading: "테레비죤", meaning: "텔레비전" },
  ]},
  { char: "ズ", reading: "즈", romaji: "zu", group: "dakuten", examples: [
    { jp: "ズボン", reading: "즈본", meaning: "바지" },
    { jp: "サイズ", reading: "사이즈", meaning: "사이즈" },
  ]},
  { char: "ゼ", reading: "제", romaji: "ze", group: "dakuten", examples: [
    { jp: "ゼロ", reading: "제로", meaning: "제로" },
    { jp: "ゼリー", reading: "제리이", meaning: "젤리" },
  ]},
  { char: "ゾ", reading: "조", romaji: "zo", group: "dakuten", examples: [
    { jp: "ゾーン", reading: "조온", meaning: "존" },
    { jp: "リゾート", reading: "리조오토", meaning: "리조트" },
  ]},
  { char: "ダ", reading: "다", romaji: "da", group: "dakuten", examples: [
    { jp: "サラダ", reading: "사라다", meaning: "샐러드" },
    { jp: "ダンス", reading: "단스", meaning: "댄스" },
  ]},
  { char: "ヂ", reading: "지", romaji: "ji", group: "dakuten", examples: [
    { jp: "ラヂオ", reading: "라지오", meaning: "라디오(옛 표기)" },
    { jp: "—", reading: "—", meaning: "현대에는 거의 사용되지 않음" },
  ]},
  { char: "ヅ", reading: "즈", romaji: "zu", group: "dakuten", examples: [
    { jp: "ミルクヅヶ", reading: "—", meaning: "거의 사용되지 않음" },
    { jp: "—", reading: "—", meaning: "현대에는 거의 사용되지 않음" },
  ]},
  { char: "デ", reading: "데", romaji: "de", group: "dakuten", examples: [
    { jp: "デパート", reading: "데파아토", meaning: "백화점" },
    { jp: "データ", reading: "데에타", meaning: "데이터" },
  ]},
  { char: "ド", reading: "도", romaji: "do", group: "dakuten", examples: [
    { jp: "ドア", reading: "도아", meaning: "도어, 문" },
    { jp: "ドラマ", reading: "도라마", meaning: "드라마" },
  ]},
  { char: "バ", reading: "바", romaji: "ba", group: "dakuten", examples: [
    { jp: "バス", reading: "바스", meaning: "버스" },
    { jp: "バナナ", reading: "바나나", meaning: "바나나" },
  ]},
  { char: "ビ", reading: "비", romaji: "bi", group: "dakuten", examples: [
    { jp: "ビル", reading: "비루", meaning: "빌딩" },
    { jp: "ビデオ", reading: "비데오", meaning: "비디오" },
  ]},
  { char: "ブ", reading: "부", romaji: "bu", group: "dakuten", examples: [
    { jp: "ブラシ", reading: "부라시", meaning: "브러시" },
    { jp: "テーブル", reading: "테에부루", meaning: "테이블" },
  ]},
  { char: "ベ", reading: "베", romaji: "be", group: "dakuten", examples: [
    { jp: "ベッド", reading: "벳도", meaning: "베드, 침대" },
    { jp: "ベスト", reading: "베스토", meaning: "베스트" },
  ]},
  { char: "ボ", reading: "보", romaji: "bo", group: "dakuten", examples: [
    { jp: "ボタン", reading: "보탄", meaning: "버튼" },
    { jp: "ボール", reading: "보오루", meaning: "볼, 공" },
  ]},
  { char: "パ", reading: "파", romaji: "pa", group: "dakuten", examples: [
    { jp: "パン", reading: "팡", meaning: "빵" },
    { jp: "パソコン", reading: "파소콘", meaning: "PC" },
  ]},
  { char: "ピ", reading: "피", romaji: "pi", group: "dakuten", examples: [
    { jp: "ピアノ", reading: "피아노", meaning: "피아노" },
    { jp: "ピンク", reading: "핑쿠", meaning: "핑크" },
  ]},
  { char: "プ", reading: "푸", romaji: "pu", group: "dakuten", examples: [
    { jp: "プール", reading: "푸우루", meaning: "수영장" },
    { jp: "プリン", reading: "푸린", meaning: "푸딩" },
  ]},
  { char: "ペ", reading: "페", romaji: "pe", group: "dakuten", examples: [
    { jp: "ペン", reading: "펜", meaning: "펜" },
    { jp: "ページ", reading: "페에지", meaning: "페이지" },
  ]},
  { char: "ポ", reading: "포", romaji: "po", group: "dakuten", examples: [
    { jp: "ポスト", reading: "포스토", meaning: "우체통, 포스트" },
    { jp: "ポイント", reading: "포인토", meaning: "포인트" },
  ]},
];

const yoon: KanaCard[] = [
  { char: "キャ", reading: "캬", romaji: "kya", group: "yoon", examples: [
    { jp: "キャベツ", reading: "캬베츠", meaning: "양배추" },
    { jp: "キャンプ", reading: "캰푸", meaning: "캠프" },
  ]},
  { char: "キュ", reading: "큐", romaji: "kyu", group: "yoon", examples: [
    { jp: "キューブ", reading: "큐우부", meaning: "큐브" },
    { jp: "バーベキュー", reading: "바아베큐우", meaning: "바비큐" },
  ]},
  { char: "キョ", reading: "쿄", romaji: "kyo", group: "yoon", examples: [
    { jp: "トーキョー", reading: "토오쿄오", meaning: "도쿄" },
    { jp: "キョン", reading: "쿈", meaning: "(인명) 쿈" },
  ]},
  { char: "シャ", reading: "샤", romaji: "sha", group: "yoon", examples: [
    { jp: "シャツ", reading: "샤츠", meaning: "셔츠" },
    { jp: "シャワー", reading: "샤와아", meaning: "샤워" },
  ]},
  { char: "シュ", reading: "슈", romaji: "shu", group: "yoon", examples: [
    { jp: "シューズ", reading: "슈우즈", meaning: "슈즈" },
    { jp: "シュート", reading: "슈우토", meaning: "슛" },
  ]},
  { char: "ショ", reading: "쇼", romaji: "sho", group: "yoon", examples: [
    { jp: "ショップ", reading: "숍푸", meaning: "샵" },
    { jp: "ショー", reading: "쇼오", meaning: "쇼" },
  ]},
  { char: "チャ", reading: "챠", romaji: "cha", group: "yoon", examples: [
    { jp: "チャンス", reading: "챤스", meaning: "찬스" },
    { jp: "チャイム", reading: "챠이무", meaning: "차임" },
  ]},
  { char: "チュ", reading: "츄", romaji: "chu", group: "yoon", examples: [
    { jp: "チューブ", reading: "츄우부", meaning: "튜브" },
    { jp: "チューリップ", reading: "츄우립푸", meaning: "튤립" },
  ]},
  { char: "チョ", reading: "쵸", romaji: "cho", group: "yoon", examples: [
    { jp: "チョコ", reading: "쵸코", meaning: "초콜릿" },
    { jp: "チョイス", reading: "쵸이스", meaning: "초이스" },
  ]},
  { char: "ニャ", reading: "냐", romaji: "nya", group: "yoon", examples: [
    { jp: "ニャー", reading: "냐아", meaning: "야옹(의성어)" },
    { jp: "コニャック", reading: "코냑쿠", meaning: "코냑" },
  ]},
  { char: "ニュ", reading: "뉴", romaji: "nyu", group: "yoon", examples: [
    { jp: "ニュース", reading: "뉴우스", meaning: "뉴스" },
    { jp: "メニュー", reading: "메뉴우", meaning: "메뉴" },
  ]},
  { char: "ニョ", reading: "뇨", romaji: "nyo", group: "yoon", examples: [
    { jp: "ニョッキ", reading: "뇩키", meaning: "뇨키" },
    { jp: "カニョン", reading: "카뇬", meaning: "협곡(드물게)" },
  ]},
  { char: "ヒャ", reading: "햐", romaji: "hya", group: "yoon", examples: [
    { jp: "ヒャッホー", reading: "햣호오", meaning: "야호(감탄)" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "ヒュ", reading: "휴", romaji: "hyu", group: "yoon", examples: [
    { jp: "ヒューマン", reading: "휴우만", meaning: "휴먼" },
    { jp: "ヒューズ", reading: "휴우즈", meaning: "퓨즈" },
  ]},
  { char: "ヒョ", reading: "효", romaji: "hyo", group: "yoon", examples: [
    { jp: "ヒョウ", reading: "효우", meaning: "표범" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "ミャ", reading: "먀", romaji: "mya", group: "yoon", examples: [
    { jp: "ミャンマー", reading: "먄마아", meaning: "미얀마" },
    { jp: "ミャオ", reading: "먀오", meaning: "묘(소수민족)" },
  ]},
  { char: "ミュ", reading: "뮤", romaji: "myu", group: "yoon", examples: [
    { jp: "ミュージック", reading: "뮤우직쿠", meaning: "뮤직" },
    { jp: "ミュージカル", reading: "뮤우지카루", meaning: "뮤지컬" },
  ]},
  { char: "ミョ", reading: "묘", romaji: "myo", group: "yoon", examples: [
    { jp: "ミョーン", reading: "묘온", meaning: "뮹(의성어)" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "リャ", reading: "랴", romaji: "rya", group: "yoon", examples: [
    { jp: "リャマ", reading: "랴마", meaning: "라마" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "リュ", reading: "류", romaji: "ryu", group: "yoon", examples: [
    { jp: "リュック", reading: "륙쿠", meaning: "배낭" },
    { jp: "メリュー", reading: "메류우", meaning: "뮤메뉴" },
  ]},
  { char: "リョ", reading: "료", romaji: "ryo", group: "yoon", examples: [
    { jp: "リョコウ", reading: "료코오", meaning: "여행(드물게)" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "ギャ", reading: "갸", romaji: "gya", group: "yoon", examples: [
    { jp: "ギャグ", reading: "갸구", meaning: "개그" },
    { jp: "ギャラリー", reading: "갸라리이", meaning: "갤러리" },
  ]},
  { char: "ギュ", reading: "규", romaji: "gyu", group: "yoon", examples: [
    { jp: "レギュラー", reading: "레규라아", meaning: "레귤러" },
    { jp: "フィギュア", reading: "휘규아", meaning: "피규어" },
  ]},
  { char: "ギョ", reading: "교", romaji: "gyo", group: "yoon", examples: [
    { jp: "ギョーザ", reading: "교오자", meaning: "교자" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "ジャ", reading: "쟈", romaji: "ja", group: "yoon", examples: [
    { jp: "ジャム", reading: "쟈무", meaning: "잼" },
    { jp: "ジャケット", reading: "쟈켓토", meaning: "재킷" },
  ]},
  { char: "ジュ", reading: "쥬", romaji: "ju", group: "yoon", examples: [
    { jp: "ジュース", reading: "쥬우스", meaning: "주스" },
    { jp: "ジュエリー", reading: "쥬에리이", meaning: "주얼리" },
  ]},
  { char: "ジョ", reading: "죠", romaji: "jo", group: "yoon", examples: [
    { jp: "ジョギング", reading: "죠깅구", meaning: "조깅" },
    { jp: "ジョーク", reading: "죠오쿠", meaning: "조크" },
  ]},
  { char: "ビャ", reading: "뱌", romaji: "bya", group: "yoon", examples: [
    { jp: "—", reading: "—", meaning: "외래어에서는 거의 사용되지 않음" },
    { jp: "—", reading: "—", meaning: "—" },
  ]},
  { char: "ビュ", reading: "뷰", romaji: "byu", group: "yoon", examples: [
    { jp: "デビュー", reading: "데뷰우", meaning: "데뷔" },
    { jp: "インタビュー", reading: "인타뷰우", meaning: "인터뷰" },
  ]},
  { char: "ビョ", reading: "뵤", romaji: "byo", group: "yoon", examples: [
    { jp: "ビョーキ", reading: "뵤오키", meaning: "병(드물게)" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "ピャ", reading: "퍄", romaji: "pya", group: "yoon", examples: [
    { jp: "ピャー", reading: "퍄아", meaning: "비명(의성어)" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
  { char: "ピュ", reading: "퓨", romaji: "pyu", group: "yoon", examples: [
    { jp: "コンピューター", reading: "콘퓨우타아", meaning: "컴퓨터" },
    { jp: "ピュア", reading: "퓨아", meaning: "퓨어" },
  ]},
  { char: "ピョ", reading: "표", romaji: "pyo", group: "yoon", examples: [
    { jp: "ピョン", reading: "푱", meaning: "깡충(의성어)" },
    { jp: "—", reading: "—", meaning: "외래어에서는 드물게 사용" },
  ]},
];

export const katakana: KanaCard[] = [...basic, ...dakuten, ...yoon];
