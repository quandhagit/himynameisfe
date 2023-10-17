import clsx from "clsx";
import React, { useMemo } from "react";

type ExperienceCardProps = {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  description: string;
  index: number;
};

const ExperienceCard = ({
  startDate,
  endDate,
  company,
  role,
  description,
  index,
}: ExperienceCardProps) => {
  const workDateRange = useMemo(() => {
    if (!startDate && !endDate) return "";

    if (!endDate) {
      return startDate + " - present";
    }

    return startDate + " - " + endDate;
  }, [startDate, endDate]);

  return (
    <div className="relative">
      {index !== 0 && (
        <div
          className={clsx(
            "h-[1px] w-20 bg-orange-400 absolute",
            (index % 4 === 0 || index % 4 === 2) &&
              "mx-auto top-0 left-0 right-0 -translate-y-10 rotate-90",
            index % 4 === 1 &&
              "mx-auto top-0 left-0 right-0 -translate-y-10 rotate-90 md:right-auto md:bottom-0 md:my-auto md:-translate-y-0 md:-translate-x-20 md:rotate-0",
            index % 4 === 3 &&
              "mx-auto top-0 left-0 right-0 -translate-y-10 rotate-90 md:left-auto md:bottom-0 md:my-auto md:-translate-y-0 md:translate-x-20 md:rotate-0"
          )}
        ></div>
      )}

      <div className="flex flex-col p-6 bg-white border-gray-300 border-solid border rounded h-[202px]">
        <div className="flex justify-between w-full">
          <div className="text-yellow-600">{workDateRange}</div>
          <div className="">{company}</div>
        </div>
        <div className="text-xl mt-2 text-blue-950 font-semibold">{role}</div>
        <div className="mt-5 text-gray-600 line-clamp-3 w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
