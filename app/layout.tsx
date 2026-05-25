import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoJp = Noto_Sans_JP({
  variable: "--font-jp-google",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoKr = Noto_Sans_KR({
  variable: "--font-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studying-japanese.local"),
  title: {
    default: "일본어 개인 학습",
    template: "%s · 일본어 개인 학습",
  },
  description:
    "히라가나 · 가타카나 · 상용한자 카드를 보고 정답을 떠올린 뒤 확인하는 개인 학습용 앱.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "일본어 개인 학습",
    description: "히라가나 · 가타카나 · 상용한자 학습",
    images: [
      {
        url: "/totoro.jpg",
        width: 1200,
        height: 630,
        alt: "일본어 개인 학습",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "일본어 개인 학습",
    description: "히라가나 · 가타카나 · 상용한자 학습",
    images: ["/totoro.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoKr.variable} ${notoJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
