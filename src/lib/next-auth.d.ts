import { User } from "@/models/home";

declare module "next-auth" {
  interface Session {
    id: string;
    user: User;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    user: User;
    accessToken: string;
  }
}
