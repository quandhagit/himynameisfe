"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const ApolloProviders: React.FC<DashboardLayoutProps> = (props) => {
  const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloProviders;
