/**
 * デザインシステム - 公開 API
 * トークンとコンポーネントをまとめてエクスポートします。
 */

export {
  colors,
  spacing,
  typography,
  fontFamily,
  fontSize,
  fontWeight,
} from "./tokens";

export type { ColorToken, SpacingToken, TypographyToken } from "./tokens";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from "./components";
