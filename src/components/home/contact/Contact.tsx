import { Button, TextField } from "@mui/material";
import React from "react";
import ContactContent from "@/feature/home/contact/ContactContent";
import ContactInputs from "@/feature/home/contact/ContactInputs";
import { HEADER_IDS } from "@/constant/common";

const Contact = () => {
  return (
    <div
      id={HEADER_IDS.CONTACT}
      className="sm:px-[10%] xl:px-[20%] px-5 py-24 text-blue-950 bg-red-200"
    >
      <div>
        <div>- CONTACT</div>
        <div className="mt-3 text-2xl font-bold">Get in touch</div>
        <div className="flex flex-wrap mt-4">
          <div className="lg:w-3/5 mb-10 pr-8">
            <ContactContent />
          </div>
          <div className="flex flex-col lg:w-2/5 w-full">
            <ContactInputs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
