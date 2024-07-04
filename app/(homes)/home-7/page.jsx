import Header5 from "@/components/headers/Header5";
import Skills from "@/components/homes/common/Skills";

import Clients from "@/components/homes/home-7/Clients";
import Features from "@/components/homes/home-7/Features";

import Hero from "@/components/homes/home-7/Hero";
import Projects from "@/components/homes/home-7/Projects";
import React from "react";
// import Faq from "@/components/homes/home-7/Faq";

import About from "@/components/homes/home-1/About";
import Features2 from "@/components/homes/home-3/Features2";
import Testimonials from "@/components/homes/common/Testimonials";
import Blogs from "@/components/homes/home-7/Blogs";
import Cta from "@/components/homes/home-7/Cta";
import Footer3 from "@/components/footers/Footer3";
import Faq from "@/components/homes/home-1/Faq"
import Portfolio from "@/components/homes/home-1/Portfolio";
import MarqueeComponent from "@/components/common/Marquee";
export const metadata = {
  title: "Capital Engineering",
};
export default function HomePage7() {
  return (
    <>
      <Header5 />
      <Hero />
      <Clients />
      <Skills />
      <Features2 />
      
      <Portfolio />
      <Faq />
      
     
      {/* <Faq /> */}
      <Testimonials />
      <MarqueeComponent />
      <Projects />
      <Cta />
      <Footer3 />
    </>
  );
}
