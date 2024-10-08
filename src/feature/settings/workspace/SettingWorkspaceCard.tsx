"use client";

import { DUMB_IMAGE_URL } from "@/constant/common";
import { Workspace } from "@/dataflow/home/workspace/workspaceSlice";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";

type SettingWorkspaceCardProps = {
  workspace: Workspace;
  onClick: (id: string) => void;
};

const SettingWorkspaceCard: React.FC<SettingWorkspaceCardProps> = ({
  workspace,
  onClick,
}) => {
  const {
    id: workspaceId,
    startDate,
    endDate,
    company,
    role,
    description,
  } = workspace;

  const workDateRange = useMemo(() => {
    if (!startDate && !endDate) return "";

    if (!endDate) {
      return startDate + " - present";
    }

    return startDate + " - " + endDate;
  }, [startDate, endDate]);

  const handleCardClick = useCallback(() => {
    onClick(workspaceId);
  }, [workspaceId, onClick]);

  return (
    <div
      className="p-3 flex gap-4 border rounded border-gray-200 border-solid bg-white relative cursor-pointer shadow-sm hover:ring-1 ring-red-600"
      onClick={handleCardClick}
    >
      <Image
        src={DUMB_IMAGE_URL}
        alt="exp"
        width={200}
        height={150}
        className="rounded hidden sm:inline min-h-full"
      />
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <div className="">{company}</div>
          <div className="text-yellow-600">{workDateRange}</div>
        </div>
        <div className="text-xl text-blue-950 font-semibold">{role}</div>
        <div className="mt-2 text-gray-600 line-clamp-3 w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SettingWorkspaceCard;
