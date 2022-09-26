import React from 'react'
import {useState} from 'react';
const NewProducts = (props) => {
    const[name,setName] = useState('')
    const[price,setPrice] = useState('')
    const[category,setCategory] = useState('')

    const submitForm = () =>{
        if(!name||!price||!category){
            alert("please complete the form")
        }

        props.newProduct({name,price,category})
        setName('')
        setPrice('')
        setCategory('')
    }
  return (
    <div>
        <div>Name: <input className = "form-control" value={name} onChange = {(e) =>setName(e.target.value)}/></div>
        <div>Price: <input className = "form-control" value = {price} onChange = {(e) =>setPrice(e.target.value)}/></div>
        <div>Category: <input className = "form-control" value = {category} onChange = {(e) =>setCategory(e.target.value)}/></div>
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

export default NewProducts
