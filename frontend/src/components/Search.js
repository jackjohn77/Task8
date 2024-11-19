// Import useState, UseEffect, useRef
import React, { useState } from "react";
import { Button } from "react-bootstrap";



import trash from "../images/trash.png";

// Home component
export default function Search() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <div className="App">
        <h3>Search Here</h3>
        <select value={value} onChange={handleChange}>
          <option value="all">All</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input></input>
        

        <Button variant="light" onClick="">
          <img src={trash} alt="del" width="10px"></img>
        </Button>
      </div>
    </div>
  );
}
