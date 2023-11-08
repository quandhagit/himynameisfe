"use client";

import { HEADER_IDS } from "@/constant/common";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const HOME_MENU = [
  "Home",
  "About",
  "Experience",
  "Project",
  "Contact",
] as const;

type HomeMenuType = (typeof HOME_MENU)[number];

const HomeTableOfContents = () => {
  const [selectedMenu, setSelectedMenu] = useState<HomeMenuType>("Home");

  const handleSelect = (menu: HomeMenuType) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="fixed w-52 top-1/4 left-6 rounded-md bg-opacity-30 p-4 bg-black flex flex-col gap-2">
      <div className="font-bold text-blue-200">Table Of Contents</div>
      {HOME_MENU.map((menu) => {
        return (
          <HomeTableOfContentsRow
            value={menu}
            onSelect={handleSelect}
            selectedMenu={selectedMenu}
          />
        );
      })}
    </div>
  );
};

const HomeTableOfContentsRow = ({
  selectedMenu,
  onSelect,
  value,
}: {
  selectedMenu?: HomeMenuType;
  onSelect: (menu: HomeMenuType) => void;
  value: HomeMenuType;
}) => {
  const handleSelect = () => {
    onSelect(value);
  };

  return (
    <Link
      onClick={handleSelect}
      className={clsx(
        "no-underline border-l-4 border-solid border-0 px-4 cursor-pointer font-bold",
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
