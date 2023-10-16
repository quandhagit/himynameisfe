import { Button } from "@mui/material";
import qImage from "../../public/images/q.png";
import avatar from "../../public/images/avatar.png";
import Introduction from "@/components/introduction/Introduction";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";

const Home: React.FC = () => {
  return (
    <div>
      {/* Home */}
      <Introduction />
      {/* About */}
      <About />
      {/* EXPERIENCE */}
      <Experience />
      {/* PROJECT */}
      <Project />
      <Contact />
    </div>
  );
};
export default Home;
