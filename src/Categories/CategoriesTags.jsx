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

const CategoriesTags = () => {
  return (
    <div className="averia-serif lg:mx-10 mt-2">
      <Tabs>
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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 8</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 9</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 10</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoriesTags;

//
//
//
//
//
//     {
//       label: "Threads",
//       icon: BsThreads,
//       description: "This content is in a spooky Threads!",
//     },
//   ];
