export const SETTING_TABS = {
  INFORMATION: "Information",
  EXPERIENCE: "Experience",
  PROJECT: "Project",
} as const;

export type SettingTabType = (typeof SETTING_TABS)[keyof typeof SETTING_TABS];
