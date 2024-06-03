import { FaSearch } from "react-icons/fa";
import banner from "../../src/assets/download.jpg";
const Banner = () => {
  return (
    <div className="averia-serif lg:mx-10 z-10">
      <div
        className="rounded-t-md  text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="pt-32">
          <h1 className="text-6xl text-white text-center font-black">
            WELCOME TO <br /> Talk Town FORUM
          </h1>
          <p className="text-2xl font-medium text-center text-white mt-2">
            The most popular forum on the Website!
          </p>
          <div className="join mx-auto text-center mt-8">
            <input
              type="text"
              placeholder="Enter a Keyword...."
              className="input input-bordered join-item w-96 "
            />
            <button className="btn bg-orange-500 border-none join-item ">
              <FaSearch className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
