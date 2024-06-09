import { useForm } from "react-hook-form";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import toast from "react-hot-toast";

import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import useAuth from "../../../CustomHook/useAuth";
import TimeInput from "react-time-picker/dist/TimeInput";
import { Helmet } from "react-helmet";
const Announcement = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  // console.log(user);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    setIsLoading(!isLoading);

    const addRoom = {
      name: user.displayName,
      PostTitle: data.PostTitle,
      image: user.photoURL,
      description: data.description,
    };
    console.log(addRoom, "24");

    const room = await axiosPublic.post("/announce", addRoom);

    if (room.data.insertedId) {
      reset();
      toast.success("Your Post Has Successful");
      setIsLoading(false);
    }
  };
  return (
    <div className="averia-serif lg:mx-10 ">
      <Helmet>
        <title>Talk Town || Announcement</title>
      </Helmet>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Author name & email */}
          <div className="flex items-center gap-6 my-4">
            {/* name */}
            <div className="form-control w-full my-3">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                placeholder="Author Name"
                defaultValue={user?.displayName}
                readOnly
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                placeholder="Post Title"
                {...register("PostTitle", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Room Image And Booking Date */}
          <div className="flex gap-6 my-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered h-24"
                placeholder="description"
              ></textarea>
            </div>
          </div>

          <button
            disabled={isLoading}
            className="btn bg-slate-300 text-orange-500 font-bold text-lg w-full mt-4 "
          >
            {isLoading ? (
              <span className="flex gap-1">
                <ImSpinner6 className="text-2xl text-orange-500 animate-spin" />
                <p className="text-base text-gray-600">Loading...</p>
              </span>
            ) : (
              "Add Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Announcement;
