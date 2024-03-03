import { auth } from "@/config/firebase";
import { User } from "@/models/home";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const getUser = async (id: string, accessToken: string): Promise<User> => {
  const res = await fetch("http://localhost:8080/user/" + id, {
    method: "GET",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const response = await res.json();
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
      async authorize(
        credentials
      ): Promise<{ user: User; accessToken: string; id: string } | null> {
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
        const userInfo = await getUser(userCredential.uid, accessToken);
        return {
          id: userInfo.id,
          user: userInfo,
          accessToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      if (user) {
        return { ...token, ...user };
      }

      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
