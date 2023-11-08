"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { HEADER_IDS } from "@/constant/common";
import useMatchMedia from "@/utils/useMatchMedia";

const Header: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const isMiddleScreen = useMatchMedia("(min-width: 1024px)");

  useEffect(() => {
    if (isMiddleScreen) {
      setOpenSidebar(false);
    }
  }, [isMiddleScreen]);

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <>
      <nav className="py-6 md:px-14 px-6 flex justify-between items-center absolute w-full hover:bg-white duration-400 transition-all">
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
            <Link
              className="no-underline text-black hover:text-red-600"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="no-underline text-black hover:text-red-600"
              href={"#" + HEADER_IDS.ABOUT}
            >
              About
            </Link>
            <Link
              className="no-underline text-black hover:text-red-600"
              href={"#" + HEADER_IDS.EXPERIENCE}
            >
              Experience
            </Link>
            <Link
              className="no-underline text-black hover:text-red-600"
              href={"#" + HEADER_IDS.PROJECT}
            >
              Project
            </Link>
            <Link
              className="no-underline text-black hover:text-red-600"
              href={"#" + HEADER_IDS.CONTACT}
            >
              Contact
            </Link>
            <Link
              className="no-underline text-black hover:text-red-600"
              href={"/daily"}
            >
              Daily
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "black",
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
      <Sidebar open={openSidebar} onClose={handleCloseSidebar} />
    </>
  );
};

export default Header;
