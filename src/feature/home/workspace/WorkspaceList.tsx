"use client";

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import WorkspaceCard from "./WorkspaceCard";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { selectWorkspace } from "@/redux/home/workspace/workspaceSlice";

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
