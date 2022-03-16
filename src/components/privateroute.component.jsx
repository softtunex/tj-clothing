import React from "react";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children, ...props }) => {
    return !props.currentUser ? children : <Navigate to="/" />;
  };

export default PrivateRoutes;