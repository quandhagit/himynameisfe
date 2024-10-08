import { User } from "@/models/home";

declare module "next-auth" {
  interface Session {
    id: string;
    user: User;
    accessToken: string;
    customToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    user: User;
    accessToken: string;
    customToken: string;
  }
}
