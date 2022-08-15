import Select from "react-select";
import classNames from "classnames/bind";

import Card from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import HeadingWithTooltip from "components/molecules/HeadingWithTooltip/HeadingWithTooltip";
import Button from "components/atoms/Button";
import Chart from '../../molecules/Chart/Chart';

import css from "./TakeActionCard.module.scss";

type Option = {
  value: number;
  label: string;
};

interface TakeActionCardProps {
  options: Option[];
  className?: string;
}

const cx = classNames.bind(css);

const TakeActionCard = ({ options, className }: TakeActionCardProps) => {
  return (
    <Card className={className}>
      <HeadingWithTooltip
        title="take action"
        tooltipText="Description of section"
        uppercase
      />
      <div className={css.contentContainer}>
        <div className={css.formCol}>
          <Heading level="h3">Best Social Security Claimed Age</Heading>
          <label htmlFor="members">Household Memeber</label>
          <Select id="members" options={options} isClearable />
          <div className={css.inputRow}>
            <div className={css.ageCol}>
              <label htmlFor="age">Your idea retire age</label>
              <input type="number" id="age" className={css.ageField} />
            </div>
            <div className={css.valueCol}>
              <span>Your idea retire age</span>
              <span className={css.value}>$18,000</span>
            </div>
          </div>
          <Button ariaLabel="button">Learn more</Button>
        </div>
        <div className={css.chartCol}>
          <Chart />
          <div className={css.legend}>
            <div className={css.legendLabel}>
              <span className={css.colorIndicator} />
              <span className={css.key}>Benjamin claim in 70</span>
            </div>
            <div className={css.legendLabel}>
              <span className={cx(css.colorIndicator, css.secondary)} />
              <span className={css.key}>Jasmine claim in 68</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TakeActionCard;
