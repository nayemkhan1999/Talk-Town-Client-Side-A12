import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import useAuth from "../CustomHook/useAuth";

const imagePostKey = import.meta.env.VITE_IMG_ADD_POST_KEY;
const imagePostApi = `https://api.imgbb.com/1/upload?key=${imagePostKey}`;
const AddPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(!isLoading);
    console.log(data);

    // image upload to imgbb and then get an url
    const fileImg = { image: data.image[0] };
    console.log(fileImg);
    const res = await axiosPublic.post(imagePostApi, fileImg, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    reset();
    console.log(res);
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const addRoom = {
        name: data.name,
        email: user.email,
        Tags: data.Tags,
        PostTitle: data.PostTitle,
        authorImage: data.authorImage,
        description: data.description,
        UpVote: data.UpVote,
        DownVote: data.DownVote,
        date: data.date,
      };
      console.log(addRoom);
      //
      const room = await axiosPublic.post("/addedPost", addRoom);
      console.log(room.data);
      if (room.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you! Your room is added successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="lg:mx-10 mx-2 averia-serif">
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
                <span className="label-text">Select your Tag</span>
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
            {/* Image */}
            <div className="form-control  w-full  ">
              <label className="label">
                <span className="label-text">Author Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="file-input w-full max-w-xs"
              />
            </div>
            {/* Booking Date */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Dates & Time</span>
              </label>
              <input
                type="date"
                placeholder="Date & Time"
                {...register("date", { required: true })}
                className="input input-bordered w-full  text-[#d8b15d]"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="description"
            ></textarea>
          </div>
          <button
            // onClick={handleClick}
            // disabled={isLoading}
            className="btn bg-slate-300 text-orange-500 font-bold text-lg w-full mt-4 "
          >
            {isLoading ? (
              <ImSpinner6 className="animate-spin text-3xl text-orange-500" />
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
