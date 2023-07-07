import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [is_superuser, setIssuperuser] = useState(true);

  async function doSubmit(e) {
    e.preventDefault();
    console.log("Submit");
    const resp = await axios.post("http://0.0.0.0:8000/register/", {
      username: name,
      password: password,
      is_superuser: is_superuser,
    });

    console.log(resp.status);
    console.log(resp.status);
    if (resp.status === 200) {
      console.log("Success");
    } else {
      console.log("Error", resp.status);
    }
  }
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
        <h1 className="text-center mt-5 bg-dark text-light">Register</h1>
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
          src="https://www.allen.ac.in/apps2223/assets/images/reset-password.jpg"
          alt="Register"
          style={{ backgroundColor: "white", height: "350px", width: "450px" }}
        />
      </div>
      <div className="col-5 justify-content-center text-center">
        <form action="" className="form-group">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="form-control my-3"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => doSubmit(e)}
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
