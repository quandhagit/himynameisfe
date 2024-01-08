import { PrismaClient } from "@prisma/client";

export type CreateDailyResolverArgs = {
  content: string;
};

export const createDaily = async (
  args: CreateDailyResolverArgs,
  context: PrismaClient
) => {
  return await context.daily.create({
    data: {
      createTime: new Date(),
      content: args.content,
    },
  });
};
