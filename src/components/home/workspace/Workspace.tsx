"use client";

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import WorkspaceList from "@/feature/home/workspace/WorkspaceList";
import WorkspaceDialog from "../../../feature/home/workspace/WorkspaceDialog";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { selectWorkspace } from "@/redux/home/workspace/workspaceSlice";
import { HOME_MENU_IDS } from "@/constant/home/common";

const Workspace = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedWorkspace } = useAppSelector((state) => state.workspaceSlice);

  const handleCloseDialog = useCallback(() => {
    dispatch(selectWorkspace(""));
  }, [dispatch]);

  return (
    <section
      id={HOME_MENU_IDS.EXPERIENCE}
      className="sm:px-[10%] xl:px-[20%] px-5 py-24 bg-[#212121]"
    >
      <div className="text-white">
        <div>- EXPERIENCE</div>
        <div className="mt-3 text-2xl font-bold">
          Let&apos;s check my journey
        </div>
      </div>
      <WorkspaceList />
      {selectedWorkspace && (
        <WorkspaceDialog
          workspace={selectedWorkspace}
          onClose={handleCloseDialog}
          isOpen={!!selectedWorkspace}
        />
      )}
    </section>
  );
};

export default Workspace;
