import PageLayout from "@/components/layout/PageLayout";

export default function ExternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout layout={"ExternalLayout"}>{children}</PageLayout>;
}
