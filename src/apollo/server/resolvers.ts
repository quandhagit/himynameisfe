import { createDaily } from "../features/daily/dailyMutationResolver";
import { dailyList } from "../features/daily/dailyQueryResolver";

export const resolvers = {
  Query: {
    dailyList,
  },
  Mutation: {
    createDaily,
  },
};
