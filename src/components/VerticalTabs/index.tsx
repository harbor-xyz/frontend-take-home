import React, { useId } from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";
import Badge from "../Badge";
import TabItem from "./TabItem";

const VerticalTabs = () => {
  const tabId = useId();
  const tabs = [
    {
      icon: <ICONS.TestNetsIcon />,
      heading: "Testnets",
      badgeText: "8",
      isSelected: true,
      rightIcon: <ICONS.AddIcon />,
      id: `${tabId}_nets`,
    },
    {
      icon: <ICONS.MembersIcon />,
      heading: "Members",
      badgeText: "1",
      rightIcon: <ICONS.AddIcon />,
      id: `${tabId}_members`,
    },
    {
      icon: <ICONS.ProjectKeyIcon />,
      heading: "Project Key",
      rightIcon: <ICONS.CopyIcon />,
      id: `${tabId}_project_keys`,
    },
  ];
  return (
    <div className="vertical-tab--wrapper">
      <div className="tab__heading">
        <ICONS.AcmeStarIcon />
        <span className="tab__headiong__text">Acme frontend</span>
      </div>
      <div className="tab__list">
        {tabs.map((tab) => (
          <TabItem key={tab.id} {...tab} />
        ))}
      </div>
    </div>
  );
};

export default VerticalTabs;
