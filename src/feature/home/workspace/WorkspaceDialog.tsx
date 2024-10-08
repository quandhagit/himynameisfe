import Dialog from "@/components/common/Dialog";
import { Workspace } from "@/dataflow/home/workspace/workspaceSlice";
import React, { useMemo } from "react";

type WorkspaceDialogProps = {
  workspace: Workspace;
  isOpen?: boolean;
  onClose?: () => void;
};

const WorkspaceDialog: React.FC<WorkspaceDialogProps> = (props) => {
  const { workspace, isOpen = false, onClose } = props;

  const { startDate, endDate, company, role, description, image } = workspace;

  const workDateRange = useMemo(() => {
    if (!startDate && !endDate) return "";

    if (!endDate) {
      return startDate + " - present";
    }

    return startDate + " - " + endDate;
  }, [startDate, endDate]);

  return (
    <Dialog isOpen={isOpen} imageUrl={image} onClose={onClose}>
      <div className="flex gap-5 w-full mt-4">
        <div className="text-yellow-600">{workDateRange}</div>
        <div className="">{company}</div>
      </div>
      <div className="text-xl mt-2 text-blue-950 font-semibold">{role}</div>
      <div className="mt-5 text-gray-600 w-full">{description}</div>
    </Dialog>
  );
};

export default WorkspaceDialog;
