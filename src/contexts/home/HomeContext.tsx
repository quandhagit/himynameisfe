import { User, Link, Profile, Project, Workspace } from "@/models/home";
import { createContext, useContext } from "react";

type HomeContextData = {
  loading: boolean;
  userInfo: User;
  profile: Profile;
  projects: Project[];
  workspaces: Workspace[];
  refLinks: Link;
};

const HomeContext = createContext<HomeContextData>({
  loading: false,
  userInfo: {
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    avatar: "",
    email: "",
    country: "",
    city: "",
    address: "",
    role: "",
  },
  profile: {
    id: "",
    role: "",
    shortDescription: "",
    fullDescription: "",
    public: true,
  },
  projects: [],
  workspaces: [],
  refLinks: {
    facebookUrl: "",
    githubUrl: "",
    linkedInUrl: "",
  },
});

export const useCall = () => useContext(HomeContext);

export const HomeContextProvider = HomeContext.Provider;

type HomeLogicResult = {
  data: HomeContextData;
};

export const useHomeContext = (): HomeLogicResult => {
  return {
    data: {
      loading: false,
      userInfo: {
        id: "",
        firstName: "",
        lastName: "",
        dateOfBirth: new Date(),
        phoneNumber: "",
        avatar: "",
        email: "",
        country: "",
        city: "",
        address: "",
        role: "",
      },
      profile: {
        id: "",
        role: "",
        shortDescription: "",
        fullDescription: "",
        public: true,
      },
      projects: [],
      workspaces: [],
      refLinks: {
        facebookUrl: "",
        githubUrl: "",
        linkedInUrl: "",
      },
    },
  };
};

export default useHomeContext;
