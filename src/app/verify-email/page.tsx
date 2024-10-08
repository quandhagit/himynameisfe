"use client";

import PageLayout from "@/components/layout/PageLayout";
import { auth } from "@/config/firebase";
import SendEmailVerification from "@/feature/auth/SendEmailVerification";
import VerifyEmail from "@/feature/auth/VerifyEmail";
import { useAuthContext } from "@/provider/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const VerifyEmailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const { isLoading } = useAuthContext();
  const route = useRouter();
  const mode = searchParams.get("mode");
  const oobCode = String(searchParams.get("oobCode"));

  useEffect(() => {
    if (auth.currentUser?.emailVerified) {
      route.push("/");
    }
  }, [auth.currentUser?.emailVerified]);

  if (!mode && (isLoading || auth.currentUser?.emailVerified)) {
    return <></>;
  }

  return (
    <PageLayout layout={"InternalLayout"}>
      {mode === "verifyEmail" ? (
        <VerifyEmail oobCode={oobCode} />
      ) : (
        <SendEmailVerification />
      )}
    </PageLayout>
  );
};
export default VerifyEmailPage;
