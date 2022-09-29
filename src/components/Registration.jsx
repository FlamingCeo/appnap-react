import React from 'react'
import {useState} from 'react';
const axios = require('axios');
const Registration = (props) => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[password_confirmation,setConfirmedPassword] = useState('')

    const submitForm = () =>{
        if(!email||!password||!password_confirmation){
            alert("please complete the form")
        }
        else if(password!=password_confirmation){
            alert("Password does not match")
        }
        else{

          var data = {
            email,password,password_confirmation
          }
           axios.post('http://127.0.0.1:8000/api/register',data )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
          setEmail('')
          setPassword('')

        }

       
    }
  return (
    <div>
        <div>Email: <input className = "form-control" value = {email} onChange = {(e) =>setEmail(e.target.value)}/></div>
        <div>Password: <input className = "form-control" type = "password" value = {password} onChange = {(e) =>setPassword(e.target.value)}/></div>
        <div>Retype Password: <input className = "form-control" type = "password" value = {password_confirmation} onChange = {(e) =>setConfirmedPassword(e.target.value)}/></div>
        <button className = "btn btn-light m-2" onClick = {submitForm}>
              Submit  
        </button>               
    </div>
  )
}

// Header.defaultProps = {
//     title: "Task Tracker",
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default Registration
