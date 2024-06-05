import { useEffect, useState } from "react";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import ShowAllUser from "./ShowAllUser";

const ManageUser = () => {
  const axiosPublic = useAxiosPublic();
  const [manageData, setManageData] = useState([]);

  //=============Admin Role Play================
  useEffect(() => {
    const allUser = async () => {
      const result = await axiosPublic.get("/users");
      setManageData(result.data);
    };
    allUser();
  }, [axiosPublic]);
  console.log(manageData);
  //=============Admin Role Plays================

  return (
    <div className="averia-serif lg:mx-10 ">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User image</th>
              <th>User name</th>
              <th>User email</th>
              <th>Make admin</th>
              <th>Membership</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {manageData.map((hero) => (
              <ShowAllUser key={hero._id} hero={hero}></ShowAllUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;