import { Button } from "@mui/material";
import qImage from "../../../public/images/q.png";
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";
import React from "react";
import ContactInfo from "../contact/ContactInfo";

const contractInfoData = {
  phoneNumber: "0877617200",
  email: "quandha1009@gmail.com",
  address: "36 Khue My Dong 5, Ngu Hanh Son, Danang",
};

const IntroductionContent = () => {
  return (
    <div>
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
      <ContactInfo
        phoneNumber={contractInfoData.phoneNumber}
        email={contractInfoData.email}
        address={contractInfoData.address}
      />
    </div>
  );
};

export default IntroductionContent;
