import classNames from "classnames/bind";
import Select from "react-select";
// Normally I'd build my own Grid component
import { Col, Row } from "antd";

import { ReactComponent as NotificationIcon } from "assets/svg/notification-outline-badged.svg";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import dogImage from "assets/images/dog.png";
import Sidebar from "components/organisms/Sidebar";

import css from "./Dashboard.module.scss";
import HeadingWithTooltip from "components/molecules/HeadingWithTooltip";
import Card from "components/atoms/Card";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import InfoListItem from "components/atoms/InfoListItem";
import InfoCard from "components/organisms/InfoCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import SSClaimCard from "components/organisms/SSClaimCard";
import TakeActionCard from "components/organisms/TakeActionCard";

const cx = classNames.bind(css);

interface Option {
  value: number;
  label: string;
}

const Dashboard = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const memberId = 15;
  const secondMemberId = 2;

  const fetchBothMembers = async () => {
    const [firstMemberRespons, secondMemberResponse] = await Promise.all([
      fetch(`/users/${memberId}`),
      fetch(`/users/${secondMemberId}`),
    ]);
    const firstMember = await firstMemberRespons.json();
    const secondMember = await secondMemberResponse.json();

    return [firstMember, secondMember];
  };

  useEffect(() => {
    const result = fetchBothMembers()
      .then(([firstMember, secondMember]) => {
        setOptions([
          { value: memberId, label: firstMember.user_info.full_name },
          { value: secondMemberId, label: secondMember.user_info.full_name },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={css.dashboard}>
      <Sidebar></Sidebar>
      <section className={css.contentPanel}>
        {/* <SSClaimCard options={options} /> */}
        <section className={css.pageHeaderRow}>
          <div>
            <HeadingWithTooltip
              headingLevel="h1"
              title="Overview"
              tooltipText="Description of section"
            />
          </div>
          <div>
            <NotificationIcon />
            <span className={css.search}>
              <SearchIcon /> Search
            </span>
          </div>
        </section>
        <section className={css.cardsSection}>
          {/* <div className={cx(css.dasboardCard)}> */}
          <TakeActionCard options={options} className={css.takeActionaCard} />
          {/* </div> */}
          <div className={cx(css.dashboardCard)}>
            <Card>
              <div className={css.profilePic}>ProfilePic</div>
              <p>Sarah Smith</p>
              <p>Software Engineer</p>
              <div className={css.profileRow}>
                <p>Annual Income:</p>
                <p>$90,000</p>
              </div>
              <div className={css.profileRow}>
                <p>Annual Social Security Payment:</p>
                <p>$30,000</p>
              </div>
              <Button ariaLabel="button">Edit profile</Button>
            </Card>
          </div>
        </section>
        <section className={cx(css.cardsSection)}>
          <div>
            <Card>
              <HeadingWithTooltip
                title="to do list"
                tooltipText="Section description"
                uppercase
              />
              {/* Normally I'd map this list */}
              <InfoListItem title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" />
              <InfoListItem title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" />
              <InfoListItem
                completed
                title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
              />
            </Card>
          </div>
          <div>
            <Card>
              <HeadingWithTooltip
                title="Example of empty state"
                tooltipText="description of section"
              />
              <img src={dogImage} alt="dog" />
              <p>No updates here</p>
              <p>Here's a dog having a drink</p>
            </Card>
          </div>
        </section>
        <section className={cx(css.cardsSection)}>
          <Card>
            <HeadingWithTooltip
              title="recommended for you"
              tooltipText="description of section"
            />
            <span>buttons</span>
            <div>
              <div>
                <InfoCard
                  title="Choose the right plan with Athena"
                  variant="secondary"
                  buttonLink="#"
                >
                  <InfoListItem title="Check your age" itemType="displayItem" />
                  <InfoListItem
                    title="Optimize the ratio"
                    itemType="displayItem"
                  />
                  <InfoListItem
                    title="Enjoy your life"
                    itemType="displayItem"
                  />
                </InfoCard>
                <InfoCard
                  title="Fun Fact Time"
                  subtitle="Athena Explains"
                  variant="tertiary"
                  buttonLink="#"
                >
                  <InfoListItem
                    itemType="infoItem"
                    title="Pre-tax 401K"
                    description="You can save up to $10,000 per year on your 401(k) plan."
                    targetUrl="#"
                  />
                  <InfoListItem
                    itemType="infoItem"
                    title="Roth 401K"
                    description="You can save up to $10,000 per year on your 401(k) plan."
                    targetUrl="#"
                  />
                </InfoCard>
                <InfoCard
                  title="Fun Fact Time"
                  subtitle="Athena Explains"
                  variant="tertiary"
                  buttonLink="#"
                >
                  <InfoListItem
                    itemType="infoItem"
                    title="Bonds vs Stocks"
                    description="You can save up to $10,000 per year on your 401(k) plan."
                    targetUrl="#"
                  />
                  <InfoListItem
                    itemType="infoItem"
                    title="Debt vs Equity"
                    description="You can save up to $10,000 per year on your 401(k) plan."
                    targetUrl="#"
                  />
                </InfoCard>
              </div>
            </div>
          </Card>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
