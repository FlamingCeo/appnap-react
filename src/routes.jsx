import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './components/Login';
import App from './App';
import ProtectedRoute from './ProtectedRoute';




const RoutesList = () => {
    const [user, setUser] = React.useState(1);

    return (
  

    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/"  element={
            <ProtectedRoute user={user}>
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