import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../CustomHook/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { space } from "postcss/lib/list";
import { Helmet } from "react-helmet";
const Login = () => {
  const { loginUser, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
 
    //Login User
    loginUser(data?.email, data?.password).then((result) => {
      setLoading(true);
      const user = result.user;
      // console.log(user);
      if (user) {
        toast.success("Login Successful");
      } else {
        toast.error(error.message);
      }
      navigate(location?.state?.from?.pathname || "/");
    });
  };
  return (
    <div className="averia-serif lg:mx-10 ">
      <Helmet>
        <title>Talk Town || Login page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="text-center lg:text-left">
            <img
              className="w-[600px]"
              src="https://3pindustrytest.skyrow.lk/assets/img/login1.gif"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="flex items-center justify-center py-4">
              <h1 className="font-bold lg:text-3xl text-xl text-gray-400 ">
                <span className="text-orange-500 lg:text-4xl font-black">
                  T
                </span>
                alk
                <span className="text-orange-500 lg:text-4xl font-black">
                  T
                </span>
                own
              </h1>
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/128/5529/5529941.png"
                alt=""
                referrerPolicy="no-referrer"
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button
                  disabled={loading}
                  className="btn bg-[#66C1D6] text-white text-xl"
                >
                  {loading ? (
                    <span className="flex gap-1">
                      <TbFidgetSpinner className="text-2xl text-yellow-600 animate-spin" />
                      <p className="text-base text-gray-600">Loading...</p>
                    </span>
                  ) : (
                    "Login"
                  )}
                </button>
                <div className="flex flex-col w-full">
                  <div className="divider divider-neutral">Or Login With</div>
                </div>
                <SocialLogin></SocialLogin>
                <div className="text-center">
                  <Link to="/register">
                    <span>
                      New to
                      <span className="text-orange-500 text-xl font-black ml-1">
                        T
                      </span>
                      own?
                    </span>
                    <span className="text-success  font-bold underline ml-1">
                      Sign up now
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
