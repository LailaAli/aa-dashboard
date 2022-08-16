import classNames from "classnames/bind";

import { HeadingProps } from "./types";

import css from "./Heading.module.scss";

const cx = classNames.bind( css );

const Heading = ({
  children,
  className,
  level = "h1",
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
