import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import { comment } from "postcss";
import { FaCommentMedical } from "react-icons/fa";
import ShowActivities from "./ShowActivities";

const Activities = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: commentData = [] } = useQuery({
    queryKey: ["userComment"],
    queryFn: async () => {
      const result = await axiosPublic.get("/allComment", {
        withCredentials: true,
      });
      return result.data;
    },
  });
  console.log(commentData);
  return (
    <div className="averia-serif lg:mx-10 ">
      <Helmet>
        <title>Talk Town || Activities</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Comments</th>
              <th>feedback</th>
              <th>Report</th>
              <th></th>
            </tr>
          </thead>
          {commentData.map((TVS) => (
            <ShowActivities key={TVS._id} TVS={TVS}></ShowActivities>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Activities;
