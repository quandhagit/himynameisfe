import { Button } from "@mui/material";
import Image from "next/image";
import qImage from "../../public/images/q.png";
import avatar from "../../public/images/avatar.png";

const Home: React.FC = () => {
  return (
    <div>
      {/* Home */}
      <div className="bg-background-main min-h-screen pt-16 sm:px-[10%] xl:px-[20%] px-5 py-3 flex items-center flex-wrap-reverse bg-no-repeat bg-cover">
        <div className="sm:w-1/2">
          <div className="xl:text-6xl sm:text-5xl text-4xl text-blue-950 font-bold">
            <div className="mb-1.5">Hi, I&apos;m QuanDHA,</div>
            <div>A Frontend Developer</div>
          </div>
          <div className="mt-7">
            <div className="text-base  text-blue-950">
              I&apos;m a Vietnamese front‑end developer with <br /> 1.5 years of
              experience
            </div>
          </div>
          <div className="flex mt-7 gap-5">
            <Button variant="contained" size="large">
              My Projects
            </Button>
            <Button variant="outlined" size="large">
              Let&apos;s Talk
            </Button>
          </div>
          <div className="flex flex-col border-l-red-400 border-l-4 gap-1 border-solid border-0 px-4 mt-10 text-blue-950 xl:mt-32">
            <div>0877617200</div>
            <div>quandha1009@gmail.com</div>
            <div>36 Khue My Dong 5, Ngu Hanh Son, Danang</div>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center mb-6 relative">
          <Image
            src={avatar}
            alt="q"
            width={450}
            height={450}
            className="max-w-full h-auto"
          />
        </div>
      </div>
      {/* About */}
      <div className="sm:px-[10%] xl:px-[20%] px-5 py-24 text-blue-950">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-2/5 min-w-max pr-5 mb-10">
            <div>- NICE TO MEET YOU!</div>
            <div className="mt-3 text-2xl font-bold">Dang Hoang Anh Quan</div>
            <div className="font-bold mt-1">Frontend Developer</div>
            <Button variant="contained" size="large" className="mt-7">
              My Projects
            </Button>
          </div>
          <div className="flex flex-col lg:w-3/5">
            <div>
              Hello there! My name is{" "}
              <span className="text-red-600">Dang Hoang Anh Quan</span>. I am a
              web designer &amp; developer, and I&apos;m very passionate and
              dedicated to my work.
            </div>
            <div className="mt-8">
              With 20 years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </div>
            <div className="flex flex-wrap mt-10 gap-4 shrink-0">
              <div className="flex flex-col">
                <div className="underline underline-offset-2">AGE</div>
                <div className="font-bold">23</div>
              </div>
              <div className="flex flex-col">
                <div className="underline underline-offset-2">ADDRESS</div>
                <div className="font-bold">Ngu Hanh Son, Danang</div>
              </div>
              <div className="flex flex-col">
                <div className="underline underline-offset-2">MAIL</div>
                <div className="font-bold">quandha1009@gmail.com</div>
              </div>
              <div className="flex flex-col">
                <div className="underline underline-offset-2">PHONE</div>
                <div className="font-bold">0877617200</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-6 w-full">
            <div className="flex flex-col items-center justify-center py-20 bg-green-200 rounded">
              <div className="text-3xl font-bold">1+</div>
              <div>YEARS OF EXPERIENCE</div>
            </div>
            <div className="flex flex-col items-center justify-center py-20 bg-blue-200 rounded">
              <div className="text-3xl font-bold">5+</div>
              <div>PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
      {/* Experient */}
      <div className="sm:px-[10%] xl:px-[20%] px-5 py-24 bg-[#212121]">
        <div className="text-white">
          <div>- EXPERIENCE</div>
          <div className="mt-3 text-2xl font-bold">
            Let&apos;s check my journey
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-6 w-full">
          <div className="flex flex-col items-center justify-center py-20 bg-white border-gray-300 border rounded">
            <div className="text-3xl font-bold">1+</div>
            <div>YEARS OF EXPERIENCE</div>
          </div>
          <div className="flex flex-col items-center justify-center py-20 bg-white border-gray-300 border rounded">
            <div className="text-3xl font-bold">5+</div>
            <div>PROJECTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
