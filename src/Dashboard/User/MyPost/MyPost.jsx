import { useEffect, useState } from "react";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import ShowMyPost from "./ShowMyPost";
import useAuth from "../../../CustomHook/useAuth";

const MyPost = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosPublic.get(`/allPost/${user?.email}`).then((res) => {
      setData(res.data);
    });
  }, [axiosPublic, user?.email]);
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Post Title</th>
              <th>Number of votes</th>
              <th>Comment Button</th>
              <th>Delete Button</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Fz) => (
              <ShowMyPost key={Fz._id} Fz={Fz}></ShowMyPost>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
