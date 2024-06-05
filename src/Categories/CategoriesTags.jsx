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
import Pagination from "./Pagination";

const CategoriesTags = () => {
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
  console.log(get);

  //==========================================
  const Share = get.filter((item) => item.Tags === "Share");
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
        <TabList className="border-none space-x-10 mx-auto">
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
            {Share.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Conversations.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Engagement.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Messaging.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Posts.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Comments.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Discussions.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Community.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Topics.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {Threads.map((card) => (
              <CategoriesPost key={card._id} card={card}></CategoriesPost>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      <Pagination></Pagination>
    </div>
  );
};

export default CategoriesTags;
