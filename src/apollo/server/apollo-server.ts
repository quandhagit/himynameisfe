import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "./graphql-schema";
import { resolvers } from "./resolvers";
import { prisma } from "@/lib/prisma";

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: prisma,

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/api/graphql",

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export default handleRequest;
