import React from "react";
import CollapsibleExample from "./navbar";
import Watchlist from "./Watchlist";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Homepage/home";
const App = () => {
  return (
    <>
      <Router>
        <CollapsibleExample />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watch' element={<Watchlist />} />


        </Routes>
      </Router>
    </>
  );
};

export default App;
