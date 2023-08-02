"use client";

import { ApolloProvider } from "@apollo/client";

import { client } from "../client/apollo-client";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const ApolloProviders: React.FC<DashboardLayoutProps> = (props) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloProviders;
