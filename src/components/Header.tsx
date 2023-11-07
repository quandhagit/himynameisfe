import { Button } from "@mui/material";
import Link from "next/link";

export const HEADER_IDS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECT: "project",
  CONTACT: "Contact",
};

const Header: React.FC = () => {
  return (
    <nav className="py-6 md:px-14 px-6 flex justify-between items-center absolute w-full hover:bg-white duration-400 transition-all">
      <div className="flex items-center gap-3 justify-between w-full">
        <Link className="text-3xl font-bold mr-2 no-underline" href={"/"}>
          <div className="text-red-700 font-mono">
            Hi
            <span className="text-white bg-red-700 px-3 rounded">MyNameIs</span>
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
            className="bg-black hover:bg-black hover:opacity-80"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
