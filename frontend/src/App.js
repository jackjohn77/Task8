import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";



import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <div className="grey-background">
      <Router>
        <Menu />
        <Routes>
          {/* Routes to home, product, about page and more*/}
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
