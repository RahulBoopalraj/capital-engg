"use client";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const isotopContainer = useRef();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);

    // Add the selected category to the selected filters array
    if (newCategory) {
      setSelectedFilters([...selectedFilters, newCategory]);
    }

    // Reset the filter dropdown to default
    event.target.value = "";
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const removeChip = (category) => {
    setSelectedFilters(selectedFilters.filter((c) => c !== category));
  };

  const filteredPortfolioData = portfolioData.filter((elm) => {
    // Filter by selected categories
    if (selectedFilters.length > 0 && !selectedFilters.some((c) => elm.categoryLinks.includes(c))) {
      return false;
    }

    // Filter by search term
    if (searchTerm && !elm.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-2">
          <div>
            <form className="flex h-12 items-center bg-gray-100 px-4">
              <div className="flex h-12 flex-grow items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  placeholder="Search Project"
                  className="mr-4 h-full bg-inherit outline-none"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex h-12 w-fit items-center">
                <select
                  className="h-full w-20 bg-inherit outline-none"
                  onChange={handleCategoryChange}
                >
                  <option value="">filter</option>
                  <option value="Architecture & Design">Architecture & Design</option>
                  <option value="MEP Design">MEP Design</option>
                  <option value="Structural Engineering">Structural Engineering</option>
                  <option value="Project Management Consultancy">Project Management Consultancy</option>
                  <option value="Environmental Solutions">Environmental Solutions</option>
                  <option value="Landscaping">Landscaping</option>
                  <option value="Fit Out & Interior Design">Fit Out & Interior Design</option>
                </select>
              </div>
            </form>
          </div>
          <div className="flex max-w-full flex-wrap justify-center">
            {selectedFilters.map((filter, index) => (
              <div
                key={index}
                className="flex w-fit items-center justify-center gap-1 rounded-full bg-gray-300 px-2 py-px"
                onClick={() => removeChip(filter)}
              >
                <p className="text-sm font-semibold text-gray-800">{filter}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="portfolio-area-1 space overflow-hidden">
        <div className="container">
          <div
            className="row gy-60 justify-content-between masonary-active"
            ref={isotopContainer}
          >
            {filteredPortfolioData.map((elm, i) => (
              <div key={i} className="col-lg-6 filter-item">
                <div className={`portfolio-wrap ${i == 0 ? "mt-lg-140" : ""} `}>
                  <div className="portfolio-thumb">
                    <Link scroll={false} href={`/project-details/${elm.id}`}>
                      <Image
                        width={526}
                        height={740}
                        src={elm.imageSrc}
                        alt="portfolio"
                      />
                    </Link>
                  </div>
                  <div className="portfolio-details">
                    <ul className="portfolio-meta">
                      {elm.categoryLinks.slice(0, 3).map((elm2, i2) => (
                        <li key={i2}>
                          <a href="#">{elm2}</a>
                        </li>
                      ))}
                    </ul>
                    <h3 className="portfolio-title">
                      <a href="#">{elm.projectTitle}</a>
                    </h3>
                    <Link
                      scroll={false}
                      href={`/project-details/${elm.id}`}
                      className="link-btn"
                    >
                      <span className="link-effect">
                        <span className="effect-1">VIEW PROJECT</span>
                        <span className="effect-1">VIEW PROJECT</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
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
    </>
  );
}