import { gql } from "@apollo/client";

export const GET_DAILY = gql`
  query getDailyQuery {
    dailyList {
      createTime
      content
    }
  }
`;
