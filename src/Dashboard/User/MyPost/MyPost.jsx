import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import ShowMyPost from "./ShowMyPost";
import useAuth from "../../../CustomHook/useAuth";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";

const MyPost = () => {
  const axiosPublic = useAxiosPublic();

  const { user } = useAuth();

  const { refetch, data: MyData = [] } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/allPost/${user?.email}`, {
        withCredentials: true,
      });
      return result?.data;
    },
  });
  console.log(MyData);
  return (
    <div>
      <Helmet>
        <title>Talk Town || My post</title>
      </Helmet>
      <div className="overflow-x-auto mt-5">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>Post Title</th>
              <th>Number of votes</th>
              <th>Comment Button</th>
              <th>Delete Button</th>
            </tr>
          </thead>
          <tbody>
            {MyData.map((Fz) => (
              <ShowMyPost key={Fz._id} Fz={Fz} refetch={refetch}></ShowMyPost>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
