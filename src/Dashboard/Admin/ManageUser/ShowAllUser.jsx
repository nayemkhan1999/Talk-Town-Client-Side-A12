import Swal from "sweetalert2";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import { Link } from "react-router-dom";
const ShowAllUser = ({ hero, refetch }) => {
  const { name, email, image, role } = hero;

  const axiosPublic = useAxiosPublic();
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make him an Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #43CA36",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update Role",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const changeRole = "Admin";
        const result = await axiosPublic.patch(
          `/userRoleChange/${email}`,
          { changeRole },
          { withCredentials: true }
        );

        if (result.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Updated!",
            text: "Your role has been Updated!",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td className="font-black uppercase text-green-600 tracking-wide">
          {role}
        </td>
        <th>
          {hero.role === "Admin" ? (
            <button
              disabled
              onClick={handleClick}
              className="btn btn-ghost btn-xs text-xs bg-green-100 font-bold:"
            >
              Make an Admin
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="btn btn-ghost btn-xs text-xs bg-green-100 font-bold :"
            >
              Make an Admin
            </button>
          )}
        </th>
        <th>
          <Link to="/memberShip">
            <button className="btn btn-ghost btn-xs bg-rose-200">
              Subscription
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ShowAllUser;
