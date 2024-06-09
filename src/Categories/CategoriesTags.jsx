import { BsThreads } from "react-icons/bs";
import { CgArrowTopRight, CgCommunity } from "react-icons/cg";
import {
  FaComment,
  FaConnectdevelop,
  FaDiscourse,
  FaShare,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import { TbHttpPost } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import CategoriesPost from "./CategoriesPost";

const CategoriesTags = ({ saveData }) => {
  const axiosPublic = useAxiosPublic();
  // eslint-disable-next-line no-unused-vars
  const [get, setGet] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  //===================State of Pagination End=====================
  useEffect(() => {
    axiosPublic.get("/allPost").then((res) => {
      setGet(res.data.posts);
      setTotalPosts(res.data.totalPosts);
    });
  }, [axiosPublic]);

  // Share
  const Share = get.filter((item) => item.Tags === "Share");
  // paginaton satart hare
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = Share.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(Share.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // pagination end
  const randomData = get.filter((item) => item.Tags === saveData);

  //==========================================

  const Conversations = get.filter((item) => item.Tags === "Conversations");
  const Engagement = get.filter((item) => item.Tags === "Engagement");
  const Messaging = get.filter((item) => item.Tags === "Messaging");
  const Posts = get.filter((item) => item.Tags === "Posts");
  const Comments = get.filter((item) => item.Tags === "Comments");
  const Discussions = get.filter((item) => item.Tags === "Discussions");
  const Community = get.filter((item) => item.Tags === "Community");
  const Topics = get.filter((item) => item.Tags === "Topics");
  const Threads = get.filter((item) => item.Tags === "Threads");
  //==========================================
  return (
    <div className="averia-serif lg:mx-10 mt-2">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="border-none  space-x-10 mx-auto flex overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden   w-full">
          <Tab>
            <div>
              <FaShare size={24} className=" mx-auto" />
              <span className="text-xs">Share</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <FaConnectdevelop size={24} className=" mx-auto" />
              <span className="text-xs">Conversations</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <RiEnglishInput size={24} className=" mx-auto" />
              <span className="text-xs">Engagement</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <FaMessage size={24} className=" mx-auto" />
              <span className="text-xs">Messaging</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <TbHttpPost size={24} className=" mx-auto" />
              <span className="text-xs">Posts</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <FaComment size={24} className=" mx-auto" />
              <span className="text-xs">Comments</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <FaDiscourse size={24} className=" mx-auto" />
              <span className="text-xs">Discussions</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <CgCommunity size={24} className=" mx-auto" />
              <span className="text-xs">Community</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <CgArrowTopRight size={24} className=" mx-auto" />
              <span className="text-xs">Topics</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <BsThreads size={24} className=" mx-auto" />
              <span className="text-xs">Threads</span>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : currentUsers.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
          <div>
            <div className="flex justify-center mt-4">
              <div className="flex">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600 ${
                    currentPage === 1 && "cursor-not-allowed"
                  }`}
                  disabled={currentPage === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                      currentPage === index + 1 && "bg-blue-500 text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  className={`flex items-center justify-center px-4 py-2 mx-1 text-blue-500 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                    currentPage === totalPages && "cursor-not-allowed"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 010 1.414l-4 4a1 1 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
                        
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Conversations.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
          <div>
            <div className="flex justify-center mt-4">
              <div className="flex">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600 ${
                    currentPage === 1 && "cursor-not-allowed"
                  }`}
                  disabled={currentPage === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                      currentPage === index + 1 && "bg-blue-500 text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  className={`flex items-center justify-center px-4 py-2 mx-1 text-blue-500 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                    currentPage === totalPages && "cursor-not-allowed"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 010 1.414l-4 4a1 1 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
                        
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Engagement.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
          <div>
            <div className="flex justify-center mt-4">
              <div className="flex">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600 ${
                    currentPage === 1 && "cursor-not-allowed"
                  }`}
                  disabled={currentPage === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                      currentPage === index + 1 && "bg-blue-500 text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  className={`flex items-center justify-center px-4 py-2 mx-1 text-blue-500 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                    currentPage === totalPages && "cursor-not-allowed"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 010 1.414l-4 4a1 1 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
                        
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Messaging.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Posts.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Comments.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Discussions.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Community.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Topics.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {saveData
              ? randomData.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))
              : Threads.map((card) => (
                  <CategoriesPost key={card._id} card={card}></CategoriesPost>
                ))}
          </div>
        </TabPanel>
      </Tabs>
      {/* ===============Pagination Start hare============ */}

      {/* ===============Pagination End hare============ */}
    </div>
  );
};

export default CategoriesTags;
