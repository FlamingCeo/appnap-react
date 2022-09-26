import React from 'react'
const DeleteProducts = (props) => {
  return (
    <button className = "btn btn-danger"onClick = {props.delete}>
      Delete      
    </button>
  )
}

// Header.defaultProps = {
//     title: "Task Tracker",
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default DeleteProducts
