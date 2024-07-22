"use client";

import PageLayout from "@/components/layout/PageLayout";
import { useAuthContext } from "@/provider/AuthProvider";
import { Button } from "@mui/material";

const VerifyEmail: React.FC = () => {
  const { data } = useAuthContext();

  return (
    <PageLayout layout={"InternalLayout"}>
      <div className="flex h-screen relative">
        <div className="py-4 px-6 flex flex-col items-center justify-center w-full gap-2">
          <div className="flex flex-col items-center justify-center">
            <h1>Please verify your email</h1>
            <div>You're almost there! We send an email to</div>
            <div>{data?.email || ""}</div>
            <div>
              Just click on the link in that email to complete your signup
            </div>
            <div>
              If you don't see it, you may need to check your spam folder
            </div>
            <div>Still can't find the email?</div>
          </div>
          <Button>Resend Email</Button>
        </div>
      </div>
    </PageLayout>
  );
};
export default VerifyEmail;
