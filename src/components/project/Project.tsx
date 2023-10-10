import React from "react";
import ProjectList from "@/feature/project/ProjectList";

const Project = () => {
  return (
    <div className="sm:px-[10%] xl:px-[20%] px-5 py-24 ">
      <div className="">
        <div>- PROJECTS</div>
        <div className="mt-3 text-2xl font-bold">Recent completed works</div>
      </div>
      <ProjectList />
    </div>
  );
};

export default Project;
