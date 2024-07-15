"use client";

import { useUserQuery } from "@/api/user";
import { auth } from "@/config/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthProviderResult = {
  data: Session | null;
  status: "authenticated" | "unauthenticated" | "loading";
  isLoading: boolean;
};

const AuthContext = createContext<AuthProviderResult>({
  data: null,
  status: "unauthenticated",
  isLoading: false,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const session = useSession();
  const [status, setStatus] = useState(session.status);

  const { data: userData, isLoading } = useUserQuery(session.data?.id);

  useEffect(() => {
    session.update({ user: userData });
  }, [userData]);

  useEffect(() => {
    if (session && session.status === "authenticated") {
      signInWithCustomToken(auth, session.data.customToken).then(() => {
        setStatus("authenticated");
      });
    }
  }, [session]);

  useEffect(() => {
    if (session.status !== "authenticated") {
      setStatus(session.status);
    }
  }, [session.status]);

  return (
    <AuthContext.Provider
      value={{
        data: session.data,
        status,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
