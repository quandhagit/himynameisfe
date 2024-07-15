"use client";

import { UserRegisterInputType, useUserRegisterMutation } from "@/api/auth";
import Input from "@/components/common/Input";
import { Button } from "@mui/material";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import signUpBg from "public/images/signUpBg.jpg";
import Image from "next/image";
import AppLogo from "@/components/AppLogo";

const Signup: React.FC = () => {
  const form = useForm<UserRegisterInputType>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const { mutate } = useUserRegisterMutation();

  const signUp = async (data: UserRegisterInputType) => {
    mutate(data, {
      onSuccess: () => {
        location.href = "/login";
      },
      onError(error) {
        alert(error);
      },
    });
  };

  return (
    <div className="flex h-screen relative">
      <div className="absolute py-6 md:px-14 px-6">
        <AppLogo />
      </div>
      <div className="bg-red-300 w-1/2 lg:flex hidden">
        <Image
          src={signUpBg}
          alt="signUpBg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center px-10 pb-20 mt-20 mx-auto lg:w-1/2 w-full overflow-y-auto">
        <div className="max-w-xl">
          <h1>Welcome to HiMyNameIs</h1>
          <div className="text-gray-400">
            Create an account to get started with HiMyNameIs and start sharing
            your CV or finding the right candidate for your company. Please
            register your information!
          </div>
          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit((data) => {
                signUp(data);
              })}
              className="flex flex-col gap-4 mt-10"
            >
              <div className="flex gap-4 flex-col sm:flex-row">
                <Input
                  registerName="lastName"
                  label="Last name"
                  placeholder="Enter your last name"
                  required
                />
                <Input
                  registerName="firstName"
                  label="First name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <Input
                registerName="email"
                label="Email"
                placeholder="Enter your email"
                required
              />
              <Input
                registerName="dateOfBirth"
                label="Date of birth"
                type="date"
                placeholder="Enter your date of birth"
                required
              />
              <Input
                registerName="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                required
                type="number"
                inputProps={{ inputMode: "tel" }}
              />
              <Input
                registerName="password"
                label="Password"
                placeholder="Enter your password"
                required
                pattern={
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                }
                type="password"
                validationErrorMessage="Password requiring at least 8 characters and must contain lowercase, uppercase, number and special character"
              />
              <Input
                registerName="confirmPassword"
                label="Confirm Password"
                placeholder="Please confirm your password"
                required
                type="password"
              />
              <div className="flex mt-2 gap-5 justify-end">
                <Button
                  variant="contained"
                  size="large"
                  className="w-full py-3"
                  type="submit"
                  disabled={!isValid}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </FormProvider>
          <p className="text-sm font-light text-gray-400 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-red-600 no-underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
