"use client";
import AppLogo from "@/components/AppLogo";
import Input from "@/components/common/Input";
import { Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import signUpBg from "public/images/signUpBg.jpg";
import { signIn } from "next-auth/react";
import { useState } from "react";

type UserLogin = { email: string; password: string };

const Home: React.FC = () => {
  const form = useForm<UserLogin>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const [isLoading, setLoading] = useState(false);

  const login = async (data: UserLogin) => {
    const { email, password } = data;
    setLoading(true);
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/verify-email",
    }).finally(() => {
      setLoading(false);
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
        <div className="max-w-xl w-full">
          <h1>Welcome to HiMyNameIs</h1>
          <div className="text-gray-400">
            Login to join HiMyNameIs and start sharing your CV or finding the
            right candidate for your company.
          </div>
          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit((data) => {
                login(data);
              })}
              className="flex flex-col gap-4 mt-10"
            >
              <Input
                registerName="email"
                label="Email"
                placeholder="Enter your email"
                required
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
              <div className="flex mt-2 gap-5 justify-end">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    width: "100%",
                    paddingY: "12px",
                  }}
                  type="submit"
                  disabled={!isValid || isLoading}
                  startIcon={
                    isLoading && <CircularProgress size={20} color="inherit" />
                  }
                >
                  Sign In
                </Button>
              </div>
            </form>
          </FormProvider>
          <p className="text-sm font-light text-gray-400 dark:text-gray-400">
            You don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-red-600 no-underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
