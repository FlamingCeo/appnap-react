import React from 'react'
const CreateProducts = (props) => {
  return (
    <button className ="btn" onClick = {props.create}>
      Create      
    </button>
  )
}

export default CreateProducts
