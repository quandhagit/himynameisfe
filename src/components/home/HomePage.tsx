import Introduction from "@/components/home/introduction/Introduction";
import About from "@/components/home/about/About";
import Workspace from "@/components/home/workspace/Workspace";
import Project from "@/components/home/project/Project";
import Contact from "@/components/home/contact/Contact";
import HomeTableOfContents from "@/components/home/HomeTableOfContents";

const HomePage: React.FC = () => {
  return (
    <>
      <style>
        {
          "html { --scroll-behavior: smooth!important; scroll-behavior: smooth!important; }"
        }
      </style>
      <div>
        <Introduction />
        <About />
        <Workspace />
        <Project />
        <Contact />
        <HomeTableOfContents />
      </div>
    </>
  );
};
export default HomePage;
