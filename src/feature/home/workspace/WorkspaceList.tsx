"use client";

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import WorkspaceCard from "./WorkspaceCard";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  Workspace,
  selectWorkspace,
} from "@/redux/home/workspace/workspaceSlice";

const dumbData = [
  {
    id: "1",
    startDate: "7/2023",
    endDate: "",
    company: "NCC Plus 1",
    role: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: "2",
    startDate: "5/2022",
    endDate: "7/2023",
    company: "Rikkei soft 2",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "",
  },
  {
    id: "3",
    startDate: "5/2021",
    endDate: "11/2021",
    company: "FPT soft 3",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "",
  },
];

const WorkspaceList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { workspaceList } = useAppSelector((state) => state.workspaceSlice);

  const handleClickCard = useCallback((workspaceId: string) => {
    dispatch(selectWorkspace(workspaceId));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16 w-full snake-grid">
      {workspaceList.map((card, index) => {
        return (
          <WorkspaceCard
            key={card.id}
            workspace={card}
            index={index}
            onClick={handleClickCard}
          />
        );
      })}
    </div>
  );
};

export default WorkspaceList;
