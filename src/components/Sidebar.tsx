import { HEADER_IDS } from "@/constant/common";
import { Button, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import clsx from "clsx";

const Sidebar: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <Drawer anchor={"right"} open={open} onClose={onClose}>
      <div
        className={clsx(
          "flex flex-col items-end gap-3 w-60 sm:w-72 p-4 transition"
        )}
      >
        <button
          className="rounded-full bg-transparent border-none hover:bg-red-100 w-10 h-10 cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
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
          sx={{
            backgroundColor: "black",
          }}
        >
          Login
        </Button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
