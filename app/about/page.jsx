import Awards from "@/components/about/Awards";
import Breadcumb from "@/components/about/Breadcumb";
import Clients from "@/components/about/Clients";
import Contact from "@/components/about/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";
import Image from "next/image";
import Link from "next/link";

import Team from "@/components/about/Team";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "About || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function AboutPage() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Facts />
      <Features />
     
      <div className="container mt-80">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <p className="sec-text mt-10">
              Capital Engineering Consultancy is an established consulting firm in United Arab Emirates since 2006 and having multiple satellite offices in the region, India, Iraq, KSA, UK with specialized expertise in Engineering Consultancy, Designing of Residential, Commercial Industrial Developments, Institutional, Hotel, Leisure Facilities, Oil & Gas, Road and Infrastructure, Environmental Solutions, BIM services etc. Our designs are unique in concept, bold in execution and at the same time, responsive to the client’s diverse requirements.
              </p>
              <p className="sec-text mt-30">
              Our rapid growth and impressive list of clients bear testimony to our commitment to produce the best in every project we are commissioned to undertake. Having designed and executed works for clients ranging from Sharjah Ruler’s office, Dubai Metro, large Real Estate Developers, Corporations, Leading Contractors and Individuals, we are now in an enviable position of being better equipped to deliver successfully, designs for jobs of any size, nature and complexity. These include schools, residential complexes, villa complexes, leisure facilities, industrial buildings, industrial plants, cooling plants, etc. At CAPITAL, we focus deeply on the design potential of each work, converting it into built reality, within the time frame and budget provided.
              </p>
            </div>
            <h3>Remarking Services</h3>
            <p className="sec-text mb-n1">
            To maintain effective and high standards of service offered to our clients, positive efforts are made to recruit the best Architects, Engineers and then train them to ensure CAPITAL remains at the forefront of all disciplines. Our staff have decades of experience in their profession, with dedication and commitment to the jobs assigned to them At CAPITAL, we focus deeply on the design potential of each work, converting it into built reality, within the time frame and budget provided. To maintain effective and high standards of service offered to our clients, positive efforts are made to recruit the best Architects, Engineers and then train them to ensure CAPITAL remains at the forefront of all disciplines.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-10">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/about.jpg)",
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* <Awards /> */}
      <Team />
      {/* <Contact /> */}
      <Clients />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
