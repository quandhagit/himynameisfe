import PageLayout from "@/components/layout/PageLayout";
import { RequireSession } from "@/components/providers/RequireSession";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout layout={"InternalLayout"}>
      <>{children}</>
    </PageLayout>
  );
}
