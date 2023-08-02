import { PrismaClient } from "@prisma/client";

export const dailyList = async (parent: any, context: PrismaClient) => {
  return await context.daily.findMany();
};
