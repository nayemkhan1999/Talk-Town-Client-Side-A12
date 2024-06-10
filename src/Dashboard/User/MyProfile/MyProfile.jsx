import { Helmet } from "react-helmet";
import useAuth from "../../../CustomHook/useAuth";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { LuBadgeDollarSign } from "react-icons/lu";
import { useEffect, useState } from "react";
import { SlDislike, SlLike } from "react-icons/sl";
import { IoMdPricetags } from "react-icons/io";

const MyProfile = () => {
  const { user } = useAuth();
  const [topThreePosts, setTopThreePosts] = useState([]);
  const axiosPublic = useAxiosPublic();

  const { refetch, data: profile = [] } = useQuery({
    queryKey: ["userprofle"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/userProfile/${user?.email}`, {
        withCredentials: true,
      });
      return result?.data;
    },
  });

  useEffect(() => {
    axiosPublic
      .get(`/userPost/${user?.email}`, {
        withCredentials: true,
      })
      .then((result) => {
        const sortedPosts = result.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        const topThree = sortedPosts.slice(0, 3);
        setTopThreePosts(topThree);
      });
  }, [axiosPublic, user?.email]);

  return (
    <div>
      <Helmet>
        <title>Talk Town || My Profile</title>
      </Helmet>

      <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 shadow-lg rounded-lg border mx-auto mt-8">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={profile.length > 0 && profile[0].image}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">
              {profile.length > 0 && profile[0].name}
            </h2>
            <span className="text-sm dark:text-gray-600 font-bold flex items-center gap-1">
              <LuBadgeDollarSign className="text-orange-400" size={20} />
              {profile.length > 0 && profile[0].badge}
            </span>
            <h1 className="text-sm dark:text-gray-600 font-bold mt-3">
              Role: {profile.length > 0 && profile[0].role}
            </h1>
          </div>

          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-600">
                {profile.length > 0 && profile[0].email}
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Phonenumber"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                ></path>
              </svg>
              <span className="dark:text-gray-600">+25 381 77 983</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 averia-serif lg:mx-10 ">
        <h2 className="text-2xl font-semibold text-center mb-5">Top 3 Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 mt-5">
          {topThreePosts.map((post, index) => (
            <div key={index} className="">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src={post.image}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-base font-semibold"
                    >
                      {post.name}
                    </a>
                    <span className="text-xs dark:text-gray-600 font-bold">
                      {post.date} Post Time
                    </span>
                  </div>
                  <div className="flex items-center ml-20">
                    <IoMdPricetags />
                    {post.Tags}
                  </div>
                </div>

                <div className="flex flex-col space-y-1"></div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="space-y-1 mt-2">
                  <span className="text-gray-500  text-sm">
                    {post.description}
                  </span>
                </div>

                {/* ========03======== */}
                <div className="flex items-center gap-5">
                  <span className="text-sm dark:text-gray-600 flex items-center">
                    <SlLike />
                    UpVotes: {post.UpVote}
                  </span>
                  <span className="text-sm dark:text-gray-600 flex items-center">
                    <SlDislike />
                    DownVotes: {post.DownVote}
                  </span>
                </div>
              </div>
              {/* ========01======== */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
