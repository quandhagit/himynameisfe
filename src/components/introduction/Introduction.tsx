import { Button } from "@mui/material";
import qImage from "../../../public/images/q.png";
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
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
  );
};

export default Introduction;
