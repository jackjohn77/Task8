// Import useState, UseEffect, useRef
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import { addMedia, addTerm, addSearchResult } from "../store/searchState";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchResult from "../images/search.png";

// Home component
export default function Search() {
  // Retrieve the totalPrice state from the Redux store
  const mediaChoice = useSelector((state) => state.search.mediaSelectionChoice);
  const media = useSelector((state) => state.search.media);
  const search = useSelector((state) => state.search.term);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mediaValue, setMediaValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleMediaChange = (event) => {
    const selectedValue = event.target.value;
    setMediaValue(selectedValue);
    dispatch(addMedia(selectedValue));
  };

  const handleSearchChange = (event) => {
    const selectedValue = event.target.value;
    setSearchValue(selectedValue);
    dispatch(addTerm(selectedValue));
  };

  // Use useEffect to log the updated state 
  useEffect(() => { console.log("Updated media:", media); }, [media]);
  useEffect(() => {
    console.log("Updated search:", search);
  }, [search]);

   // Function to fetch tasks from the server
  const fetchSearch = useCallback(async () => {
    try {
      const sendToServer = {
        term: search,
        media: media
      }
      const response = await fetch("/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendToServer),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(addSearchResult(data));
      navigate("/searchResult");

    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, []);

  return (
    <div>
      {" "}
      <div className="App">
        {" "}
        <h3>Search Here</h3>{" "}
        <select value={mediaValue} onChange={handleMediaChange} placeholder={media}>
          {" "}
          {mediaChoice.map((option, index) => (
            <option key={index} value={option}>
              {" "}
              {option.charAt(0).toUpperCase() + option.slice(1)}{" "}
            </option>
          ))}{" "}
        </select>{" "}
        <input value={searchValue} onChange={handleSearchChange} placeholder={search}></input>{" "}
        <Button variant="light" onClick={fetchSearch}>
          {" "}
          <img
            src={searchResult}
            alt="searchResult icon"
            width="20px"
          ></img>{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
