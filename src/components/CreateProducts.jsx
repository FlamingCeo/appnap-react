import React from 'react'
const CreateProducts = (props) => {
  return (
    <button className ="btn" onClick = {props.create}>
      Create      
    </button>
  )
}

// Header.defaultProps = {
//     title: "Task Tracker",
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default CreateProducts
