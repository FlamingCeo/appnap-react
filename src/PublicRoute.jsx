import { Routes, Route, Link, Navigate } from 'react-router-dom';
import user from "./User.js";


const PublicRoute = ({  children }) => {
    if (user.isLoggedIn()) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };
  export default PublicRoute
