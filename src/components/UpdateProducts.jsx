import React from 'react'
const UpdateProducts = (props) => {
  return (
    <button className = "btn btn-light" onClick = {props.update}>
      Edit      
    </button>
  )
}

// Header.defaultProps = {
//     title: "Task Tracker",
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default UpdateProducts
