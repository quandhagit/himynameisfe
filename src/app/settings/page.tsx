import Settings from "@/components/settings/Settings";
import React from "react";

const SettingsPage: React.FC = async () => {
  return (
    <div className="sm:px-[10%] xl:px-[20%] px-5 py-8 text-blue-950">
      <h1 className="text-2xl mb-6">Settings</h1>
      <Settings />
    </div>
  );
};

export default SettingsPage;
