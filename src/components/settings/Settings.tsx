"use client";

import { SETTING_TABS, SettingTabType } from "@/constant/settings/common";
import SettingExperience from "@/feature/settings/workspace/SettingWorkspace";
import SettingInformation from "@/feature/settings/information/SettingInformation";
import SettingProject from "@/feature/settings/project/SettingProject";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState<SettingTabType>(
    SETTING_TABS.INFORMATION
  );

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: SettingTabType
  ) => {
    setSelectedTab(newValue);
  };

  const a11yProps = (value: string) => {
    return {
      id: `setting-tab-${value}`,
      "aria-controls": `setting-tabpanel-${value}`,
    };
  };

  return (
    <div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          maxWidth: "100%",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          <Tab
            label="Information"
            {...a11yProps(SETTING_TABS.INFORMATION)}
            value={SETTING_TABS.INFORMATION}
            className="text-base"
          />
          <Tab
            label="Experience"
            {...a11yProps(SETTING_TABS.EXPERIENCE)}
            value={SETTING_TABS.EXPERIENCE}
            className="text-base"
          />
          <Tab
            label="Project"
            {...a11yProps(SETTING_TABS.PROJECT)}
            value={SETTING_TABS.PROJECT}
            className="text-base"
          />
        </Tabs>
      </Box>
      <div className="py-8">
        {selectedTab === SETTING_TABS.INFORMATION && <SettingInformation />}
        {selectedTab === SETTING_TABS.EXPERIENCE && <SettingExperience />}
        {selectedTab === SETTING_TABS.PROJECT && <SettingProject />}
      </div>
    </div>
  );
};

export default Settings;
