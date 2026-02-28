/**
 * デザインシステム - 公開 API
 * トークンとコンポーネントをまとめてエクスポートします。
 */

export {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  typography,
} from "./tokens";

export type { ColorToken, SpacingToken, TypographyToken } from "./tokens";

export {
  Button,
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
} from "./components";
