# デザインシステム

Map + SNS サイト向けのデザイントークンと UI プリミティブをまとめたモジュールです。

## 構成

```
design-system/
├── tokens/       # 色・スペース・タイポグラフィの定義
├── components/   # 共通 UI コンポーネント（Flowbite をベースにラップ）
├── docs/         # このドキュメント
└── index.ts      # 公開 API
```

## トークン

- **colors** … プライマリ・ニュートラル・セマンティックカラー。`app/globals.css` の `@theme` と整合。
- **spacing** … 4px ベースのスペーシングスケール（Tailwind 相当）。
- **typography** … フォントファミリー・サイズ・ウェイト。Inter を前提。

## コンポーネント

- **Button** … `variant`（primary / secondary / outline / ghost）と `size`（xs / sm / md / lg）で統一されたボタン。

## 使い方

```tsx
import { Button } from "@/design-system";
import { colors, spacing } from "@/design-system/tokens";

<Button variant="primary" size="md">送信</Button>
```

既存の `app/theme.ts` は Flowbite 用のテーマ拡張のまま利用し、デザインシステムのトークンは新規コンポーネントやスタイルの参照用として利用できます。

## 今後の拡張

- トークン: シャドウ・角丸・ブレークポイントなど
- コンポーネント: Input, Card, Badge, 地図用マーカー、投稿カードなど
- 必要に応じて Storybook やコンポーネント一覧ページの追加
