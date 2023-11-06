import React from "react";
import ExperienceList from "@/feature/home/experience/ExperienceList";
import { HEADER_IDS } from "../../Header";
import ExperienceDialog from "./ExperienceDialog";

const dumb = {
  id: 1,
  startDate: "7/2023",
  endDate: "",
  company: "NCC Plus 1",
  role: "Frontend Developer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const Experience = () => {
  return (
    <div
      id={HEADER_IDS.EXPERIENCE}
      className="sm:px-[10%] xl:px-[20%] px-5 py-24 bg-[#212121]"
    >
      <div className="text-white">
        <div>- EXPERIENCE</div>
        <div className="mt-3 text-2xl font-bold">
          Let&apos;s check my journey
        </div>
      </div>
      <ExperienceList />
      <ExperienceDialog
        description={dumb.description}
        company={dumb.company}
        startDate={dumb.startDate}
        endDate={dumb.endDate}
        role={dumb.role}
        isOpen={true}
        imageUrl="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
      />
    </div>
  );
};

export default Experience;
