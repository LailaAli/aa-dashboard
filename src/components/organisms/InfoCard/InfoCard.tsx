import { ReactNode } from "react";
import classNames from "classnames/bind";

import css from "./InfoCard.module.scss";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

interface InfoCardProps {
  align?: "left" | "center";
  buttonLabel?: string;
  buttonLink?: string;
  children: ReactNode;
  subtitle?: string;
  title?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const cx = classNames.bind(css);

const InfoCard = ({
  align = "left",
  buttonLabel = "Learn more",
  buttonLink,
  children,
  subtitle,
  title,
  variant = "primary",
}: InfoCardProps) => {
  return (
    <div className={cx(css.infoCard, css[variant])}>
      {subtitle && <span className={css.subtitle}>{subtitle}</span>}
      {title && (
        <Heading level="h3" className={css.title}>
          {title}
        </Heading>
      )}
      {children}
      {/* TODO: Replace w/link component */}
      {buttonLink && (
        <Button
          variant={variant}
          ariaLabel={buttonLabel}
          className={css.button}
          block
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default InfoCard;
