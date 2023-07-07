import React from "react";
import NotFoundImg from "./not-found.png";
// import NotFoundImg from "./notfound.jpg";

const NotFound = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignIems: "center",
      }}
    >
      <div>
        <h1 className="text-center mt-5 bg-dark text-light">NotFound</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignIems: "center",
          width: "100%",
          marginTop: "10%",
        }}
      >
        <img
          src={NotFoundImg}
          alt="Not found"
          style={{ backgroundColor: "white", height: "350px", width: "450px" }}
        />
      </div>
    </div>
  );
};

export default NotFound;
