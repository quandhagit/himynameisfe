import React from "react";
import ProjectList from "@/feature/home/project/ProjectList";
import { HEADER_IDS } from "../../Header";

const Project = () => {
  return (
    <div
      id={HEADER_IDS.PROJECT}
      className="sm:px-[10%] xl:px-[20%] px-5 py-24 "
    >
      <div className="">
        <div>- PROJECTS</div>
        <div className="mt-3 text-2xl font-bold">Recent completed works</div>
      </div>
      <ProjectList />
    </div>
  );
};

export default Project;
