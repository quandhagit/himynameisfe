import HomePage from "@/components/home/HomePage";
import PageLayout from "@/components/layout/PageLayout";

const Home: React.FC = () => {
  return (
    <PageLayout layout={"InternalLayout"}>
      <HomePage />
    </PageLayout>
  );
};
export default Home;
