import useMatchMedia from "@/utils/useMatchMedia";
import { Dialog } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

type CommonDialogProps = {
  imageUrl?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const CommonDialog: React.FC<CommonDialogProps> = (props) => {
  const isSmallScreen = useMatchMedia("(max-width: 640px)");

  const { imageUrl, isOpen = false, onClose, children } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          maxHeight: "80vh",
          paddingY: "2rem",
          minWidth: "45vw",
        },
      }}
    >
      <div className="w-full h-full overflow-y-auto px-8">
        {imageUrl && (
          <Image
            alt="common"
            src={imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: isSmallScreen ? "200px" : "428px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        )}
        <div className="break-words">{children}</div>
      </div>
    </Dialog>
  );
};

export default CommonDialog;
