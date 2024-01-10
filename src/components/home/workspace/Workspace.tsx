"use client";

import React from "react";
import WorkspaceList from "@/feature/home/workspace/WorkspaceList";
import { HOME_MENU_IDS } from "@/constant/home/common";

const Workspace = () => {
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
    </section>
  );
};

export default Workspace;
