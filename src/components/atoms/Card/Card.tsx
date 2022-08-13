import { ReactNode } from "react";

import css from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className={css.card}>{children}</div>;
};

export default Card;
