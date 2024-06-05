import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../CustomHook/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import SocialLogin from "./SocialLogin";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { user, createUser, UserUpdateProfile, loading, setLoading } =
    useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    createUser(data.email, data.password).then(async (result) => {
      setLoading(true);
      // image upload to imgbb and then get an url
      const fileImg = { image: data.image[0] };
      console.log(fileImg);
      const res = await axiosPublic.post(image_hosting_api, fileImg, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(res);

      const registerUser = result.user;
      const imagePhoto = res.data.data.display_url;
      console.log(imagePhoto);

      UserUpdateProfile(data.name, imagePhoto)
        .then(async () => {
          setLoading(true);
          //=============Admin Role Play================
          const role = "User";
          const email = data.email;
          const name = data.name;
          const image = imagePhoto;
          const allUser = { role, email, name, image };
          console.log(name, email, "50 number line");
          const results = await axiosPublic.post("/users", allUser, {
            withCredentials: true,
          });
          console.log(results.data);

          //=============Admin Role Plays================
          navigate(from);
          toast.success("Register Successful");
          reset();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="averia-serif lg:mx-10 ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left">
            <img
              className="w-[600px]"
              src="https://global.discourse-cdn.com/business7/uploads/glideapps/original/3X/1/f/1f9763d2fcb4960ff7f2ab6b52cb64d8b5094416.gif"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center pt-5 text-xl font-bold text-gray-400">
              <span className="text-[#C98BD2] text-4xl font-black">S</span>ign
              up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600 text-xs font-semibold">
                    Please type your name
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600 text-xs font-semibold">
                    Please type your email address
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input  w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600 text-xs font-semibold">
                    Please type your strong password
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <button
                disabled={loading}
                className="btn bg-[#C98BD2] text-white text-lg font-bold"
              >
                {loading ? (
                  <span className="flex gap-1">
                    <TbFidgetSpinner className="text-2xl text-yellow-600 animate-spin" />
                    <p className="text-base text-gray-600">Loading...</p>
                  </span>
                ) : (
                  " Sign up now"
                )}
              </button>
              <SocialLogin></SocialLogin>
              <div className="text-center">
                <Link to="/login">
                  <span className="text-base">Already a member </span>
                  <span className="text-success font-bold underline ">
                    Login now
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
