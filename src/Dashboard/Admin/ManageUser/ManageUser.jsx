import { useEffect, useState } from "react";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import ShowAllUser from "./ShowAllUser";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
  const axiosPublic = useAxiosPublic();
  // const [manageData, setManageData] = useState([]);

  //=============Admin Role Play================
  // useEffect(() => {
  //   const allUser = async () => {
  //     const result = await axiosPublic.get("/users");
  //     setManageData(result.data);
  //   };
  //   allUser();
  // }, [axiosPublic]);

  // =========================TensTack Query Using=========================

  const { refetch, data: manageData = [] } = useQuery({
    queryKey: ["manageData"],
    queryFn: async () => {
      const result = await axiosPublic.get("/users", {
        withCredentials: true,
      });
      return result?.data;
    },
  });
  console.log(manageData);

  //=============Admin Role Plays================

  return (
    <div className="averia-serif lg:mx-10 ">
      <Helmet>
        <title>Talk Town || Manage User</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User image</th>
              <th>User name</th>
              <th>User email</th>
              <th>Role</th>
              <th>Make admin</th>
              <th>Membership</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {manageData.map((hero) => (
              <ShowAllUser
                key={hero._id}
                hero={hero}
                refetch={refetch}
              ></ShowAllUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
