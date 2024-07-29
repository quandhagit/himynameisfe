"use client";

import { useUserQuery } from "@/api/user";
import { auth } from "@/config/firebase";
import useMeData from "@/dataflow/auth/useMeData";
import { User } from "@/models/home";
import { signInWithCustomToken } from "firebase/auth";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthProviderResult = {
  data: User | null;
  refetchUserData: () => void;
  status: "authenticated" | "unauthenticated" | "loading";
  isLoading: boolean;
};

const AuthContext = createContext<AuthProviderResult>({
  data: null,
  refetchUserData: () => {},
  status: "unauthenticated",
  isLoading: false,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const session = useSession();
  const route = useRouter();
  const pathname = usePathname();
  const { user, initCurrentUser } = useMeData();
  const [status, setStatus] = useState(session.status);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: userData,
    isLoading: isLoadingUserData,
    refetch,
  } = useUserQuery(session.data?.id);

  const isVerifyEmail = pathname === "/verify-email";

  useEffect(() => {
    if (!userData) return;
    initCurrentUser(userData);
  }, [userData]);

  useEffect(() => {
    if (!session) return;

    if (!auth.currentUser && session.status === "authenticated") {
      setIsLoading(true);
      signInWithCustomToken(auth, session.data.customToken)
        .then(() => {
          setStatus("authenticated");
        })
        .catch(() => {
          route.push("/login");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (session.status !== "authenticated") {
      setStatus(session.status);
    }
  }, [session]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      setEmailVerified(user.emailVerified);
      if (userData && !user.emailVerified && !isVerifyEmail) {
        route.push("/verify-email");
      }
      if (user.emailVerified) {
        route.push("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userData, pathname]);

  if (session.data && !emailVerified && !isVerifyEmail) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        data: user,
        refetchUserData: refetch,
        status,
        isLoading: isLoadingUserData || isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
