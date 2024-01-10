"use client";

import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import ProjectCard from "./ProjectCard";
import { Pagination, Stack } from "@mui/material";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { selectProject } from "@/redux/home/project/projectSlice";
import ProjectDialog from "./ProjectDialog";

const ProjectList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { projectList, selectedProject } = useAppSelector(
    (state) => state.projectSlice
  );

  const handleCloseDialog = useCallback(() => {
    dispatch(selectProject(""));
  }, [dispatch]);

  const handleProjectClick = useCallback(
    (id: string) => {
      dispatch(selectProject(id));
    },
    [dispatch]
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-16 w-full">
        {projectList.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.id}
              onClick={handleProjectClick}
            />
          );
        })}
      </div>
      <Stack alignItems="center" marginTop={6}>
        <Pagination count={2} color="primary" />
      </Stack>
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

export default ProjectList;
