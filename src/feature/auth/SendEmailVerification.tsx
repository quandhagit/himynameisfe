"use client";

import { auth } from "@/config/firebase";
import { useAuthContext } from "@/provider/AuthProvider";
import { Button } from "@mui/material";
import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const RESEND_TIME_LIMIT = 60;

const SendEmailVerification: React.FC = () => {
  const route = useRouter();
  const { isLoading } = useAuthContext();
  const resendCountInterval = useRef<NodeJS.Timeout | null>(null);
  const [resendCount, setResendCount] = useState(RESEND_TIME_LIMIT);
  const resendDisabled = resendCount > 0;

  const countDownResend = useCallback(() => {
    setResendCount(RESEND_TIME_LIMIT);
    if (resendCountInterval.current) {
      clearInterval(resendCountInterval.current);
    }
    resendCountInterval.current = setInterval(() => {
      setResendCount((prev) => {
        if (prev === 0 && resendCountInterval.current !== null) {
          clearInterval(resendCountInterval.current);
          return 0;
        }
        return --prev;
      });
    }, 1000);
  }, []);

  const handleResend = useCallback(() => {
    const user = auth.currentUser;
    if (!user) {
      route.replace("/login");
      return;
    }
    sendEmailVerification(user)
      .then(() => {
        countDownResend();
      })
      .catch((e) => {
        alert(e);
        setResendCount(0);
      });
  }, [auth.currentUser, isLoading, countDownResend]);

  useEffect(() => {
    if (isLoading) return;
    if (auth.currentUser?.emailVerified) {
      route.replace("/");
      return;
    }
    handleResend();

    return () => {
      if (resendCountInterval.current) {
        clearInterval(resendCountInterval.current);
      }
    };
  }, [handleResend, auth.currentUser, isLoading]);

  return (
    <div className="flex h-screen relative">
      <div className="py-4 px-6 flex flex-col items-center justify-center w-full gap-2">
        <div className="flex flex-col items-center justify-center">
          <h1>Please verify your email</h1>
          <div>You're almost there! We send an email to</div>
          <div className="font-bold">{auth.currentUser?.email || ""}</div>
          <div>
            Just click on the link in that email to complete your signup
          </div>
          <div>If you don't see it, you may need to check your spam folder</div>
          <div>Still can't find the email?</div>
        </div>
        <Button disabled={resendDisabled} onClick={handleResend}>
          Resend Email{resendDisabled && ` in ${resendCount}`}
        </Button>
      </div>
    </div>
  );
};
export default SendEmailVerification;
