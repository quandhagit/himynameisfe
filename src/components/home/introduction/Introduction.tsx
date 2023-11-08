import Image from "next/image";
import React from "react";
import IntroductionContent from "@/feature/home/introduction/IntroductionContent";
import Avatar from "@/feature/home/introduction/Avatar";
import { HEADER_IDS } from "@/constant/common";

const Introduction = () => {
  return (
    <div
      id={HEADER_IDS.HOME}
      className="bg-background-main min-h-screen pt-16 sm:px-[10%] xl:px-[20%] px-5 py-3 flex items-center flex-wrap-reverse bg-no-repeat bg-cover"
    >
      <div className="sm:w-1/2">
        <IntroductionContent />
      </div>
      <div className="sm:w-1/2 flex justify-center mb-6 relative">
        <Avatar />
      </div>
    </div>
  );
};

export default Introduction;
