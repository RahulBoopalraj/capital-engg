"use client";

import styles from "./projectSearchBar.module.css";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function PorjectSearchBar({ filterArray, setFilterArray }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchText.trim() !== "") {
        setFilterArray([...filterArray, searchText.trim()]);
        setSearchText(""); // Clear the search input
      }
    }
  };

  const handleFilterRemove = (index) => {
    const updatedFilterArray = [...filterArray];
    updatedFilterArray.splice(index, 1);
    setFilterArray(updatedFilterArray);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <div className={styles.searchelements}>
          <input
            className={styles.searchbox}
            type="text"
            placeholder="Search a Project..."
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />
          <button className={styles.searchbutton} onClick={handleSearchSubmit}>
            <Search />
          </button>
        </div>
        <div className={styles.filtersection}>
          {filterArray.map((item, index) => (
            <div className={styles.filtercard} key={index}>
              {item}
              <span
                style={{ padding: "0px 0px 0px 5px" }}
                onClick={() => handleFilterRemove(index)}
              >
                <X size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
