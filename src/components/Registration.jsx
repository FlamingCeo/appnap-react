import React from 'react'
import {useState} from 'react';
const Login = (props) => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmedPassword,setConfirmedPassword] = useState('')

    const submitForm = () =>{
        if(!email||!password||!confirmedPassword){
            alert("please complete the form")
        }

        if(password!=confirmedPassword){
            alert("Password does not match")
        }

      //  props.login({name,price,category})
        setEmail('')
        setPassword('')
    }
  return (
    <div>
        <div>Email: <input className = "form-control" value = {email} onChange = {(e) =>setEmail(e.target.value)}/></div>
        <div>Password: <input className = "form-control" type = "password" value = {password} onChange = {(e) =>setPassword(e.target.value)}/></div>
        <div>Retype Password: <input className = "form-control" type = "password" value = {confirmedPassword} onChange = {(e) =>setConfirmedPassword(e.target.value)}/></div>
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

export default Login
