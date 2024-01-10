"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { useEffect, useMemo, useState } from "react";
import { HOME_MENU_IDS } from "@/constant/home/common";
import useMatchMedia from "@/utils/useMatchMedia";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useDetectScroll from "@/utils/useDetectScrollOnTop";

const Header: React.FC = () => {
  const isMiddleScreen = useMatchMedia("(min-width: 1024px)");
  const { isScrollOnTop } = useDetectScroll();
  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const isProfilePage = pathname === "/";

  const tabElements = useMemo(() => {
    return (
      <>
        <Link className="no-underline text-black hover:text-red-600" href={"/"}>
          Profile
        </Link>
        <Link
          className="no-underline text-black hover:text-red-600"
          href={"/settings"}
        >
          Settings
        </Link>
        <Link
          className="no-underline text-black hover:text-red-600"
          href={"/settings"}
        >
          Dashboard
        </Link>
        <Link
          className="no-underline text-black hover:text-red-600"
          href={"/daily"}
        >
          Daily
        </Link>
        <Link
          className="no-underline text-black hover:text-red-600"
          href={"#" + HOME_MENU_IDS.EXPERIENCE}
        >
          Search
        </Link>
      </>
    );
  }, []);

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  useEffect(() => {
    if (isMiddleScreen) {
      setOpenSidebar(false);
    }

    window.history.scrollRestoration = "manual";
  }, [isMiddleScreen]);

  return (
    <>
      <nav
        className={clsx(
          "py-6 md:px-14 px-6 flex justify-between items-center w-full bg-white duration-400 transition-all fixed z-50 top-0 shadow",
          isProfilePage &&
            isScrollOnTop &&
            "bg-opacity-0 shadow-none hover:bg-white"
        )}
      >
        <div className="flex items-center gap-3 justify-between w-full">
          <Link className="text-3xl font-bold mr-2 no-underline" href={"/"}>
            <div className="text-red-700 font-mono">
              Hi
              <span className="text-white bg-red-700 px-3 rounded">
                MyNameIs
              </span>
            </div>
          </Link>
          <div className="lg:flex xl:max-w-[50%] gap-6 w-3/5 hidden justify-between font-bold">
            {tabElements}
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "black",
                ":hover": { opacity: 0.8, backgroundColor: "black" },
              }}
            >
              Login
            </Button>
          </div>
          <button
            className="cursor-pointer flex lg:hidden border-none hover:bg-red-100 rounded bg-transparent"
            onClick={() => {
              setOpenSidebar(true);
            }}
          >
            <MenuIcon sx={{ fontSize: 35 }} />
          </button>
        </div>
      </nav>
      <Sidebar
        open={openSidebar}
        onClose={handleCloseSidebar}
        tabElements={tabElements}
      />
    </>
  );
};

export default Header;
