import React from "react";
import ticketsData from "../data/tickets.json";
import { TabContentData, Ticket } from "../types/tickets";

type TabKey = "ancientPhilosophy" | "logic" | "introductionToPhilosophy";

interface TabContentProps {
  activeTab: TabKey;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const contentData = ticketsData as TabContentData;
  const tickets: Ticket[] = contentData[activeTab] || [];

  return (
    <div className="tab-content">
      {tickets.map((ticket, index) => (
        <div key={index}>
          <h2>{ticket.title || "Без названия"}</h2>
          <p>
            <strong>Билет {index + 1}:</strong> {ticket.question}
          </p>
          <p>
            <strong>Ответ:</strong> {ticket.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
