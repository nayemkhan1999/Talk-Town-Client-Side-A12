import { FaComment, FaHashtag, FaShareAlt } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { SlDislike, SlLike } from "react-icons/sl";

const CategoriesPost = ({ card }) => {
  const { name, Tags, image, PostTitle, description, date, UpVote, DownVote } =
    card;
  return (
    <div>
      <div className="flex flex-col max-w-lg lg:h-96 p-6 space-y-6 overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800">
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
            <button className="btn bg-gray-300 shadow-xl">
              <FaComment />
              Comment
            </button>
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
      </div>
    </div>
  );
};

export default CategoriesPost;
