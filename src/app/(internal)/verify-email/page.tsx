"use client";

import { Button } from "@mui/material";
import { useSession } from "next-auth/react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen relative">
      <div className="py-4 px-6 flex flex-col items-center justify-center">
        <h2>Please verify your email</h2>
        <div>You're almost there! We send an email to</div>
        <div>{session?.user.email || ""}</div>
        <div>Just click on the link in that email to complete your signup</div>
        <div>If you don't see it, you may need to check your spam folder</div>
        <div>Still can't find the email?</div>
        <Button>Resend Email</Button>
      </div>
    </div>
  );
};
export default Home;
