import classNames from 'classnames/bind';
import Select from 'react-select';

import Chart from '../../molecules/Chart/Chart';

import css from './SSClaimCard.module.scss';

type Option = {
  value: number;
  label: string;
};

interface SSClaimCardProps {
  options: Option[];
}

const cx = classNames.bind(css);

const SSClaimCard = ({options}: SSClaimCardProps) => {
  return (
    <div className={css.ssClaimCard}>
      <h3 className={css.cardTitle}>Best Social Security Claimed Age</h3>
      <p className={css.subtitle}>Our Recommendation</p>
      <div className={css.infoContainer}>
        <div className={css.row}>
          <div className={css.legend}>
            <div className={css.legendLabel}>
              <span className={ css.colorIndicator } />
              <span className={css.key}>Benjamin claim in 70</span>
            </div>
            <div className={css.legendLabel}>
              <span className={ cx(css.colorIndicator, css.secondary )} />
              <span className={css.key}>Jasmine claim in 68</span>
            </div>
          </div>
          <div className={ css.chart }>
            <Chart />
          </div>
        </div>
        <div className={ css.divider } />
        <div className={css.fieldContainer}>
          <label htmlFor="members" className={css.selectLabel}>Household Members</label>
          <Select id="members" options={options} isClearable className={css.selectField} />
        </div>
        <div className={css.inputRow}>
          <div className={ css.ageCol }>
            <label htmlFor="age" className={css.label}>Your ideal retire age</label>
            <input type="number" id="age" defaultValue={0} className={css.ageInput} />
          </div>
          <div className={ css.paymentCol }>
            <span className={css.label}>Annual Social Security Payment</span>
            <span className={css.payValue}>$18,000</span>
          </div>
        </div>
        <div className={css.buttonRow}>
          <button className={css.buttonSecondary}>Use ideal 63</button>
          <button className={css.buttonPrimary}>Accept 70</button>
        </div>
      </div>
    </div>
  )
}

export default SSClaimCard;