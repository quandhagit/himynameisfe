import React from "react";
import ExperienceList from "@/feature/experience/ExperienceList";

const Experience = () => {
  return (
    <div className="sm:px-[10%] xl:px-[20%] px-5 py-24 bg-[#212121]">
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
