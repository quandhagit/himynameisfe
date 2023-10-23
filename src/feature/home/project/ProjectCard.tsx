import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import React, { useMemo } from "react";

type ProjectCardProps = {
  startDate: string;
  endDate: string;
  projectName: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({
  startDate,
  endDate,
  projectName,
  description,
  technologies,
}: ProjectCardProps) => {
  const workingTime = useMemo(() => {
    if (!startDate && !endDate) return "";
    const startDateTime = moment(startDate).startOf("month");
    const endDateTime = moment(endDate).startOf("month");
    const duration = endDateTime.diff(startDateTime, "months");
    if (duration === 0) {
      return "less than 1 month";
    }
    if (duration === 1) {
      return "1 month";
    }
    return duration + " months";
  }, [startDate, endDate]);

  return (
    <div className="rounded relative h-auto min-h-[400px] overflow-hidden shadow-md">
      <div className="absolute top-8 right-0 py-1 px-2 rounded-l-xl bg-green-600 opacity-80 text-white font-bold">
        {workingTime}
      </div>
      <Image
        alt="abc"
        src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
      />
      <div className="absolute bottom-0 h-auto min-h-[140px] bg-white w-full p-4">
        <div className="text-lg font-bold text-blue-950">{projectName}</div>
        <div className="line-clamp-3 mt-2">{description}</div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {technologies.map((tech) => {
            return (
              <div
                key={tech}
                className="rounded-full bg-red-500 px-2 py-1 text-white text-sm"
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

export default ProjectCard;
