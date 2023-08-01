export const typeDefs = /* GraphQL */ `
  type Daily {
    id: String
    createTime: String
    content: String
  }

  type Query {
    dailyList: [Daily]
  }
`;
