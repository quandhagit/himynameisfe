import PageLayout from "@/components/layout/PageLayout";

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
