import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navBar";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import NotFound from "./notFound";
import React from "react";
import server from "./server";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log(`This is ${server.whichEnv} envirnment`);
  console.log(`This is ${process.env.REACT_APP_ENV} | Example for Staging`);
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<NotFound />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
