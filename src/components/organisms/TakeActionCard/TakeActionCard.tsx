import Select from "react-select";
import classNames from "classnames/bind";

import Card from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import HeadingWithTooltip from "components/molecules/HeadingWithTooltip/HeadingWithTooltip";
import Button from "components/atoms/Button";
import Chart from "../../molecules/Chart/Chart";

import css from "./TakeActionCard.module.scss";
import { useState } from "react";

type Option = {
  value: number;
  label: string;
};

interface TakeActionCardProps {
  options: Option[];
  ssIncome?: number;
  className?: string;
  retirementAge?: number;
  fullName?: string;
}

const cx = classNames.bind(css);

const TakeActionCard = ({
  options,
  className,
  ssIncome,
  retirementAge,
  fullName,
}: TakeActionCardProps) => {
  const [ageInput, setAgeInput] = useState<number>(0);
  return (
    <Card className={className}>
      <HeadingWithTooltip
        title="take action"
        tooltipText="Description of section"
        uppercase
      />
      <Heading level="h3" className={css.heading}>
        Best Social Security Claimed Age
      </Heading>
      <div className={css.contentContainer}>
        <div className={css.formCol}>
          <div className={css.content}>
            <div className={css.selectField}>
              <label htmlFor="members" className={css.label}>
                Household Member
              </label>
              <Select
                id="members"
                options={options}
                isClearable
                className={css.select}
              />
            </div>
            <div className={css.inputRow}>
              <div className={css.ageCol}>
                <label htmlFor="age" className={css.label}>
                  Your ideal retire age
                </label>
                <input
                  type="number"
                  defaultValue={retirementAge}
                  id="age"
                  onChange={(e) => setAgeInput(Number(e.target.value))}
                  className={cx(css.ageField, css.value)}
                />
              </div>
              <div className={css.valueCol}>
                <span className={cx(css.label, css.nowrap)}>
                  Annual Social
                  <br />
                  Security Payment
                </span>
                <span className={css.value}>${ssIncome}</span>
              </div>
            </div>
          </div>
          <div className={css.buttonRow}>
            <Button ariaLabel="button" variant="outline">
              Use Ideal {ageInput}
            </Button>
            <Button ariaLabel="button">Accept {retirementAge}</Button>
          </div>
        </div>
        <div className={css.chartCol}>
          <Chart />
          <div className={css.legend}>
            <div className={css.legendLabel}>
              <span className={css.colorIndicator} />
              <span className={css.key}>{fullName} claim in {retirementAge}</span>
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
