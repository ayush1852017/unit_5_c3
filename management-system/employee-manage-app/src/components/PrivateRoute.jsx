import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return !token ? <Navigate to='/login' /> : children;
};
