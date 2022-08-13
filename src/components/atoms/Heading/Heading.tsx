import { HTMLAttributes } from "react";
import classNames from "classnames/bind";

import css from "./Heading.module.scss";

const cx = classNames.bind( css );

type LevelVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  className?: string;
  level: LevelVariants;
  size?: LevelVariants;
  uppercase?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;

const Heading = ({
  children,
  className = "",
  level,
  size = level,
  uppercase,
  ...rest
}: HeadingProps) => {
  const headingClassName = cx(
    uppercase && `uppercase`,
    size,
    className
  );

  const HeadingElement = level;

  return (
    <HeadingElement className={headingClassName} {...rest}>
      {children}
    </HeadingElement>
  );
};

export type { HeadingProps };

export default Heading;
