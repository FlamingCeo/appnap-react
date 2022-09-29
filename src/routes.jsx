import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import App from './App';
import ProtectedRoute from './ProtectedRoute';




const RoutesList = () => {

    return (
  

    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>

        <Route path="/"  element={
            <ProtectedRoute >
              <App />
            </ProtectedRoute>
          }/>


         {/* <Route path="/products">
            <App />
        </Route> */}
        </Routes>  
    </BrowserRouter>
    )
  }

  export default RoutesList;