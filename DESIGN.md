---
version: "alpha"
name: Matsuba Kobo
description: "名古屋の真鍮ハンドメイド工房『マツバ工房』のための、上品で温かみのあるブランドアイデンティティ。真鍮の金色と、温かいクリーム／墨色を基調に、明朝体の落ち着きと余白で『手仕事の時間』を表現する。"
colors:
  primary: "#2a2420"          # 墨色（本文・見出し）near-black brown
  secondary: "#6b6157"        # やわらかい墨色（補足テキスト）
  tertiary: "#b08a4f"         # 真鍮（アクセント）core brass
  tertiary-dark: "#8a6a39"    # 深い真鍮（ホバー・ラベル）
  tertiary-light: "#cda86b"   # 明るい真鍮（グラデ・装飾）
  neutral: "#f6f2ea"          # 温かいクリーム（背景）
  neutral-soft: "#efe9dd"     # 一段沈めた背景（交互セクション）
  line: "#ddd3c4"             # 罫線・ボーダー
  dark: "#211d18"             # 濃紺墨のパネル（おわりに / Instagram帯）
  dark-soft: "#2c271f"        # フッター背景
  on-tertiary: "#ffffff"      # 真鍮の上の文字
  on-dark: "#f3ece0"          # 暗部の上の文字
typography:
  display:                    # ヒーロー大見出し
    fontFamily: Shippori Mincho
    fontSize: clamp(3rem, 9vw, 6.4rem)
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: 0.06em
  h2:                         # セクションタイトル
    fontFamily: Shippori Mincho
    fontSize: clamp(1.9rem, 4.5vw, 3rem)
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em
  h3:                         # 作品名・カード見出し
    fontFamily: Shippori Mincho
    fontSize: 1.18rem
    fontWeight: 500
    lineHeight: 1.4
  prose:                      # はじめに / おわりに 等の長文（明朝）
    fontFamily: Shippori Mincho
    fontSize: 1.02rem
    fontWeight: 400
    lineHeight: 2.15
    letterSpacing: 0.05em
  body-md:                    # 標準本文
    fontFamily: Noto Sans JP
    fontSize: 1rem
    fontWeight: 300
    lineHeight: 1.9
    letterSpacing: 0.04em
  body-sm:                    # 補足・キャプション
    fontFamily: Noto Sans JP
    fontSize: 0.86rem
    fontWeight: 300
    lineHeight: 1.85
  label-caps:                 # 欧文ラベル（Concept / Works 等）
    fontFamily: Cormorant Garamond
    fontSize: 0.8rem
    fontWeight: 500
    letterSpacing: 0.4em
    textTransform: uppercase
rounded:
  sm: 2px                     # ボタン
  md: 4px                     # カード・画像フレーム
  full: 9999px                # 円形メダリオン
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: clamp(5rem, 11vw, 9rem)   # セクション上下余白
  gutter: clamp(1.5rem, 4vw, 4rem)   # 段組みの間隔
components:
  button-primary:
    backgroundColor: "{colors.tertiary-light}"   # 真鍮グラデーション（light→dark）
    textColor: "{colors.on-tertiary}"
    typography: label-caps
    rounded: "{rounded.sm}"
    padding: 0.95em 2.2em
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.tertiary-dark}"
    rounded: "{rounded.sm}"
    padding: 0.95em 2.2em
  card:                       # 作品カード / ショップカード
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 0
  image-frame:                # 写真の枠（角丸＋影＋hoverで微拡大）
    rounded: "{rounded.md}"
  panel-dark:                 # おわりに / Instagram帯
    backgroundColor: "{colors.dark}"
    textColor: "{colors.on-dark}"
  medallion:                  # つくり手の真鍮メダリオン（殿・奥）
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    size: 120px
---

# マツバ工房 ブランドデザイン指針

名古屋の小さな町工場が、真鍮を一点ずつ手仕事で削り出す——その「上品さ」と「あたたかさ」「ちょっと笑える親しみ」を両立させるための指針。AIエージェント・制作者は、このファイルを唯一の視覚的真実（source of truth）として参照する。

## 原則

1. **余白が主役** — 要素を詰め込まない。セクション余白は `spacing.section`、文章は最大 46〜50ch で読みやすく。
2. **金色は“差し色”** — 真鍮（tertiary）は全面塗りせず、ラベル・ボタン・罫線・ホバー・装飾の輝きに限定。背景は常にクリーム（neutral）か濃紺墨（dark）。
3. **見出しは明朝、本文は角ゴシック** — 見出し・長文は Shippori Mincho（上品・手仕事感）、UI本文は Noto Sans JP（可読性）。欧文ラベルは Cormorant Garamond を広いレタースペースで。
4. **写真は静かに** — 作品写真は角丸＋やわらかい影。hover で 1.04 倍の微拡大のみ。誇張したアニメーションは避ける。
5. **動きは控えめ** — スクロールでのフェードイン、真鍮グローのゆっくりした浮遊など、上品な範囲に留める。`prefers-reduced-motion` を必ず尊重。
6. **日本語の改行に配慮** — 見出しは `text-wrap: balance`、長文は `text-wrap: pretty` ＋ `word-break: auto-phrase`。不自然な位置で改行させない。`<br>` は句読点など自然な箇所のみ。

## カラーの使い分け

- **明るいセクション**：背景 `neutral`、交互に `neutral-soft`。文字は `primary`／補足は `secondary`。
- **暗いセクション**（おわりに・Instagram帯・フッター）：背景 `dark`／`dark-soft`、文字は `on-dark`、差し色に `tertiary-light`。
- **アクセント**：ラベル・リンクのホバー・ボタン・罫線の起点に `tertiary` / `tertiary-dark`。

## タイポグラフィの適用

- ヒーロー＝`display`／セクション見出し＝`h2`／作品名＝`h3`。
- 「はじめに」「おわりに」「Our Story」など世界観を語る文章＝`prose`（明朝・行間ゆったり・中央寄せ）。
- 「Concept」「Works」等の欧文ラベル＝`label-caps`（前に短い真鍮の罫線を添える）。

## コンポーネントの約束

- **ボタン**：第一アクションは `button-primary`（真鍮グラデ）、副次は枠線の `button-outline`。角丸は最小（`rounded.sm`）。
- **作品カード**：写真（4:5）＋番号（欧文・真鍮）＋作品名（明朝）＋短い説明。枠線は持たず、写真の影で浮かせる。
- **つくり手**：顔写真の代わりに真鍮の円形メダリオン（殿・奥）。将来ポートレートに差し替え可。
- **暗パネル**：締めの言葉や行動喚起に使用。上部に淡い真鍮グローを敷く。

## してはいけないこと

- 真鍮色をベタ塗りで大面積に使う／原色や寒色を持ち込む。
- 見出しをゴシック、本文を明朝にする（逆転させない）。
- 過剰な影・グラデ・アニメーション。安っぽさにつながる。
- 写真に金枠や撮影背景（紺地など）を残したまま使う——作品は清潔な背景で見せる。
