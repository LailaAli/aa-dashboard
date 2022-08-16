import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames/bind';
import css from './Button.module.scss';
import { ButtonIconPlacement, ButtonSize, ButtonVariant } from './types';

const cx = classNames.bind( css );

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { 
  ariaLabel: string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode; //Normally I create an icon component
  iconPlacement?: ButtonIconPlacement;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button = ({ariaLabel, block, children, className, disabled, icon, iconPlacement = 'right', size = 'md', variant = 'primary'   }: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={cx(
        className,
        css.button,
        `size-${size}`,
        `variant-${variant}`,
        {
          block,
          disabled,
          "icon-left": iconPlacement === "left",
        }
      )}
    >
      {/* TODO: Handle edge case if variant === 'icon' but icon is not passed */}
      {variant !== 'icon' && <span className={css.contentItem}>{children}</span>}
      {icon && <span className={cx(css.icon, css.contentItem)}>{icon}</span>}
    </button>
  );
}

export default Button;
