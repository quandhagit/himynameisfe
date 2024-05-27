"use client";

import { DUMB_IMAGE_URL } from "@/constant/common";
import { Workspace } from "@/redux/home/workspace/workspaceSlice";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";

type SettingProjectCardProps = {
  workspace: Workspace;
  onClick: (id: string) => void;
};

const SettingProjectCard: React.FC<SettingProjectCardProps> = ({
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
        className="rounded hidden sm:inline"
      />
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="">{company}</div>
          <div className="text-yellow-600">{workDateRange}</div>
        </div>
        <div className="text-xl mt-2 text-blue-950 font-semibold">{role}</div>
        <div className="mt-2 text-gray-600 line-clamp-3 w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SettingProjectCard;
