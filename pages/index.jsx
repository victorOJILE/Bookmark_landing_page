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

/*
  
  Features
  Pricing
  Contact
  Login
		
		
		<img src="/images/icon-arrow.svg" alt="" />
		<img src="/images/icon-close.svg" alt="" />
		<img src="/images/icon-error.svg" alt="" />
		<img src="/images/icon-hamburger.svg" alt="" />
		<img src="/images/illustration-features-tab-1.svg" alt="" />
		<img src="/images/illustration-features-tab-2.svg" alt="" />
		<img src="/images/illustration-features-tab-3.svg" alt="" />
		

  Features
  Pricing
  Contact
  
  <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </p>
  </footer>
*/