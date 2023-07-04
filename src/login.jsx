import React from "react";

const Login = () => {
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
        <h1 className="text-center mt-5 bg-dark text-light">Login Page</h1>
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
          src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg"
          style={{ backgroundColor: "white", height: "350px", width: "450px" }}
        />
      </div>
    </div>
  );
};

export default Login;
