import { useEffect, useState } from "react";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import ShowMyPost from "./ShowMyPost";
import useAuth from "../../../CustomHook/useAuth";

const MyPost = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosPublic.get(`/allPost/${user.email}`).then((res) => {
      setData(res.data);
    });
  }, [axiosPublic, user.email]);
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((Fz) => (
          <ShowMyPost key={Fz._id} Fz={Fz}></ShowMyPost>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
