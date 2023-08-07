export const typeDefs = /* GraphQL */ `
  type Daily {
    id: ID
    createTime: String
    content: String
  }

  type Query {
    dailyList: [Daily]
  }

  type Mutation {
    createDaily(content: String): Daily
  }
`;
