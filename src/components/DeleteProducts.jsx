import React from 'react'
const DeleteProducts = (props) => {
  return (
    <button className = "btn btn-danger"onClick = {props.delete}>
      Delete      
    </button>
  )
}

export default DeleteProducts
