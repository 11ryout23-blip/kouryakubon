import "./globals.css";

export const metadata = {
  title: "攻略本 - 誰かの失敗は、誰かの攻略本になる",
  description:
    "失敗も成功も、すべての人生経験を共有するプラットフォーム。読む人には攻略本を、書く人には「あなたの人生には価値がある」という証を。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700;900&family=Noto+Sans+JP:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
