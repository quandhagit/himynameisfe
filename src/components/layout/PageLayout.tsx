"use client";

import { PageLayoutType } from "@/app/layout";
import { useSession } from "next-auth/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout: React.FC<{
  children: React.ReactNode;
  layout: PageLayoutType;
}> = ({ children, layout }) => {
  const { data: session } = useSession();

  switch (layout) {
    case "InternalLayout": {
      if (session?.user) {
        return (
          <>
            <Header />
            {children}
            <Footer />
          </>
        );
      }

      return (
        <>
          <Header />
          {children}
          <Footer />
        </>
      );
    }

    case "ExternalLayout": {
      return <>{children}</>;
    }
  }
};
export default PageLayout;
