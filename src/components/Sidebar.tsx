import { Button } from "@mui/material";
import Link from "next/link";

export const HEADER_IDS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECT: "project",
  CONTACT: "Contact",
};

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-end items-center absolute bg-white z-10 opacity-50 lg:hidden"></div>
      <div className="flex flex-col fixed h-full items-end gap-3 w-2/3 z-20 right-0 bg-white p-4 lg:hidden">
        <Link className="no-underline text-black hover:text-red-600" href={"/"}>
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
        <Button
          variant="contained"
          size="large"
          className="bg-black hover:bg-black hover:opacity-80"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
