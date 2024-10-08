"use client";

import { auth } from "@/config/firebase";
import { useAuthContext } from "@/provider/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const RequireSession: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const route = useRouter();
  const pathname = usePathname();
  const { status } = useAuthContext();

  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      setEmailVerified(user.emailVerified);
      if (!user.emailVerified) {
        route.push("/verify-email");
      }
    });

    if (status === "unauthenticated") {
      route.push("/login");
    }

    return () => {
      unsubscribe();
    };
  }, [status, pathname]);

  if (!emailVerified) {
    return null;
  }

  return <>{children}</>;
};
