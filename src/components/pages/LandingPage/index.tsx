import React from "react";
import NavBar from "@/components/common/NavBar";
import Hero from "@/components/common/Hero/Hero";
import Services from "@/components/common/ServicesComponent/Services";
import Portfolio from "@/components/common/Portfolio/Portfolio";
import WhyChooseUs from "@/components/common/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/common/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Footer />

    </>
  );
}
