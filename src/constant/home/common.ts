export const HOME_MENU_IDS = {
  HOME: "Home",
  ABOUT: "About",
  EXPERIENCE: "Experience",
  PROJECT: "Project",
  CONTACT: "Contact",
} as const;

export type HomeMenuType = (typeof HOME_MENU_IDS)[keyof typeof HOME_MENU_IDS];
