import React from "react";

const dumbData = [
  {
    startDate: "7/2023",
    endDate: "",
    company: "NCC Plus",
    role: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    startDate: "5/2022",
    endDate: "7/2023",
    company: "NCC Plus",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    startDate: "5/2021",
    endDate: "11/2021",
    company: "NCC Plus",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const ExperienceList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mt-16 w-full bg-slate-50">
      <div>
        <div className="flex flex-col p-6 bg-white border-gray-300 border-solid border rounded h-[202px]">
          <div className="flex justify-between w-full">
            <div className="text-yellow-600">7/2023 - present</div>
            <div>NCC Plus</div>
          </div>
          <div className="text-xl mt-2 text-blue-950 font-semibold">
            Frontend Developer
          </div>
          <div className="mt-5 text-gray-600 line-clamp-3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-[1px] w-20 bg-orange-400 absolute my-auto top-0 bottom-0 -translate-x-full"></div>
        <div className="flex flex-col p-6 bg-white border-gray-300 border-solid border rounded h-[202px]">
          <div className="flex justify-between w-full">
            <div className="text-yellow-600">5/2022 - 7/2023</div>
            <div>Rikkeisoft</div>
          </div>
          <div className="text-xl mt-2 text-blue-950 font-semibold">
            Frontend Developer
          </div>
          <div className="mt-5 text-gray-600 line-clamp-3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col p-6 bg-white border-gray-300 border-solid border rounded h-[202px]">
          <div className="flex justify-between w-full">
            <div className="text-yellow-600">5/2021 - 11/2021</div>
            <div>FPT Soft</div>
          </div>
          <div className="text-xl mt-2 text-blue-950 font-semibold">
            Frontend Developer
          </div>
          <div className="mt-5 text-gray-600 line-clamp-3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
