import { DUMB_IMAGE_URL } from "@/constant/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dumbData = [
  {
    id: "1",
    startDate: "10/7/2023",
    endDate: "12/8/2023",
    projectName: "NCC Plus 1",
    referUrl:
      "https://www.merixstudio.com/blog/introduction-using-redux-toolkit-nextjs-and-typescript/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["react", "super power", "nextjs", "mongodb"],
    image: DUMB_IMAGE_URL,
  },
  {
    id: "2",
    startDate: "10/7/2023",
    endDate: "10/9/2023",
    projectName: "NCC Plus 1",
    referUrl: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["react", "nextjs", "mongodb"],
    image: DUMB_IMAGE_URL,
  },
  {
    id: "3",
    startDate: "10/7/2023",
    endDate: "10/9/2023",
    projectName: "NCC Plus 1",
    referUrl: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["react", "nextjs", "mongodb"],
    image: DUMB_IMAGE_URL,
  },
];

export type Project = {
  id: string;
  startDate: string;
  endDate: string;
  projectName: string;
  referUrl: string;
  description: string;
  technologies: string[];
  image: string;
};

type initialStateType = {
  projectList: Project[];
  selectedProject: Project | null;
};

const initialState: initialStateType = {
  projectList: dumbData,
  selectedProject: null,
};

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    selectProject: (state: initialStateType, action: PayloadAction<string>) => {
      if (!action.payload) {
        return { ...state, selectedProject: null };
      }
      const selectedProject =
        state.projectList.find((p) => p.id === action.payload) || null;
      return { ...state, selectedProject: selectedProject };
    },
  },
});

export const { selectProject } = projectSlice.actions;
export default projectSlice.reducer;
