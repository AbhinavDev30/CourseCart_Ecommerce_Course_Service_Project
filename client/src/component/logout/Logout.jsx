import "./logoutcss.css";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/userAuthContext";

function Logout() {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    localStorage.removeItem("isAdmin");
  }, [LogoutUser]);
  return <Navigate to="/login" />;
}

export default Logout;
