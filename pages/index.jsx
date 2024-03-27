import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Extensions from "@/components/Extensions";
import FAQS from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Features />
        <Extensions />
        <FAQS />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}