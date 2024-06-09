import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import ShowAllData from "./ShowAllData";

const ShowAnnouncement = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: ShowData = [] } = useQuery({
    queryKey: ["showData"],
    queryFn: async () => {
      const result = await axiosPublic.get("/announce", {
        withCredentials: true,
      });
      return result.data;
    },
  });

  return (
    <div className="averia-serif lg:mx-10 mt-16 ">
      <h1 className="text-center lg:text-5xl text-2xl font-bold tracking-wide">
        <span className="text-gray-500 font-black">Show</span>
        <span className="text-orange-500"> A</span>nnounce
        <span className="text-orange-500">M</span>ent
      </h1>

      {ShowData.map((AD) => (
        <ShowAllData key={AD._id} AD={AD}></ShowAllData>
      ))}
    </div>
  );
};

export default ShowAnnouncement;
