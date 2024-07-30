"use client";

import React from "react";
import Navbar from "../components/NavBar";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import { Partners } from "../components/Partners";
import StockPrices from "../components/StockPrices";
import Services from "../components/Services";
import OurApproach from "../components/OurApproach";
import CTA from "../components/CTA";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Partners />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <CTA />
      <FAQ />
      <Testimonials />
    </main>
  );
};

export default Home;
