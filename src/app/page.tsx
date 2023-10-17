import { Button } from "@mui/material";
import qImage from "../../public/images/q.png";
import avatar from "../../public/images/avatar.png";
import Introduction from "@/components/home/introduction/Introduction";
import About from "@/components/home/about/About";
import Experience from "@/components/home/experience/Experience";
import Project from "@/components/home/project/Project";
import Contact from "@/components/home/contact/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};
export default Home;
