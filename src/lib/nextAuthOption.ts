import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const getCustomToken = async (
  id: string,
  accessToken: string
): Promise<string> => {
  const res = await fetch("http://localhost:8080/auth/" + id, {
    method: "GET",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const response = await res.text();
  return response;
};

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<{
        customToken: string;
        accessToken: string;
        id: string;
      } | null> {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          credentials?.email || "",
          credentials?.password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => {
            console.log(error);
          });

        if (!userCredential) {
          return null;
        }

        const accessToken = await userCredential.getIdToken(true);

        const customToken = await getCustomToken(
          userCredential.uid,
          accessToken
        );

        return {
          id: userCredential.uid,
          accessToken,
          customToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, session, trigger }) {
      if (trigger === "update" && session?.user) {
        token.user = session.user;
      }

      return token;
    },
    async session({ token, session, trigger, newSession }) {
      session.user = token.user;
      session.id = token.id;
      session.accessToken = token.accessToken;
      session.customToken = token.customToken;
      if (trigger === "update" && newSession?.user) {
        session.user = newSession.user;
      }
      return session;
    },
  },
};
