"use client";

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import WorkspaceList from "@/feature/home/workspace/WorkspaceList";
import WorkspaceDialog from "../../../feature/home/workspace/WorkspaceDialog";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { selectWorkspace } from "@/redux/home/workspace/workspaceSlice";
import { HOME_MENU_IDS } from "@/constant/home/common";

const dumb = {
  id: 1,
  startDate: "7/2023",
  endDate: "",
  company: "NCC Plus 1",
  role: "Frontend Developer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const Workspace = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedWorkspace } = useAppSelector((state) => state.workspaceSlice);

  const handleCloseDialog = useCallback(() => {
    dispatch(selectWorkspace(""));
  }, []);

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
