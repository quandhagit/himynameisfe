import CommonDialog from "@/components/common/CommonDialog";
import React, { useMemo } from "react";

type WorkspaceDialogProps = {
  imageUrl?: string;
  company: string;
  role: string;
  isOpen?: boolean;
  onClose?: () => void;
  description: string;
  startDate: string;
  endDate: string;
};

const WorkspaceDialog: React.FC<WorkspaceDialogProps> = (props) => {
  const {
    imageUrl,
    role,
    isOpen = false,
    description,
    startDate,
    endDate,
    company,
    onClose,
  } = props;

  const workDateRange = useMemo(() => {
    if (!startDate && !endDate) return "";

    if (!endDate) {
      return startDate + " - present";
    }

    return startDate + " - " + endDate;
  }, [startDate, endDate]);

  return (
    <CommonDialog isOpen={isOpen} imageUrl={imageUrl} onClose={onClose}>
      <div className="flex gap-5 w-full mt-4">
        <div className="text-yellow-600">{workDateRange}</div>
        <div className="">{company}</div>
      </div>
      <div className="text-xl mt-2 text-blue-950 font-semibold">{role}</div>
      <div className="mt-5 text-gray-600 w-full">{description}</div>
    </CommonDialog>
  );
};

export default WorkspaceDialog;
