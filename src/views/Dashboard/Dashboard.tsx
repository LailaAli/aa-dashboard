import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { ReactComponent as NotificationIcon } from "assets/svg/notification-outline-badged.svg";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import { ReactComponent as DashboardIcon } from "assets/svg/dashboard.svg";
import dogImage from "assets/images/dog.png";
import videoImage from "assets/images/video.jpg";
import profileImg from "assets/images/user.png";
import Sidebar from "components/organisms/Sidebar";
import HeadingWithTooltip from "components/molecules/HeadingWithTooltip";
import Card from "components/atoms/Card";
import InfoListItem from "components/atoms/InfoListItem";
import InfoCard from "components/organisms/InfoCard";
import TakeActionCard from "components/organisms/TakeActionCard";
import ProfileCard from "components/organisms/ProfileCard";
import SSClaimCard from "components/organisms/SSClaimCard";

import css from "./Dashboard.module.scss";

const cx = classNames.bind( css );

// TODO: Extract dasboard cards into separate components

interface Option {
  value: number;
  label: string;
}

interface Data {
  user_info?: UserInfo;
  assumptions?: Assumptions;
}

interface UserInfo {
  data_of_birth: string;
  current_savings_rate: number;
  address: string;
  household_income: number;
  current_retirement_savings: number;
  full_name: string;
}

interface Assumptions {
  retirement_age: number;
  pre_retirement_income_percent: number;
  life_expentancy: number;
  expected_rate_of_return: number;
}

type CheckList = {
  title: string;
  completed?: boolean;
};

const Dashboard = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const firstMemberId = 15;
  const secondMemberId = 2;
  const [userData, setUserData] = useState<Data>({} as Data);
  const userIds = [firstMemberId, secondMemberId];
  const navItems = [
    {
      icon: <DashboardIcon />,
      title: "Home",
      targetUrl: "#",
      active: true,
    },
    {
      icon: <DashboardIcon />,
      title: "About",
      url: "#",
    },
    {
      icon: <DashboardIcon />,
      title: "About",
      url: "#",
    },
    {
      icon: <DashboardIcon />,
      title: "About",
      url: "#",
    },
  ];
  const todoList: CheckList[] = [
    { title: "Review your retirement age", completed: false },
    { title: "Buy a new house", completed: false },
    { title: "Update your salary", completed: true },
    { title: "Adjust your stock distribution", completed: true },
    { title: "Buy more bonds", completed: true },
  ];
  const rightPlanList: CheckList[] = [
    { title: "Check your age", completed: true },
    { title: "Optimize the ratio", completed: true },
    { title: "Enjoy your life", completed: true },
  ];

  const fetchBothMembers = async (userIds: number[]) => {
    const [firstMember, secondMember] = await Promise.all(
      userIds.map((id) => fetch(`/users/${id}`))
    );
    const [firstMemberData, secondMemberData] = await Promise.all([
      firstMember.json(),
      secondMember.json(),
    ]);
    return [firstMemberData, secondMemberData];
  };

  useEffect(() => {
    const result = fetchBothMembers(userIds)
      .then(([firstMember, secondMember]) => {
        setOptions([
          { value: firstMemberId, label: firstMember.user_info.full_name },
          { value: secondMemberId, label: secondMember.user_info.full_name },
        ]);
        setUserData(firstMember);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userInfo = userData.user_info;
  const assumptions = userData.assumptions;

  return (
    <>
      {/* Uncomment to view ss claim card. Comment out to view dashboard */}
      {/* <SSClaimCard options={options} /> */}
      <div className={css.dashboard}>
        <Sidebar navItem={navItems} />
        <section className={css.contentPanel}>
          <div className={css.main}>
            <section className={css.pageHeaderRow}>
              <HeadingWithTooltip
                className={css.pageHeaderHeading}
                headingLevel="h1"
                title="Overview"
                tooltipText="Description of section"
              />
              <NotificationIcon />
              <div className={css.headerRightCol}>
                <span className={css.search}>
                  <SearchIcon /> <span>Search</span>
                </span>
              </div>
            </section>
            <section className={css.cardsSection}>
              <TakeActionCard
                options={options}
                className={css.takeActionCard}
                ssIncome={userInfo?.current_retirement_savings}
                retirementAge={assumptions?.retirement_age}
                fullName={userInfo?.full_name.split(" ")[0]}
              />
              <div className={cx(css.dashboardCard)}>
                <ProfileCard
                  income={userInfo?.household_income || 0}
                  profileImage={profileImg}
                  name={userInfo?.full_name || ""}
                  title="Software Engineer"
                  ssPayment={userInfo?.current_retirement_savings}
                />
              </div>
            </section>
            <section className={css.cardsSection}>
              <div className={css.todoDBCard}>
                <Card className={css.todoCard}>
                  <HeadingWithTooltip
                    title="to do list"
                    tooltipText="Section description"
                    uppercase
                  />
                  <div className={css.listContainer}>
                    {todoList.map(({ title, completed }, index) => (
                      <InfoListItem
                        title={title}
                        completed={completed}
                        key={index}
                      />
                    ))}
                  </div>
                </Card>
              </div>
              <div className={css.emptyDBCard}>
                <Card className={css.emptyCard}>
                  <HeadingWithTooltip
                    title="Example of empty state"
                    tooltipText="description of section"
                  />
                  <div className={css.emptyCardContent}>
                    <img src={dogImage} alt="dog" />
                    <p className={css.text}>
                      <span>No updates here</span>
                      <span>Here's a dog having a drink</span>
                    </p>
                  </div>
                </Card>
              </div>
            </section>
            <section className={cx(css.cardsSection)}>
              <Card className={css.cardHeader}>
                <HeadingWithTooltip
                  title="recommended for you"
                  uppercase
                  tooltipText="description of section"
                />
                <div className={css.adviceList}>
                  <div className={css.videoCol}>
                    <InfoCard className={css.videoCard}>
                      <img
                        className={css.videoImage}
                        src={videoImage}
                        alt="video"
                      />
                    </InfoCard>
                  </div>
                  <div className={css.scrollingAdvice}>
                    <InfoCard
                      className={css.adviceCard}
                      title="Choose the right plan with Athena"
                      variant="secondary"
                      buttonLink="#"
                    >
                      <div>
                        {rightPlanList.map(({ title }, index) => (
                          <InfoListItem
                            title={title}
                            itemType="displayItem"
                            key={index}
                          />
                        ))}
                      </div>
                    </InfoCard>
                    <InfoCard
                      className={css.adviceCard}
                      title="Fun Fact Time"
                      subtitle="Athena Explains"
                      variant="tertiary"
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
                      className={css.adviceCard}
                      title="Fun Fact Time"
                      subtitle="Athena Explains"
                      variant="tertiary"
                      buttonLink="#"
                    >
                      <InfoListItem
                        itemType="infoItem"
                        title="Bonds vs Stocks"
                        description="You can save up to $10,000 per year on your 401(k) plan."
                      />
                      <InfoListItem
                        itemType="infoItem"
                        title="Debt vs Equity"
                        description="You can save up to $10,000 per year on your 401(k) plan."
                      />
                    </InfoCard>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
