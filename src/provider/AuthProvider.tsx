"use client";

import { useUserQuery } from "@/api/user";
import { auth } from "@/config/firebase";
import useMeData from "@/dataflow/auth/useMeData";
import { User } from "@/models/home";
import { useMutation } from "@tanstack/react-query";
import { signInWithCustomToken } from "firebase/auth";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { signOut as signOutNextAuth } from "next-auth/react";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

export type UserLoginType = { email: string; password: string };

type AuthProviderResult = {
  data: User | null;
  refetchUserData: () => void;
  status: "authenticated" | "unauthenticated" | "loading";
  isLoading: boolean;
  signOut: () => void;
  loginWithEmailPassword: ({ email, password }: UserLoginType) => void;
};

const AuthContext = createContext<AuthProviderResult>({
  data: null,
  refetchUserData: () => {},
  status: "unauthenticated",
  isLoading: false,
  signOut: () => {},
  loginWithEmailPassword: () => {},
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

  const {
    data: userData,
    isLoading: isUserDataLoading,
    refetch,
  } = useUserQuery(session.data?.id);

  const {
    isPending: isFirebaseLogging,
    mutateAsync: mutateSignInWithCustomToken,
  } = useMutation({
    mutationFn: async (customToken: string) => {
      await signInWithCustomToken(auth, customToken);
    },
  });

  const isSessionLoading = session.status === "loading";
  const isVerifyEmail = pathname === "/verify-email";

  const signOut = useCallback(async () => {
    await signOutNextAuth();
    await auth.signOut();
    route.push("/login");
  }, [auth]);

  const loginWithEmailPassword = useCallback(
    async ({ email, password }: UserLoginType) => {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    },
    []
  );

  useEffect(() => {
    if (!userData) return;
    initCurrentUser(userData);
  }, [userData]);

  useEffect(() => {
    if (!session) return;

    if (!auth.currentUser && session.status === "authenticated") {
      mutateSignInWithCustomToken(session.data.customToken);
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
    });

    return () => {
      unsubscribe();
    };
  }, [userData, pathname, isVerifyEmail]);

  if (
    isSessionLoading ||
    isFirebaseLogging ||
    isUserDataLoading ||
    (session.data && !emailVerified && !isVerifyEmail)
  ) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        data: user,
        refetchUserData: refetch,
        status,
        isLoading: isSessionLoading || isFirebaseLogging || isUserDataLoading,
        signOut,
        loginWithEmailPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
