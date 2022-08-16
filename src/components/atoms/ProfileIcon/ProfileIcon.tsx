import classNames from "classnames/bind";
import css from "./ProfileIcon.module.scss";

const cx = classNames.bind(css);

interface ProfileIconProps {
  className?: string;
  image: string;
}

const ProfileIcon = ({ className, image }: ProfileIconProps) => {
  return (
    <div className={cx(css.image, className)}>
      <img src={image} alt="profile" />
    </div>
  );
};

export default ProfileIcon;
