import { FaComment, FaHashtag, FaShareAlt } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { SlDislike, SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CategoriesPost = ({ card }) => {
  const { name, Tags, image, PostTitle, description, date, UpVote, DownVote } =
    card;
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.comment);

    axiosPublic.post("/userComment", data).then((result) => {
      console.log(result.data);
    });
    toast.success("Your Comment Successful");
    reset();
  };

  return (
    <div>
      <div className="flex flex-col max-w-lg lg:h-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4 justify-between">
          <div className="flex gap-3">
            <img
              alt=""
              src={image}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {name}
              </a>
              <span className="text-xs dark:text-gray-600 font-bold">
                {date} Post Time
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <IoMdPricetags />
            {Tags}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="mb-1 text-md font-semibold">{PostTitle}</h2>
        </div>
        <p className="text-sm dark:text-gray-600">{description}...</p>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button className="btn bg-gray-300 shadow-xl">
              <FaShareAlt />
              Share
            </button>
            <Link to="activities">
              <button className="btn bg-gray-300 shadow-xl">
                <FaComment />
                Comment
              </button>
            </Link>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <SlDislike />
              <span>{DownVote}</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <SlLike />
              <span>{UpVote}</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="input flex items-center gap-2 ">
            <input
              type="text"
              name="comment"
              className="w-full py-0.5 dark:bg- border-none rounded text-sm pl-0 dark:text-gray-800"
              placeholder="Add a comment..."
              {...register("comment")}
            />
            <button>
              <FaCircleArrowUp size={20} />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default CategoriesPost;
