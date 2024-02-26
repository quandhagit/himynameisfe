import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
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
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      return token;
    },
  },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
