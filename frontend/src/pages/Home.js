// Import useState, UseEffect, useRef
import React from "react";
// Import child components
import Search from "../components/Search";

// Home component
export default function Home() {
 
  return (
    <div>
      <div className="App full-height">
        <h2>
          The place to searchResult for your favorite media and create your mix list
        </h2>
        <hr />
        <Search ></Search>
      </div>
    </div>
  );
}
