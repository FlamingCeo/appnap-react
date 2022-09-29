import React,{ useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import UpdateProducts from './UpdateProducts'
import DeleteProducts from './DeleteProducts'
const axios = require('axios');


const ProductList = (props) => {




  return (


    <Table striped bordered hover>
        <tbody>

          {
            props.list.map((data, i)=>{
              return(
              <tr id = {data.id}>
              <td>{i+1}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.category}</td>
            
              <td>       
                <UpdateProducts
                  update = {props.editProd}
                />
            </td>
            <td>       
                <DeleteProducts
                  delete = {props.deleteProd}
                />
            </td>  
            </tr>
              )
            })
          }

</tbody>   

</Table>

  )
}

// Header.defaultProps = {
//     title: "Task Tracker",
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default ProductList



