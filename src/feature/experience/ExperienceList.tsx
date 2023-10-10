import React from "react";
import ExperienceCard from "./ExperienceCard";

const dumbData = [
  {
    id: 1,
    startDate: "7/2023",
    endDate: "",
    company: "NCC Plus 1",
    role: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    startDate: "5/2022",
    endDate: "7/2023",
    company: "Rikkei soft 2",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    startDate: "5/2021",
    endDate: "11/2021",
    company: "FPT soft 3",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const ExperienceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16 w-full snake-grid">
      {dumbData.map((card, index) => {
        return (
          <ExperienceCard
            key={card.id}
            startDate={card.startDate}
            endDate={card.endDate}
            company={card.company}
            description={card.description}
            role={card.role}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ExperienceList;
