import { CircularProgress } from "@mui/material";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <CircularProgress size={40} color="warning" />
    </div>
  );
};

export default Loading;
