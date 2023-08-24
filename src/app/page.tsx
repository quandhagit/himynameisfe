import { Button } from "@mui/material";
import Image from "next/image";
import qImage from "../../public/images/q.png";
import avatar from "../../public/images/avatar.png";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-background-main min-h-screen pt-16 sm:px-[10%] xl:px-[20%] px-5 py-3 flex items-center flex-wrap-reverse bg-no-repeat bg-cover">
        <div className="sm:w-1/2">
          <div className="text-5xl text-blue-950 font-bold">
            <p className="mb-1.5">Hi, I'm QuanDHA,</p>
            <p>A Frontend Developer</p>
          </div>
          <div className="mt-7">
            <p className="text-base  text-blue-950">
              I'm a Vietnamese front‑end developer with <br /> 1.5 years of
              experience
            </p>
          </div>
          <div className="flex mt-7 gap-3">
            <Button variant="contained" size="large">
              My Projects
            </Button>
            <Button variant="outlined" size="large">
              Let's Talk
            </Button>
          </div>
          <div className="flex flex-col border-l-red-400 border-l-4 gap-1 px-4 mt-10  text-blue-950 xl:mt-32">
            <p>0877617200</p>
            <p>quandha1009@gmail.com</p>
            <p>36 Khue My Dong 5, Ngu Hanh Son, Danang</p>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center mb-4 relative">
          <Image src={qImage} alt="q" width={400} height={400} />
          <Image
            src={avatar}
            alt="q"
            width={450}
            height={450}
            className="absolute bottom-20 -left-5"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
