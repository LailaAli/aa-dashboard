import { HTMLAttributes } from "react";

export type LevelVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  className?: string;
  level: LevelVariants;
  size?: LevelVariants;
  uppercase?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;