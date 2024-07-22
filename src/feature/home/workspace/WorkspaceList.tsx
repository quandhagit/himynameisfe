"use client";

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import WorkspaceCard from "./WorkspaceCard";
import { AppDispatch, useAppSelector } from "@/dataflow/store";
import { selectWorkspace } from "@/dataflow/home/workspace/workspaceSlice";
import WorkspaceDialog from "./WorkspaceDialog";

const WorkspaceList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { workspaceList, selectedWorkspace } = useAppSelector(
    (state) => state.workspaceSlice
  );

  const handleCloseDialog = useCallback(() => {
    dispatch(selectWorkspace(""));
  }, [dispatch]);

  const handleClickCard = useCallback(
    (workspaceId: string) => {
      dispatch(selectWorkspace(workspaceId));
    },
    [dispatch]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16 w-full snake-grid">
      {workspaceList.map((card, index) => {
        return (
          <WorkspaceCard
            key={card.id}
            workspace={card}
            index={index}
            length={workspaceList.length}
            onClick={handleClickCard}
          />
        );
      })}
      {selectedWorkspace && (
        <WorkspaceDialog
          workspace={selectedWorkspace}
          onClose={handleCloseDialog}
          isOpen={!!selectedWorkspace}
        />
      )}
    </div>
  );
};

export default WorkspaceList;
