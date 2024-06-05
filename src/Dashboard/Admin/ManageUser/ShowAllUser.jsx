const ShowAllUser = ({ hero }) => {
  const { name, email, image, role } = hero;

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
            <div>
              <div className="font-black uppercase text-orange-400 tracking-wide">
                {role}
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default ShowAllUser;
