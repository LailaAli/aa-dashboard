import classNames from "classnames/bind";

import Card from "components/atoms/Card";
import ProfileIcon from "components/atoms/ProfileIcon";
import Heading from "components/atoms/Heading";

import css from "./ProfileCard.module.scss";
import Button from "components/atoms/Button";

interface ProfileCardProps {
  className?: string;
  income: number;
  profileImage: string;
  name: string;
  title: string;
  ssPayment?: number;
}

const cx = classNames.bind(css);

const ProfileCard = ({
  className,
  name,
  profileImage,
  title,
  income,
  ssPayment = 0,
}: ProfileCardProps) => {
  return (
    <Card className={cx(css.profileCard, className)}>
      <div className={css.topRow}>
        <ProfileIcon image={profileImage} className={css.profilePic} />
        <Heading level="h2" size="h3">
          {name}
        </Heading>
        <span className={css.title}>{title}</span>
        <p className={css.text}>
          Annual Income: <span className={css.dollarAmount}>${income}</span>
        </p>
        <p className={cx(css.text, css.ssLabel)}>
          <span>
            Annual Social
            <br /> Security Payment:
          </span>
          <span className={css.dollarAmount}>${ssPayment}</span>
        </p>
      </div>
      <Button ariaLabel="button" className={css.button}>
        Edit profile
      </Button>
    </Card>
  );
};

export default ProfileCard;
