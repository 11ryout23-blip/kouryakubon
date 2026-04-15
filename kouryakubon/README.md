# 攻略本 - デプロイ手順ガイド（初心者向け）

プログラミング経験ゼロでも大丈夫！
以下の手順を上から順番にやっていくだけでサイトが公開できます。

---

## ステップ1：必要なものを準備する

以下の3つのアカウント（すべて無料）を作ってください。

### 1-1. GitHubアカウント
👉 https://github.com にアクセス
→ 「Sign up」をクリック
→ メールアドレス、パスワード、ユーザー名を入力して登録

### 1-2. Vercelアカウント
👉 https://vercel.com にアクセス
→ 「Sign Up」をクリック
→ 「Continue with GitHub」を選ぶ（GitHubアカウントで連携）

### 1-3. Node.jsをインストール
👉 https://nodejs.org にアクセス
→ 「LTS」と書いてある方のボタンをクリックしてダウンロード
→ ダウンロードしたファイルを開いて、「次へ」を押していくだけでOK

---

## ステップ2：プロジェクトをGitHubにアップロードする

### 2-1. GitHubで新しいリポジトリを作る
👉 https://github.com/new にアクセス
→ Repository name に「kouryakubon」と入力
→ 「Public」を選択
→ 「Create repository」をクリック

### 2-2. ファイルをアップロード
作成されたページで「uploading an existing file」をクリック
→ このフォルダの中身をすべてドラッグ&ドロップ

アップロードするファイル構成：
```
kouryakubon/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── next.config.js
└── package.json
```

→ 「Commit changes」をクリック

---

## ステップ3：Vercelで公開する

### 3-1. Vercelにログイン
👉 https://vercel.com/dashboard にアクセス

### 3-2. プロジェクトをインポート
→ 「Add New...」→「Project」をクリック
→ 「Import Git Repository」で「kouryakubon」を選択
→ 「Import」をクリック

### 3-3. デプロイ
→ Framework Preset が「Next.js」になっていることを確認
→ 「Deploy」をクリック
→ 1〜2分待つと完了！

### 3-4. 完成！
→ 「https://kouryakubon-xxxxx.vercel.app」のようなURLが表示される
→ これがあなたのサイトのURL！

---

## ステップ4：独自ドメインを設定する（任意）

kouryakubon.com のような独自ドメインを使いたい場合：

1. お名前.com や Google Domains でドメインを購入（年間1,000〜2,000円程度）
2. Vercelのダッシュボード → Settings → Domains
3. 購入したドメインを入力して追加
4. 表示されるDNS設定をドメイン管理画面で設定

---

## 困ったときは

- Vercelのデプロイでエラーが出た → スクショを撮ってClaude に聞いてください
- ファイルの構成がわからない → 上の「アップロードするファイル構成」を確認
- デザインを変えたい → page.js の中身をClaude に相談してください

---

あなたの攻略本が、誰かの人生を変えるかもしれない。
がんばって公開しよう！
