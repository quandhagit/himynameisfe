import { Button } from "@mui/material";
import React from "react";

type NameAndRoleProps = {
  fullName: string;
  role: string;
};

const NameAndRole = ({ fullName, role }: NameAndRoleProps) => {
  return (
    <div>
      <div className="mt-3 text-2xl font-bold">{fullName}</div>
      <div className="font-bold mt-1">{role}</div>
      <Button variant="contained" size="large" className="mt-7">
        My Projects
      </Button>
    </div>
  );
};

export default NameAndRole;
