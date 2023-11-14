import { HOME_MENU_IDS } from "@/constant/home/common";
import { Button, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

const Sidebar: React.FC<{
  open: boolean;
  onClose: () => void;
  tabElements: ReactNode;
}> = ({ open, onClose, tabElements }) => {
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
        {tabElements}
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
    </Drawer>
  );
};

export default Sidebar;
