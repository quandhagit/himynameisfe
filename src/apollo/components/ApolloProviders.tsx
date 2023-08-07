"use client";

import { makeClient } from "../client/apollo-client-client-component";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const ApolloProviders: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {props.children}
    </ApolloNextAppProvider>
  );
};

export default ApolloProviders;
