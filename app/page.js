import { Navbar } from "../components/NavBar";
import Image from "next/image";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Partners } from "../components/Partners";
import { StockPrices } from "../components/StockPrices";
import { Services } from "../components/Services";
import { OurApproach } from "../components/OurApproach";
import CTA from "../components/CTA";
import { WhyUs } from "../components/WhyUs";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Partners />
      <div id="about">
        <About />
      </div>
      <Services />
      <OurApproach />
      <WhyUs />
      <CTA />
      <div id="faq">
        <FAQ />
      </div>
      <Products />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
      {/* <StockPrices /> */}
    </main>
  );
}
