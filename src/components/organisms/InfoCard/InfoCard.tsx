import { ReactNode } from "react";
import classNames from "classnames/bind";

import css from "./InfoCard.module.scss";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

interface InfoCardProps {
  buttonLabel?: string;
  buttonLink?: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
  title?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const cx = classNames.bind(css);

const InfoCard = ({
  buttonLabel = "Learn more",
  buttonLink,
  children,
  className,
  subtitle,
  title,
  variant = "primary",
}: InfoCardProps) => {
  return (
    <div className={cx(css.infoCard, css[variant], className)}>
      <div>
        <div>
          {subtitle && <span className={css.subtitle}>{subtitle}</span>}
          {title && (
            <Heading level="h3" className={css.title}>
              {title}
            </Heading>
          )}
        </div>
        <div>{children}</div>
      </div>
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
