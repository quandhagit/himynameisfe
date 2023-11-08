"use client";

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ProjectList from "@/feature/home/project/ProjectList";
import ProjectDialog from "@/feature/home/project/ProjectDialog";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { selectProject } from "@/redux/home/project/projectSlice";
import { HEADER_IDS } from "@/constant/common";

const Project = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedProject } = useAppSelector((state) => state.projectSlice);

  const handleCloseDialog = useCallback(() => {
    dispatch(selectProject(""));
  }, []);

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
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={handleCloseDialog}
          isOpen={!!selectedProject}
        />
      )}
    </div>
  );
};

export default Project;
