"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HOME_MENU_IDS } from "@/constant/home/common";
import useMatchMedia from "@/utils/useMatchMedia";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useDetectScroll from "@/utils/useDetectScrollOnTop";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import AppLogo from "../AppLogo";
import { useAuthContext } from "@/provider/AuthProvider";
import { auth } from "@/config/firebase";

const Header: React.FC = () => {
  const isMiddleScreen = useMatchMedia("(min-width: 1024px)");
  const { isScrollOnTop } = useDetectScroll();
  const router = useRouter();
  const pathname = usePathname();
  const { data: user } = useAuthContext();

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const isProfilePage = pathname === "/";

  const tabElements = useMemo(() => {
    return (
      <>
        <Link className="no-underline text-black hover:text-red-600" href={"/"}>
          Blogs
        </Link>
        <Link
          className="no-underline text-black hover:text-red-600"
          href={"/settings"}
        >
          Settings
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

  const handleLogout = useCallback(async () => {
    await signOut();
    await auth.signOut();
  }, []);

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
          <div className="flex items-center gap-10">
            <AppLogo />
            <div className="lg:flex gap-10 hidden font-bold">{tabElements}</div>
          </div>
          <div className="hidden lg:flex">
            {user ? (
              <div className="flex items-center gap-4">
                <div>{`${user.lastName} ${user.firstName}`}</div>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "black",
                    ":hover": { opacity: 0.8, backgroundColor: "black" },
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "black",
                  ":hover": { opacity: 0.8, backgroundColor: "black" },
                }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>
            )}
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
