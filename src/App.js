import './App.css';
import NewProducts from './components/NewProducts';
import ProductList from './components/ProductList';
// import Registration from './components/Registration';



function App() {

  const createProd=()=>{
    alert("c")
  }
  

  const newProduct=(e)=>{
   alert(e.name)
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
