import Dialog from "@/components/common/Dialog";
import { Project } from "@/redux/home/project/projectSlice";
import React, { useMemo } from "react";

type ProjectDialogProps = {
  project: Project;
  isOpen?: boolean;
  onClose?: () => void;
};

const ProjectDialog: React.FC<ProjectDialogProps> = (props) => {
  const { project, isOpen = false, onClose } = props;

  const {
    startDate,
    endDate,
    projectName,
    referUrl,
    technologies,
    description,
    image,
  } = project;

  const workDateRange = useMemo(() => {
    if (!startDate && !endDate) return "";

    if (!endDate) {
      return startDate + " - present";
    }

    return startDate + " - " + endDate;
  }, [startDate, endDate]);

  return (
    <Dialog isOpen={isOpen} imageUrl={image} onClose={onClose}>
      <div className="flex gap-2 w-full mt-4 flex-col">
        <div className="text-yellow-600">{workDateRange}</div>
      </div>
      <div className="text-xl mt-4 text-blue-950 font-semibold">
        {projectName}
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
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
      {referUrl && (
        <div className="mt-4">
          <span>Referrence: </span>{" "}
          <a href={referUrl} target="_blank">
            {referUrl}
          </a>
        </div>
      )}
      <div className="mt-5 text-gray-600 w-full">{description}</div>
    </Dialog>
  );
};

export default ProjectDialog;
