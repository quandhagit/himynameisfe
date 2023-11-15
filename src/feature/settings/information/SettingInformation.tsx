import React from "react";
import { Avatar, Button, Divider } from "@mui/material";
import CommonInput from "@/components/common/CommonInput";
import { useForm } from "react-hook-form";

const SettingInformation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <div className="flex justify-between flex-wrap items-center py-8">
          <div className="flex justify-center px-16 mb-4 items-center lg:w-1/3 w-full">
            <Avatar sx={{ width: "200px", height: "200px" }} />
          </div>
          <div className="flex flex-col lg:w-2/3 w-full gap-4">
            <CommonInput
              register={register("fullName")}
              label="Full name"
              placeholder="Enter your name"
              required
            />
            <CommonInput
              register={register("email")}
              label="Email"
              placeholder="Enter your email"
              required
            />
            <CommonInput
              register={register("dateOfBirth")}
              label="Date of birth"
              type="date"
              placeholder="Enter your date of birth"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="my-4">About Me</h3>
          <Divider />
          <div className="w-full py-8 flex flex-col gap-4">
            <CommonInput
              register={register("displayName")}
              label="Display name"
              placeholder="Enter your nickname"
            />
            <CommonInput
              register={register("phoneNumber")}
              label="Phone Number"
              placeholder="Enter your phone number"
              required
              type="number"
              inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
            />
            <CommonInput
              register={register("address")}
              label="Address"
              placeholder="Enter your address"
              required
            />
            <CommonInput
              register={register("role")}
              label="Role"
              placeholder="Enter your work role"
              required
            />
            <CommonInput
              register={register("shortDescription")}
              label="Short description"
              multiline
              rows={3}
              placeholder="Enter something about you"
            />
            <CommonInput
              register={register("description")}
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
            <CommonInput
              register={register("facebookUrl")}
              label="Facebook"
              placeholder="Enter your link here"
            />
            <CommonInput
              register={register("linkedInUrl")}
              label="LinkedIn"
              placeholder="Enter your link here"
            />
            <CommonInput
              register={register("githubUrl")}
              label="Github"
              placeholder="Enter your link here"
            />
          </div>
        </div>
        <div className="flex mt-2 gap-5 justify-end">
          <Button variant="outlined" size="large" className="w-24">
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            className="w-24"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingInformation;
