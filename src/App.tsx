import React, { useState } from "react";
import "./App.css";
import TabNavigator from "./components/TabNavigator";
import TabContent from "./components/TabContent";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

type TabKey = "ancientPhilosophy" | "logic";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("ancientPhilosophy");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const tabs = {
    ancientPhilosophy: "Античная философия",
    logic: "Логика",
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Philosophy Exam Hub</h1>
      <button onClick={toggleDarkMode} className="theme-toggle">
        <img
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="theme-icon"
        />
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <TabNavigator
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default App;
