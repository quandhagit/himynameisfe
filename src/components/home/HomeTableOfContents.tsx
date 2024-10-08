"use client";

import { HOME_MENU_IDS, HomeMenuType } from "@/constant/home/common";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";

const HomeTableOfContents = () => {
  const [selectedMenu, setSelectedMenu] = useState<HomeMenuType>("Home");

  useEffect(() => {
    const handleObsever = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.8) {
          setSelectedMenu(entry.target.id as HomeMenuType);
        }
      });
    };

    const observer = new IntersectionObserver(handleObsever, {
      threshold: [0.8],
    });

    const elements = document.querySelectorAll("section[id]");
    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="z-50 group hover:w-52 hover:h-[216px] hover:rounded-md fixed w-14 h-14 top-1/4 left-6 overflow-hidden bg-opacity-30 p-4 bg-black flex flex-col rounded-md xl:w-52 xl:h-[216px] transition-all duration-300">
      <div className="xl:hidden group-hover:hidden">
        <WidgetsIcon className="text-white" />
      </div>
      <div className="mt-20 flex group-hover:mt-0 flex-col gap-2 xl:mt-0 transition-all duration-300">
        <div className="font-bold text-blue-200">Table Of Contents</div>
        {Object.values(HOME_MENU_IDS).map((menu) => {
          return (
            <HomeTableOfContentsRow
              key={menu}
              value={menu}
              selectedMenu={selectedMenu}
            />
          );
        })}
      </div>
    </div>
  );
};

const HomeTableOfContentsRow = ({
  selectedMenu,
  value,
}: {
  selectedMenu?: HomeMenuType;
  value: HomeMenuType;
}) => {
  return (
    <Link
      className={clsx(
        "no-underline border-l-4 border-solid border-0 px-4 cursor-pointer font-semibold",
        selectedMenu === value
          ? "border-l-blue-400 text-blue-400"
          : "border-l-transparent text-white hover:text-blue-300"
      )}
      href={`#${value}`}
    >
      {value}
    </Link>
  );
};

export default HomeTableOfContents;
