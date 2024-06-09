import { Navigate, useLocation } from "react-router-dom";
import loadingImg from "../../src/assets/54906-loading-animation-bored-hand.gif";
import useAuth from "../CustomHook/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <img className="mx-auto w-[100vh]" src={loadingImg} alt="" />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivetRoute;
