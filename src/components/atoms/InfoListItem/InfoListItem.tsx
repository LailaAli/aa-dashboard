import classNames from "classnames/bind";

import { ReactComponent as CheckBox } from "assets/svg/checkbox.svg";
import { ReactComponent as Checked } from "assets/svg/checkbox-checked.svg";
import { ReactComponent as CheckedDisplay } from "assets/svg/checkbox-display.svg";
import { ReactComponent as ExternalLink } from "assets/svg/external-link.svg";

import css from "./InfoListItem.module.scss";

const cx = classNames.bind(css);

interface InfoListItemProps {
  completed?: boolean;
  description?: string;
  itemType?: "listItem" | "infoItem" | "displayItem";
  targetUrl?: string;
  title: string;
}

// TODO: Make whole component a link on mobile

const InfoListItem = ({
  completed,
  description,
  itemType = "listItem",
  targetUrl,
  title,
}: InfoListItemProps) => {
  return (
    <div className={css.infoListItem}>
      <div className={css.iconRow}>
        {itemType === "listItem" ? (
          <span className={css.icon}>
            {completed ? <Checked /> : <CheckBox />}
          </span>
        ) : itemType === "displayItem" ? (
          <span className={css.displayIcon}>
            <CheckedDisplay />
          </span>
        ) : null}
        {itemType === "listItem" && completed ? (
          <s>
            <span className={cx(css.listItem, css.strikethrough)}>{title}</span>
          </s>
        ) : (
          <>
            <span
              className={cx(
                css.listItem,
                itemType === "infoItem" && css.title,
                targetUrl && css.urlAlignment
              )}
            >
              {title}
            </span>
            {targetUrl && itemType !== "displayItem" && (
              <a href={targetUrl} className={css.link}>
                <ExternalLink />
              </a>
            )}
          </>
        )}
      </div>
      {itemType === "infoItem" && description && (
        <p className={css.description}>{description}</p>
      )}
    </div>
  );
};

export default InfoListItem;
