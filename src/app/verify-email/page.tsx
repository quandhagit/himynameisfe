"use client";

import PageLayout from "@/components/layout/PageLayout";
import { auth } from "@/config/firebase";
import SendEmailVerification from "@/feature/auth/SendEmailVerification";
import VerifyEmail from "@/feature/auth/VerifyEmail";
import { useAuthContext } from "@/provider/AuthProvider";
import { useSearchParams } from "next/navigation";

const VerifyEmailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const { isLoading } = useAuthContext();
  const mode = searchParams.get("mode");
  const oobCode = String(searchParams.get("oobCode"));

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
