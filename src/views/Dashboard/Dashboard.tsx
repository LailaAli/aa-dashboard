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
import { useEffect, useState } from "react";

const cx = classNames.bind(css);

interface OptionsProps {
  household_income: number;
  full_name: string;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Dashboard = () => {
  useEffect(() => {
    fetch("/users/2")
      .then((resp) => {
        console.log(resp);
        console.log("======success=======");
      })
      .catch((err) => {
        console.log("======failure=======");
        console.log(err);
      });
  }, []);

  return (
    <div className={css.dashboard}>
      <Sidebar></Sidebar>
      <div className={css.contentContainer}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <HeadingWithTooltip
              headingLevel="h1"
              title="Overview"
              tooltipText="Description of section"
            />
          </Col>
          <Col span={6}>
            <NotificationIcon />
            <span className={css.search}>
              <SearchIcon /> Search
            </span>
          </Col>
        </Row>
        <Row gutter={[24, 32]}>
          <Col span={16}>
            <Card>
              <HeadingWithTooltip
                title="take action"
                tooltipText="Description of section"
                uppercase
              />
              <Col span={12}>
                <Heading level="h3">Best Social Security Claimed Age</Heading>
                <label htmlFor="members">Household Memeber</label>
                <Select id="members" options={options} />

                <Button ariaLabel="button">Learn more</Button>
              </Col>
              <Col span={12}>
                <Heading level="h2">Best Social Security Claimed Age</Heading>
                <Button ariaLabel="button">Learn more</Button>
              </Col>
            </Card>
          </Col>
          <Col span={16}>
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
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
          <Col>
            <Card>
              <HeadingWithTooltip
                title="Example of empty state"
                tooltipText="description of section"
              />
              <img src={dogImage} alt="dog" />
              <p>No updates here</p>
              <p>Here's a dog having a drink</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card>
            <HeadingWithTooltip
              title="recommended for you"
              tooltipText="description of section"
            />
            <span>buttons</span>
            <Row>
              <Col span={12}>
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
              </Col>
            </Row>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
