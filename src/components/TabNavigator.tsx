import React from "react";

type TabKey = "ancientPhilosophy" | "logic" | "introductionToPhilosophy";

interface TabNavigatorProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
  tabs: { [key in TabKey]: string };
}

const TabNavigator: React.FC<TabNavigatorProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  return (
    <div className="tab-navigator">
      {Object.keys(tabs).map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab as TabKey)}
        >
          {tabs[tab as TabKey]}
        </button>
      ))}
    </div>
  );
};

export default TabNavigator;
