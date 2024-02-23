import {
  UserLink,
  UserProfile,
  UserProject,
  UserWorkspace,
} from "@/models/home";
import { createContext } from "react";

type HomeContextData = {
  loading: boolean;
  profile: UserProfile;
  projects: UserProject[];
  workspaces: UserWorkspace[];
  refLinks: UserLink;
};

const HomeContext = createContext<HomeContextData>({});

const useHomeContext = () => {
  return {};
};

export default useHomeContext;
