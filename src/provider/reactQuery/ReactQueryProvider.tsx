"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
