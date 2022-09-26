import './App.css';
import NewProducts from './components/NewProducts';
import ProductList from './components/ProductList';
// import Registration from './components/Registration';
const axios = require('axios');



function App() {

  const createProd=()=>{
    alert("c")
  }
  

  const newProduct=(e)=>{
   alert(e.name)
  //  axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  }

  return (
    <div className = "m-5">
      <NewProducts
        newProduct = {newProduct}
      />

       <ProductList
        
       />

    </div>
  );
}

export default App;
