"use client";

import { DUMB_IMAGE_URL } from "@/constant/common";
import { Project } from "@/dataflow/home/project/projectSlice";
import moment from "moment";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";

type SettingProjectCardProps = {
  project: Project;
  onClick: (id: string) => void;
};

const SettingProjectCard: React.FC<SettingProjectCardProps> = ({
  project,
  onClick,
}) => {
  const {
    id: projectId,
    startDate,
    endDate,
    description,
    projectName,
    image,
    referUrl,
    technologies,
  } = project;

  const workingTime = useMemo(() => {
    if (!startDate && !endDate) return "";
    const startDateTime = moment(startDate, "MM-DD-YYYY").startOf("month");
    const endDateTime = moment(endDate, "MM-DD-YYYY").startOf("month");
    const duration = endDateTime.diff(startDateTime, "months");
    if (duration === 0) {
      return "less than 1 month";
    }
    if (duration === 1) {
      return "1 month";
    }
    return duration + " months";
  }, [startDate, endDate]);

  const handleCardClick = useCallback(() => {
    onClick(projectId);
  }, [projectId, onClick]);

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
          <div className="text-xl mt-2 text-blue-950 font-semibold">
            {projectName}
          </div>
          <div className="text-yellow-600">{workingTime}</div>
        </div>
        <div className=" text-gray-600 line-clamp-3 w-full">{description}</div>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => {
            return (
              <div
                key={tech}
                className="rounded-full bg-gray-900 px-2 py-1 text-white text-sm"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SettingProjectCard;
