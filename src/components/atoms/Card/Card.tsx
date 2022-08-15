import { ReactNode } from "react";
import classNames from "classnames/bind";

import css from "./Card.module.scss";

const cx = classNames.bind(css);

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={cx(css.card, className)}>{children}</div>;
};

export default Card;
