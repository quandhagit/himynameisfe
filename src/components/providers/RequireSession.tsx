"use client";

import { auth } from "@/config/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const RequireSession: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const route = useRouter();
  const { data: session, status } = useSession();

  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
    console.log(auth);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      setEmailVerified(user.emailVerified);
      console.log(user.emailVerified);
      if (!user.emailVerified) {
        route.push("/verify-email");
        // location.href = "/verify-email";
      }
    });

    if (status === "unauthenticated") {
      // saveCurrentUrlForNextLogin();
      route.push("/login");
      console.log("hey");
    }

    return () => {
      unsubscribe();
    };
  }, [status]);

  // if (!emailVerified) {
  //   return <>hoho</>;
  // }

  return <>{children}</>;
};

// export const SESSION_LOGIN_ENTRY_URL = "session-login-entry-url";

// export function saveCurrentUrlForNextLogin() {
//   const url = window.location.pathname + window.location.search;
//   window.sessionStorage.setItem(SESSION_LOGIN_ENTRY_URL, url);
// }
