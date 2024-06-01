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
    googleLogin().then((result) => {
      // console.log(result.user);
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          // console.log(res.data);
        }
        toast.success("Google Login Successful");
        navigate(location?.state || "/");
      });
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
