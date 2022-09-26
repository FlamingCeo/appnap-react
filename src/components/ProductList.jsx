import React from 'react'
import Table from 'react-bootstrap/Table';
import UpdateProducts from './UpdateProducts'
import DeleteProducts from './DeleteProducts'
const ProductList = (props) => {
    const updateProd=()=>{
        alert("u")
      }
      const deleteProd=()=>{
        alert("d")
      }
  return (

    <Table striped bordered hover>
        <tbody>
<tr>
  <td>1</td>
  <td>MANGO BAR</td>
  <td>200</td>
  <td>300</td>

  <td>       
    <UpdateProducts
      update = {updateProd}
    />
</td>
<td>       
    <DeleteProducts
      delete = {deleteProd}
    />
</td>  
</tr>

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



