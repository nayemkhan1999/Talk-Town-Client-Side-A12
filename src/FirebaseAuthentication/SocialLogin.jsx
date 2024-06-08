import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../CustomHook/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  //Google Login User
  const handleSocialUser = () => {
    googleLogin().then(async (result) => {
      //=============Admin Role Play================
      const role = "User";
      const email = result.user.email;
      const name = result.user.displayName;
      const image = result.user.photoURL;
      const allUser = { role, email, name, image };

      const results = await axiosPublic.post("/users", allUser, {
        withCredentials: true,
      });

      toast.success("Google Login Successful");
      navigate(location?.state || "/");

      //=============Admin Role Play================
    });
  };

  return (
    <div>
      <button
        onClick={() => handleSocialUser(googleLogin)}
        className="btn bg-gray-600 text-white font-semibold w-full"
      >
        Continue With
        <FaGoogle className="text-[20px] text-yellow-600 " />
      </button>
    </div>
  );
};

export default SocialLogin;
