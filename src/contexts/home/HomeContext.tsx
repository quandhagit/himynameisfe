import {
  UserLink,
  UserProfile,
  UserProject,
  UserWorkspace,
} from "@/models/home";
import { createContext, useContext } from "react";

type HomeContextData = {
  loading: boolean;
  profile: UserProfile;
  projects: UserProject[];
  workspaces: UserWorkspace[];
  refLinks: UserLink;
};

const HomeContext = createContext<HomeContextData>({
  loading: false,
  profile: {
    id: "",
    profileId: "",
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
      profile: {
        id: "",
        profileId: "",
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
