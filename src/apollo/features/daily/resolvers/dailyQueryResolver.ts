import { PrismaClient } from "@prisma/client";
import { CreateDailyResolverArgs } from "./dailyMutationResolver";

export const dailyList = async (
  args: CreateDailyResolverArgs,
  context: PrismaClient
) => {
  return await context.daily.findMany({});
};
