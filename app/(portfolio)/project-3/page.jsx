"use client";

import { useState } from "react";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/portfolio/Breadcumb";

import ProjectsCustom from "@/components/portfolio/Project-Custom";
import PorjectSearchBar from "@/components/search/projectSearchBar";
import React from "react";

export default function ProjectPage3() {
  const [filterArray, setFilterArray] = useState([]);

  return (
    <>
      <Header3 />
      <Breadcumb />
      <PorjectSearchBar filterArray={filterArray} setFilterArray={setFilterArray} />
      <ProjectsCustom filter={filterArray} />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
