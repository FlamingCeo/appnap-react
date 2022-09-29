import { useEffect, useState } from "react";
import "./App.css";
import NewProducts from "./components/NewProducts";
import ProductList from "./components/ProductList";
import AlertBox from "./components/messages/AlertBox";

// import Registration from './components/Registration';
const axios = require("axios");

function App() {
  var [updateMode, setUpdateMode] = useState(false);
  var [updateList, setUpdateList] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [showAlert, setAlert] = useState(false);
  const [responseBlock, setResponse] = useState("");
  var token = localStorage.getItem('token');
  var headers = {
    'Authorization': "Bearer " + token
  }



  var [list, setList] = useState([]);
  useEffect(() => {
    listProd();
    // Update the document title using the browser API
  }, []);

  const createProd = () => {
   //alert("c");
  };
  const editProd = async (e) => {
    var id = await parseInt(
      e.currentTarget.parentNode.parentNode.getAttribute("id")
    );
    var data = await list.filter((item) => item.id == id);
    //console.log(data);
    setUpdateList(data);

    setName(data[0]["name"]);
    setPrice(data[0]["price"]);
    setCategory(data[0]["category"]);
    setUpdateMode(true);
  };

  const listProd = () => {
    var URL = 'http://127.0.0.1:8000/api/list-prod';
    var token = localStorage.getItem('token');
    var headers = {
      'Authorization': "Bearer " + token
    }
    // axios
    //   .get("http://127.0.0.1:8000/api/list-prod")
      axios(URL, {
        method: 'get',
        headers: headers
     
      })
      .then(function (response) {
        // handle success
        setList(response.data["data"]);

        //console.log(response);
        // setResponse(response)
        

      })
      .catch(function (error) {



      })
      .then(function () {
        // always executed
          setTimeout(() => {
            setAlert(false)
          }, 3000);

      });
  };
  const newProduct = (e) => {
    var data = e;
    var url = "http://127.0.0.1:8000/api/create-prod";
    if (updateMode) {
      url = "http://127.0.0.1:8000/api/update-prod";
    }

    // axios
    //   .get("http://127.0.0.1:8000/api/list-prod")
     return axios(url, {
        method: 'post',
        headers: headers,
        data: e,

     
      })
    // return axios
    //   .post(url, e)
      .then(function (response) {
        //console.log(response);
        setAlert(true)
        setResponse(response.data)
        console.log(response.data)
        listProd();
        if (updateMode) {
          setUpdateMode(false);
          setUpdateList([]);
        }
        restart();


      })
      .catch(function (error) {
        // return error;
        //console.log(error);
        setAlert(true)
        setResponse(error.response)


      })
      .then(function (){
        setTimeout(() => {
          setAlert(false)
        }, 4000);
      })
  };


  const deleteProd = (e) => {
    var id = parseInt(e.currentTarget.parentNode.parentNode.getAttribute("id"));
    var data = {
      id: id,
    };
    var url = "http://127.0.0.1:8000/api/delete-prod"
    return axios(url, {
      method: 'post',
      headers: headers,
      data: data,

   
    })
    // axios
    //   .post("http://127.0.0.1:8000/api/delete-prod", data)
      .then(function (response) {
        console.log(response);
        setAlert(true)
        setResponse(response.data)
        listProd();
      })
 
      .catch(function (error) {
        //console.log(error);
        setAlert(true)
        setResponse(error.response.data)
      })

    
  };

  const restart = () => {
    setName("");
    setCategory("");
    setPrice("");
  };

  const cancelForm = (e) => {
    setUpdateList([]);
    setUpdateMode(false);
    restart();
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !price || !category) {
     //alert("please complete the form");
    }
    var block = "";
    if (updateMode) {
     //alert("yeah");
      var id = updateList[0].id;
      newProduct({ id, name, price, category });
    } else {
      newProduct({ name, price, category });
    }
  };

  return (
    
    <div className="m-5">
      {
        showAlert? <AlertBox block = {responseBlock}/>:""
        
      }
      <NewProducts
        newProduct={newProduct}
        updateMode={updateMode}
        updateList={updateList}
        cancelForm={cancelForm}
        name={name}
        price={price}
        category={category}
        submitForm={submitForm}
        setName={setName}
        setPrice={setPrice}
        setCategory={setCategory}
      />

      <ProductList
        list={list}
        deleteProd={deleteProd}
        editProd={editProd}
      />
    </div>
  );
}

export default App;
