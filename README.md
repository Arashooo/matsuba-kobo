# マツバ工房 ウェブサイト

名古屋の真鍮ハンドメイド工房「マツバ工房」の紹介サイトです。
ビルドツール不要の静的サイト（HTML / CSS / JavaScript）で、そのまま公開できます。

## ファイル構成

```
matsuba_web/
├─ index.html      … ページ本体（全セクション）
├─ styles.css      … デザイン・レイアウト
├─ script.js       … ナビ・スクロール演出・フォーム
├─ assets/         … 写真などの画像を置く場所
└─ README.md       … このファイル
```

## ローカルで見る

ダブルクリックで `index.html` を開くだけでも表示できますが、
フォントやレイアウトを正しく確認するにはローカルサーバー経由がおすすめです。

```bash
cd matsuba_web
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

## 実際の写真に差し替える

現在、作品写真の部分は真鍮色の「プレースホルダー」で仮表示しています。
本番の写真に差し替える手順は次のとおりです。

1. 写真を `assets/` フォルダに入れる（例：`work-accessory.jpg`）。
2. `index.html` の該当箇所、例えば

   ```html
   <figure class="img-frame ratio-4-5">
     <div class="ph ph-brass-1" data-label="Accessory"></div>
   </figure>
   ```

   を、次のように `<img>` に置き換える。

   ```html
   <figure class="img-frame ratio-4-5">
     <img src="assets/work-accessory.jpg" alt="真鍮のアクセサリー" />
   </figure>
   ```

   ※ `img-frame` と縦横比クラス（`ratio-4-5` 等）はそのまま残すと、
   　 きれいなトリミング・影付きで表示されます。

## あとで書き換えると良い箇所（サンプル値）

| 箇所 | 現在の仮の値 | 備考 |
|------|------------|------|
| メールアドレス | `info@matsubakobo.example` | `index.html` 内・お問い合わせ／フッター |
| 住所 | 「愛知県名古屋市（サンプル）」 | フッター |
| 営業時間 | 「完全予約制」 | フッター |
| お問い合わせ送信先 | フロント側のみ（デモ） | 下記参照 |

## お問い合わせフォームの送信について

現状の `script.js` は、送信時に画面上で受付メッセージを表示するだけの
デモ実装です。実際にメールを受け取るには、いずれかをご利用ください。

- [Formspree](https://formspree.io/) / [Getform](https://getform.io/) などのフォームサービス（最も簡単）
- 自社のメール送信API・お問い合わせ受付システムへの連携

`script.js` 内の `// 本番では…` のコメント箇所で送信処理を差し込めます。

## 公開（ホスティング）

静的ファイルのみなので、以下のようなサービスに置くだけで公開できます。

- Netlify / Vercel / Cloudflare Pages（フォルダをドラッグ＆ドロップ）
- GitHub Pages
- レンタルサーバー（FTPでアップロード）

## デザインについて

- 配色：真鍮の金色 × 温かみのあるクリーム／墨色で、上品で落ち着いた印象に。
- 書体：見出しに明朝（Shippori Mincho / Cormorant Garamond）、本文に Noto Sans JP。
- レスポンシブ対応・スクロール演出・アクセシビリティ（reduced-motion 等）に配慮しています。
