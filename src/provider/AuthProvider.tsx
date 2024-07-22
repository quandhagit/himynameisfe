"use client";

import { useUserQuery } from "@/api/user";
import { auth } from "@/config/firebase";
import useMeData from "@/dataflow/auth/useMeData";
import { User } from "@/models/home";
import { signInWithCustomToken } from "firebase/auth";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

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

  const { data: userData, isLoading, refetch } = useUserQuery(session.data?.id);

  useEffect(() => {
    if (!userData) return;
    initCurrentUser(userData);
  }, [userData]);

  useEffect(() => {
    if (!session) return;

    if (!auth.currentUser && session.status === "authenticated") {
      signInWithCustomToken(auth, session.data.customToken)
        .then(() => {
          setStatus("authenticated");
        })
        .catch(() => {
          route.push("/login");
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
      if (userData && !user.emailVerified) {
        route.push("/verify-email");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userData]);

  if (auth.currentUser && !emailVerified && pathname !== "/verify-email") {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        data: user,
        refetchUserData: refetch,
        status,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
