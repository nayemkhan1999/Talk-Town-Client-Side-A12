import { Link } from "react-router-dom";
import error from "../../src/assets/404-error.gif";
import { HiChevronDoubleLeft } from "react-icons/hi2";
const Error = () => {
  return (
    <div className="text-center mx-auto bg-[#EAEEF1]">
      <img className=" h-[555px] mx-auto text-center" src={error} alt="" />
      <Link to="/">
        <button className="bg-[#EAEEF1] btn w-full text-[#FF6955] font-black text-lg">
          <span className="font-bold text-2xl">
            <HiChevronDoubleLeft />
          </span>{" "}
          GO TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
