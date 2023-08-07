import { createDaily } from "../features/daily/resolvers/dailyMutationResolver";
import { dailyList } from "../features/daily/resolvers/dailyQueryResolver";

export const resolvers = {
  Query: {
    dailyList,
  },
  Mutation: {
    createDaily,
  },
};
