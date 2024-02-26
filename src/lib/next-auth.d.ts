import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      displayName: string;
      email: string;
    };
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      displayName: string;
      email: string;
    };
    accessToken: string;
  }
}
