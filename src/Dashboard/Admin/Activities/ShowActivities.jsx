import useAuth from "../../../CustomHook/useAuth";

const ShowActivities = ({ TVS }) => {
  const { user } = useAuth();
  return (
    <>
      <tbody>
        <tr>
          <th></th>
          <th></th>
          <td>{user?.email}</td>
          <td>{TVS?.comment}</td>
          <td>
            <select className="select w-full max-w-xs ">
              <option disabled selected>
                Comment Feedback
              </option>
              <option>it's very beautiful comment</option>
              <option>
                Great job on creating such a user-friendly platform!
              </option>
              <option>Overall, I'm very satisfied with the service</option>
            </select>
          </td>
          <td>
            <button className="btn btn-sm">Report</button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ShowActivities;
