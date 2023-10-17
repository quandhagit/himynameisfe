import React from "react";
import ExperienceList from "@/feature/home/experience/ExperienceList";
import { HEADER_IDS } from "../../Header";

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
    </div>
  );
};

export default Experience;
