import React from "react";
import { useState } from "react";
import AlertBox from "./messages/AlertBox";

const axios = require("axios");
const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmedPassword] = useState("");
  const [showAlert, setAlert] = useState(false);
  const [responseBlock, setResponse] = useState("");

  const submitForm = () => {

    if (!email || !password || !password_confirmation) {
      alert("please complete the form");
    } else if (password != password_confirmation) {
      alert("Password does not match");
    } else {
      var data = {
        email,
        password,
        password_confirmation,
      };
      axios
        .post("http://127.0.0.1:8000/api/register", data)
        .then(function (response) {
          console.log(response);
          setEmail("");
          setPassword("");
          setAlert(true)
          setResponse(response.data)
        })
        .catch(function (error) {
          console.log(error);
          error.response.data["typeOf"] = "login"

          setAlert(true)
          setResponse(error.response)
        });
    }
  };
  return (
    <div className="m-5">
      {
        showAlert? <AlertBox block = {responseBlock}/>:""
        
      }
      <div>
        Email:{" "}
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        Password:{" "}
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        Retype Password:{" "}
        <input
          className="form-control"
          type="password"
          value={password_confirmation}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-light m-2" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
};

export default Registration;
