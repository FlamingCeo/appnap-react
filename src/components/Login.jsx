import React from "react";
import user from "../User.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "./messages/AlertBox";


const axios = require("axios");

const Login = (props) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setAlert] = useState(false);
  const [responseBlock, setResponse] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("please complete the form");
    }
    const formData = new FormData(e.currentTarget);

    const loginCredentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    //  props.login({name,price,category})
    axios
      .post("http://127.0.0.1:8000/api/login", loginCredentials)
      .then(function (response) {
        console.log(response);
        user.authenticated(response.data);
        window.location.href = "/";
        setAlert(true)
        setResponse(response.data)
      })
      .catch(function (error) {
        console.log(error);
        error.response.data["typeOf"] = "login"

        setAlert(true)
        setResponse(error.response)
      });

    setEmail("");
    setPassword("");
  };
  return (
    
    <div className="m-5">
      {
        showAlert? <AlertBox block = {responseBlock}/>:""
        
      }
      <form onSubmit={submitForm}>
        <div>
          Email:{" "}
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-light m-2">Submit</button>
      </form>
    </div>
  );
};
export default Login;
