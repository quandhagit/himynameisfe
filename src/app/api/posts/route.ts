import { prisma } from "@/lib/prisma";

export const GET = async (request: Request) => {
  try {
    console.log("gogo");
    const products = await prisma.posts.findMany();
    return new Response(JSON.stringify(products));
  } catch (err) {
    console.log("loi ne: ", err);
  }
};
