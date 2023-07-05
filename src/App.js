import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navBar";
import Home from "./home";
import Login from "./login";
import Register from "./register";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route to="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
