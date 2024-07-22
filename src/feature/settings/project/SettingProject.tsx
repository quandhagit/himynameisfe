"use client";

import { AppDispatch, useAppSelector } from "@/dataflow/store";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import SettingProjectCard from "./SettingProjectCard";
import { selectProject } from "@/dataflow/home/project/projectSlice";
import SettingProjectDialog from "./SettingProjectDialog";

const SettingProject: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { projectList, selectedProject } = useAppSelector(
    (state) => state.projectSlice
  );

  const handleCloseDialog = useCallback(() => {
    dispatch(selectProject(""));
  }, [dispatch]);

  const handleClickCard = useCallback(
    (id: string) => {
      dispatch(selectProject(id));
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col gap-2">
      {projectList.map((card) => {
        return (
          <SettingProjectCard
            project={card}
            key={card.id}
            onClick={handleClickCard}
          />
        );
      })}
      {selectedProject && (
        <SettingProjectDialog
          project={selectedProject}
          onClose={handleCloseDialog}
          isOpen={!!selectedProject}
        />
      )}
    </div>
  );
};

export default SettingProject;
