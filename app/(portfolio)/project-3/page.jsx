import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/portfolio/Breadcumb";

import ProjectsCustom from "@/components/portfolio/Project-Custom";
import React from "react";
export const metadata = {
  title: "Project 3 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function ProjectPage3() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <ProjectsCustom />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
