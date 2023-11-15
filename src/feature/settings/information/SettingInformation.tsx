import React from "react";
import { Avatar, Button, Divider } from "@mui/material";
import CommonInput from "@/components/common/CommonInput";

const SettingInformation = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center py-8">
        <div className="flex justify-center px-16 mb-4 items-center lg:w-1/3 w-full">
          <Avatar sx={{ width: "200px", height: "200px" }} />
        </div>
        <div className="flex flex-col lg:w-2/3 w-full gap-4">
          <CommonInput label="Full name" placeholder="Enter your name" />
          <CommonInput label="Display name" placeholder="Enter your nickname" />
          <CommonInput label="Email" placeholder="Enter your email" />
          <CommonInput
            label="Birthday"
            type="date"
            placeholder="Enter your birthday"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="my-4">About Me</h3>
        <Divider />
        <div className="w-full py-8 flex flex-col gap-4">
          <CommonInput
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <CommonInput label="Address" placeholder="Enter your address" />
          <CommonInput label="Role" placeholder="Enter your work role" />
          <CommonInput
            label="Description"
            multiline
            rows={5}
            placeholder="Enter something about you"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="my-4">External Links</h3>
        <Divider />
        <div className="w-full py-8 flex flex-col gap-4">
          <CommonInput label="Facebook" placeholder="Enter your link here" />
          <CommonInput label="LinkedIn" placeholder="Enter your link here" />
          <CommonInput label="Github" placeholder="Enter your link here" />
        </div>
      </div>
      <div className="flex mt-2 gap-5 justify-end">
        <Button variant="outlined" size="large" className="w-24">
          Cancel
        </Button>
        <Button variant="contained" size="large" className="w-24">
          Save
        </Button>
      </div>
    </div>
  );
};

export default SettingInformation;
