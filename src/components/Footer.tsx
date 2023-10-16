import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const Footer = () => {
  return (
    <div className="sm:px-[10%] xl:px-[20%] px-5 py-5 text-blue-950 text-sm">
      <div>
        <div className="flex flex-wrap mt-4">
          <div className="lg:w-3/5 mb-10 lg:mb-2 pr-8">
            <div className="text-4xl font-bold mr-2 no-underline">
              <div className="text-red-700 font-mono">
                Quan
                <span className="text-white bg-red-700 px-3 rounded">DHA</span>
              </div>
            </div>
            <div className="flex flex-col border-l-red-400 border-l-4 gap-1 border-solid border-0 px-4 mt-5 text-blue-950">
              <div>0877617200</div>
              <div>quandha1009@gmail.com</div>
              <div>36 Khue My Dong 5, Ngu Hanh Son, Danang</div>
            </div>
          </div>
          <div className="flex flex-col lg:w-2/5 w-full lg:items-end">
            <div className="flex gap-4">
              <FacebookIcon sx={{ fontSize: 40 }} />
              <LinkedInIcon sx={{ fontSize: 40 }} />
              <GitHubIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="mt-2 lg:whitespace-nowrap">
              Copyright © 2023 Dang Hoang Anh Quan.
            </div>
            <div>All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
