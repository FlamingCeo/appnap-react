import { Routes, Route, Link, Navigate } from 'react-router-dom';
import user from "./User.js";


const ProtectedRoute = ({  children }) => {
    if (!user.isLoggedIn()) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  export default ProtectedRoute
