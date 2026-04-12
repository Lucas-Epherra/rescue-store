import { Navigate, useLocation } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useLoginContext();
  const location = useLocation();

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;