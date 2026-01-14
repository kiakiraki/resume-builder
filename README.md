# Resume Builder

厚生労働省様式に準拠した履歴書を YAML から自動生成する静的サイトジェネレーター。

## 特徴

- YAML ファイルで履歴書データを管理
- 厚生労働省履歴書様式（令和3年版）に準拠
- A4 横向き見開きレイアウト
- PDF 出力・印刷対応
- 証明写真の埋め込み対応（自動クロップ）
- GitHub Pages でホスティング可能

## 使い方

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 履歴書データの編集

`src/data/resume.yaml` を編集して、自分の情報を入力：

```yaml
date: "令和7年1月15日現在"

personal:
  name:
    sei: "山田"
    mei: "太郎"
    sei_kana: "やまだ"
    mei_kana: "たろう"
  birth_date:
    year: "平成2"
    month: "1"
    day: "15"
    age: "35"
  photo: "/photo.png"

address:
  postal_code: "100-0001"
  kana: "とうきょうとちよだく..."
  line1: "東京都千代田区..."
  phone: "03-1234-5678"
  email: "example@example.com"

# ... 学歴・職歴、資格・免許、志望動機など
```

### 3. 証明写真の配置

証明写真を `public/photo.png`（または `.jpg`）として配置。
3:4 以外のアスペクト比でも自動でクロップされます。

### 4. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:4321/ でプレビュー確認。

### 5. PDF 出力

ブラウザで開いて印刷（Cmd/Ctrl + P）:

- 用紙サイズ: **A4**
- 向き: **横**
- 余白: **なし**

## デプロイ

### GitHub Pages

1. リポジトリの Settings → Pages → Source で **GitHub Actions** を選択
2. `astro.config.mjs` の `site` と `base` を自分のリポジトリに合わせて修正
3. main ブランチに push すると自動デプロイ

```js
export default defineConfig({
  output: 'static',
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME/',
});
```

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- YAML - データ管理
- CSS - 印刷用レイアウト

## ライセンス

MIT
