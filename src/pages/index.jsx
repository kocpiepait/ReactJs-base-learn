import Layout from "../components/Layout";
import HeroSection from "../components/Section/HeroSection";
import CryptocurrencySection from "../components/Section/CryptocurrencySection";
import Footer from "../components/Footer";
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <Footer />
    </Layout>
  );
}
