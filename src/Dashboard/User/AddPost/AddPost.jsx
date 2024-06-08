import { useForm } from "react-hook-form";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import toast from "react-hot-toast";

import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import useAuth from "../../../CustomHook/useAuth";
import TimeInput from "react-time-picker/dist/TimeInput";
import { Helmet } from "react-helmet";

const AddPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  // console.log(user);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    setIsLoading(!isLoading);

    const addRoom = {
      name: user.displayName,
      email: user.email,
      Tags: data.Tags,
      PostTitle: data.PostTitle,
      image: user.photoURL,
      description: data.description,
      UpVote: data.UpVote,
      DownVote: data.DownVote,
      date: data.date,
    };

    const room = await axiosPublic.post("/addedPost", addRoom);

    if (room.data.insertedId) {
      reset();
      toast.success("Your Post Has Successful");
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:mx-10 mx-2 averia-serif">
      <Helmet>
        <title>Talk Town || Add Post</title>
      </Helmet>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Author name & email */}
          <div className="flex gap-6 my-4">
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
            {/* email */}
            <div className="form-control w-full my-3">
              <label className="label">
                <span className="label-text">Author Email</span>
              </label>
              <input
                type="email"
                placeholder="Author Name"
                defaultValue={user?.email}
                readOnly
                {...register("email", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Select your Tag & Post Title*/}
          <div className="flex gap-6 my-4">
            {/* Select your Tag */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Select Tag</span>
              </label>

              <select
                defaultValue="Available"
                {...register("Tags", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="Available">
                  Enter Your post tag
                </option>
                <option value="Share">Share</option>
                <option value="Conversations">Conversations</option>
                <option value="Engagement">Engagement</option>
                <option value="Messaging">Messaging</option>
                <option value="Posts">Posts</option>
                <option value="Comments">Comments</option>
                <option value="Discussions">Discussions</option>
                <option value="Community">Community</option>
                <option value="Topics">Topics</option>
                <option value="Threads">Threads</option>
              </select>
            </div>
            {/* price */}
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
          {/* UpVote And  DownVote */}
          <div className="flex gap-6 my-4">
            {/* UpVote */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">UpVote</span>
              </label>
              <input
                type="number"
                defaultValue={"0"}
                placeholder="UpVote"
                {...register("UpVote", { required: true })}
                className="input input-bordered w-full"
              ></input>
            </div>
            {/*  DownVote */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">DownVote</span>
              </label>
              <input
                type="number"
                defaultValue={"0"}
                placeholder="Special Offers"
                {...register("DownVote", { required: true })}
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
            {/* Booking Date */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Post Time</span>
              </label>
              <input
                placeholder="Date & Time"
                defaultValue={TimeInput}
                {...register("date", { required: true })}
                aria-label="Time"
                type="time"
                className="input input-bordered w-full  text-black font-bold"
              />
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

export default AddPost;
