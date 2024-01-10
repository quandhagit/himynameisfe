import React from "react";
import ProjectList from "@/feature/home/project/ProjectList";
import { HOME_MENU_IDS } from "@/constant/home/common";

const Project: React.FC = () => {
  return (
    <section
      id={HOME_MENU_IDS.PROJECT}
      className="sm:px-[10%] xl:px-[20%] px-5 py-24 text-blue-950"
    >
      <div className="">
        <div>- PROJECTS</div>
        <div className="mt-3 text-2xl font-bold">Recent completed works</div>
      </div>
      <ProjectList />
    </section>
  );
};

export default Project;
