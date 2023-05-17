import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Prueba from "./components/Prueba";
import Profile from "./components/Profile/Profile";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  });

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Prueba />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
