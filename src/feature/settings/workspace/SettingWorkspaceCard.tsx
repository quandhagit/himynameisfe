import { DUMB_IMAGE_URL } from "@/constant/common";
import Image from "next/image";
import React from "react";

const SettingWorkspaceCard: React.FC = () => {
  return (
    <div className="p-3 flex gap-4 border rounded border-gray-200 border-solid bg-white relative">
      <Image
        src={DUMB_IMAGE_URL}
        alt="exp"
        width={200}
        height={150}
        className="rounded"
      />
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="">company</div>
          <div className="text-yellow-600">workDateRange</div>
        </div>
        <div className="text-xl mt-2 text-blue-950 font-semibold">role</div>
        <div className="mt-2 text-gray-600 line-clamp-3 w-full">
          description
        </div>
      </div>
    </div>
  );
};

export default SettingWorkspaceCard;
