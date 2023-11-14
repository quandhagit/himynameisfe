import { Button } from "@mui/material";
import qImage from "../../public/images/q.png";
import avatar from "../../public/images/avatar.png";
import Introduction from "@/components/home/introduction/Introduction";
import About from "@/components/home/about/About";
import Workspace from "@/components/home/workspace/Workspace";
import Project from "@/components/home/project/Project";
import Contact from "@/components/home/contact/Contact";
import HomeTableOfContents from "@/components/home/HomeTableOfContents";

const HomePage: React.FC = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Workspace />
      <Project />
      <Contact />
      <HomeTableOfContents />
    </div>
  );
};
export default HomePage;
