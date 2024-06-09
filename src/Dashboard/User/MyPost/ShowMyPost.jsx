import { AiOutlineComment } from "react-icons/ai";
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import { Link } from "react-router-dom";

const ShowMyPost = ({ Fz, refetch }) => {
  const { PostTitle, UpVote, _id } = Fz;
  const axiosPublic = useAxiosPublic();
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/allPost/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Post has been deleted.",
              icon: "success",
            });
          }
        });
      }
      console.log(result);
    });
  };
  return (
    <>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>{PostTitle}</td>
        <td>{UpVote}</td>
        <th>
          <Link to="/">
            <button className="btn btn-ghost btn-sm">
              <AiOutlineComment size={24} className="text-orange-500" />
              Comments
            </button>
          </Link>
        </th>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-md">
            <RiDeleteBin6Fill className="text-red-600" size={24} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default ShowMyPost;
