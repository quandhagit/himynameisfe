"use client";

import { PageLayoutType } from "@/app/layout";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAuthContext } from "@/provider/AuthProvider";

const PageLayout: React.FC<{
  children: React.ReactNode;
  layout: PageLayoutType;
}> = ({ children, layout }) => {
  const { data } = useAuthContext();

  switch (layout) {
    case "InternalLayout": {
      if (data) {
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
