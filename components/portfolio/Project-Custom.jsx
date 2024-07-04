"use client";

import { portfolioDataCustom } from "@/data/portfolioCustom";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

export default function ProjectsCustom(props) {
  const [filteredData, setFilteredData] = useState(portfolioDataCustom);

  useEffect(() => {
    if (props.filter && props.filter.length > 0) {
      const newFilteredData = portfolioDataCustom.filter((item) => {
        const itemLowerCase = item.title.toLowerCase();
        const projectTitleLowerCase = item.projectTitle.toLowerCase();
        return props.filter.some((filterValue) => {
          const filterValueLowerCase = filterValue.toLowerCase();
          return (
            item.categoryLinks.some((link) =>
              link.toLowerCase().includes(filterValueLowerCase)
            ) ||
            projectTitleLowerCase.includes(filterValueLowerCase) ||
            itemLowerCase.includes(filterValueLowerCase)
          );
        });
      });
      setFilteredData(newFilteredData);
    } else {
      setFilteredData(portfolioDataCustom);
    }
  }, [props.filter]);

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-60 justify-content-center">
          {filteredData.map((elm, i) => (
            <div key={i} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap">
                <div className="portfolio-thumb">
                  <Link scroll={false} href={`/project-details/${elm.id}`}>
                    <Image
                      width={618}
                      height={470}
                      src={elm.imageSrc}
                      alt="portfolio"
                    />
                  </Link>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title mb-3">
                    <Link scroll={false} href={`/project-details/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <ul className="portfolio-meta">
                   
                      <li >
                      {elm.categoryLinks.slice(0, 3).map((elm2, i2) => (
                        <a key={i2} href="#">{elm2} / </a>
                           ))}
                      </li>
                 
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-wrap justify-content-center mt-60">
          <Link scroll={false} className="btn" href="/project-2">
            <span className="link-effect">
              <span className="effect-1">LOAD MORE</span>
              <span className="effect-1">LOAD MORE</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
