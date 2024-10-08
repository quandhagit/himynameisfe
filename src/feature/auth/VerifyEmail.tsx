"use client";

import { auth } from "@/config/firebase";
import { Button, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { applyActionCode } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type IProps = {
  oobCode: string;
};

const VerifyEmail: React.FC<IProps> = ({ oobCode }) => {
  const route = useRouter();
  const { isPending, isSuccess, isError, mutate } = useMutation({
    mutationFn: async () => {
      await applyActionCode(auth, oobCode);
    },
    onSuccess: () => {
      auth.currentUser?.reload().then(() => {
        // After reload, onAuthStateChanged should be triggered
        console.log("User reloaded, auth state should update.");
      });
    },
    onError: () => {},
  });

  const handleGoto = useCallback(() => {
    if (isSuccess) {
      route.push("/");
      return;
    }
    route.push("/login");
  }, [isSuccess]);

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <div className="flex h-screen relative">
      <div className="py-4 px-6 flex flex-col items-center justify-center w-full gap-8">
        <div
          className={clsx(
            "flex flex-col items-center justify-center",
            isError && "line-through"
          )}
        >
          <h1>Your email has been verified!</h1>
          <div>Enjoy your visit</div>
        </div>
        <Button
          variant="contained"
          onClick={handleGoto}
          disabled={isPending}
          size="large"
          sx={{
            width: 200,
          }}
        >
          {isPending && <CircularProgress size={20} color="inherit" />}
          {isSuccess && "Go to Home"}
          {isError && "Go to Login"}
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
