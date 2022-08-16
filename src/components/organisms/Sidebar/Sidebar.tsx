import { ReactNode } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Logo} from "assets/svg/logo.svg";
import css from "./Sidebar.module.scss";

const cx = classNames.bind(css);

interface NavItemProps {
  navItem: NavItem[];
}

type NavItem = {
  title?: string;
  url?: string;
  icon: ReactNode;
  active?: boolean;
};

const Sidebar = ({ navItem = [] }: NavItemProps) => {
  return (
    <div className={css.sidebar}>
      <div className={css.main}>
        <div className={css.logo}><Logo/></div>
        <nav>
          <ul className={css.navList}>
            {navItem.map(({ icon, url = "#", active }, index) => (
              <li key={index}>
                <a href={url} className={cx(css.iconLink, active ? css.active : null)}>{icon}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
