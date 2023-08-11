import React from "react";
import { Route, Navigate } from "react-router-dom";

export default ProtectedRoute = ({
  element: Element,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};
