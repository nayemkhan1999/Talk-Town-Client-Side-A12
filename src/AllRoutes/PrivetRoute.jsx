import { Navigate, useLocation, useNavigate } from "react-router-dom";
import loadingImg from "../../src/assets/54906-loading-animation-bored-hand.gif";
import useAuth from "../CustomHook/useAuth";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <img className=" mx-auto pt-20 " src={loadingImg} alt="" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
