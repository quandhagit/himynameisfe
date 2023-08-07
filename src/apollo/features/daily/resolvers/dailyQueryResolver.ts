import { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { CreateDailyResolverArgs } from "./dailyMutationResolver";

export const dailyList = async (
  parent: any,
  args: CreateDailyResolverArgs,
  context: PrismaClient
) => {
  return await context.daily.findMany({});
};
