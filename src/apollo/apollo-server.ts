import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "@/apollo/graphql-schema";
import { resolvers } from "@/apollo/resolvers";

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/api/graphql",

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export default handleRequest;
