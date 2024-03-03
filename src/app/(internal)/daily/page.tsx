import React from "react";
import { GET_DAILY } from "@/apollo/features/daily/queries/dailyQueries";
import { getClient } from "@/apollo/client/apollo-client-server-component";
import { Daily } from "@/models/daily";

export const revalidate = 5;

const Daily: React.FC = async () => {
  const client = getClient();
  const {
    data: { dailyList },
  }: { data: { dailyList: Daily[] } } = await client.query({
    query: GET_DAILY,
  });
  return (
    <div className="w-full">
      {dailyList.map((d) => {
        return (
          <ul key={d.id}>
            <li>{d.createTime}</li>
            <li>{d.content}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Daily;
