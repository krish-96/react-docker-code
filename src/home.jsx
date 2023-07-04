import React from "react";

const Home = () => {
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
        <h1 className="text-center mt-5 bg-dark text-light">Home Page</h1>
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgDH8743B9L7RLAjjRlUIREJzfSTpBuuEhVb_svQi5GPizC6tATxlpqcmWeEk5KKW6zE&usqp=CAU"
          style={{ backgroundColor: "white" }}
        />
      </div>
    </div>
  );
};

export default Home;
