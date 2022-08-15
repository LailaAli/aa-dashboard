import classNames from "classnames/bind";

import css from "./Chart.module.scss";

const cx = classNames.bind(css);

const Chart = () => (
  <div className={css.chartContainer}>
    <div className={cx(css.donutChart, css.chart)}>
      <div className={cx(css.slice, css.one)}></div>
      <div className={cx(css.slice, css.two)}></div>
      <div className={css.chartCenter}>
        <span className={css.label}>Estimated Household Annual Income</span>
        <span className={css.value}>50K</span>
      </div>
    </div>
    <div className={cx(css.tag, css.tagPrimary)}>20K</div>
    <div className={cx(css.tag, css.tagSecondary)}>30K</div>
  </div>
);

export default Chart;
