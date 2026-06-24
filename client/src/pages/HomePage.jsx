import MainLayout from "../components/layout/MainLayout";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LiteraryCursor from "../components/cursor/LiteraryCursor";
import HomeSections from "../features/home/HomeSections";

const HomePage = () => {
  return (
    <MainLayout>
      <LiteraryCursor />
      <Navbar />
      <HomeSections />
      <Footer />
    </MainLayout>
  );
};

export default HomePage;