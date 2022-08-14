import classNames from "classnames/bind";

import Heading, { LevelVariants } from "components/atoms/Heading";
import Tooltip from "components/atoms/Tooltip";
import { ReactComponent as Icon } from "assets/svg/info-circle-fill.svg";

import css from "./HeadingWithTooltip.module.scss";

interface HeadingWithTooltipProps {
  title: string;
  tooltipText: string;
  headingClassName?: string;
  headingLevel?: LevelVariants;
  uppercase?: boolean;
}

const cx = classNames.bind( css );

// TODO: Adjust tooltip icon position for < h3

const HeadingWithTooltip = ({
  title,
  tooltipText,
  headingClassName,
  headingLevel = "h2",
  uppercase,
}: HeadingWithTooltipProps) => {
  return (
    <div className={css.headingWithTooltip}>
      <Heading
        level={headingLevel}
        size={headingLevel}
        uppercase={uppercase}
        className={cx(css.heading, headingClassName)}
      >
        {title}
      </Heading>
      <Tooltip tooltipText={tooltipText} className={css.tooltip}>
        <Icon className={css.icon} />
      </Tooltip>
    </div>
  );
};

export default HeadingWithTooltip;
