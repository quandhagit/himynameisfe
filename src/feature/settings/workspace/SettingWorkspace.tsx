"use client";

import React, { useCallback } from "react";
import SettingWorkspaceCard from "./SettingWorkspaceCard";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { selectWorkspace } from "@/redux/home/workspace/workspaceSlice";
import SettingWorkspaceDialog from "./SettingWorkspaceDialog";

const SettingWorkspace: React.FC = () => {
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
    <div className="flex flex-col gap-2">
      {workspaceList.map((card) => {
        return (
          <SettingWorkspaceCard
            key={card.id}
            workspace={card}
            onClick={handleClickCard}
          />
        );
      })}
      {selectedWorkspace && (
        <SettingWorkspaceDialog
          workspace={selectedWorkspace}
          onClose={handleCloseDialog}
          isOpen={!!selectedWorkspace}
        />
      )}
    </div>
  );
};

export default SettingWorkspace;
