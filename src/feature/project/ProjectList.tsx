import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Pagination, Stack } from "@mui/material";

const dumbData = [
  {
    id: 1,
    startDate: "10/7/2023",
    endDate: "12/8/2023",
    projectName: "NCC Plus 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["react", "super power", "nextjs", "mongodb"],
  },
  {
    id: 2,
    startDate: "10/7/2023",
    endDate: "10/9/2023",
    projectName: "NCC Plus 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["react", "nextjs", "mongodb"],
  },
  {
    id: 3,
    startDate: "10/7/2023",
    endDate: "10/9/2023",
    projectName: "NCC Plus 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["react", "nextjs", "mongodb"],
  },
];

const ExperienceList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-16 w-full">
        {dumbData.map((project) => {
          return <ProjectCard {...project} key={project.id} />;
        })}
      </div>
      <Stack alignItems="center" marginTop={6}>
        <Pagination count={2} color="primary" />
      </Stack>
    </div>
  );
};

export default ExperienceList;
