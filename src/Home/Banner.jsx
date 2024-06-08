import { FaSearch } from "react-icons/fa";
import banner from "../../src/assets/download.jpg";
import { Helmet } from "react-helmet";
import CategoriesTags from "../Categories/CategoriesTags";
import { useState } from "react";

const Banner = () => {
  const [saveData, setSaveData] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const Share = e.target.search.value;
    setSaveData(Share);
  };

  return (
    <div className="averia-serif lg:mx-10 z-10">
      <Helmet>
        <title>Talk Town || Home</title>
      </Helmet>

      <div
        className="rounded-t-md  text-center mb-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="pt-32">
          <h1 className="lg:text-6xl text-3xl text-white text-center font-black">
            WELCOME TO <br /> Talk Town FORUM
          </h1>
          <p className="lg:text-2xl text-sm font-medium text-center text-white mt-2">
            The most popular forum on the Website!
          </p>
          <div className="join mx-auto text-center mt-8">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Enter a Keyword...."
                name="search"
                className="input input-bordered join-item lg:w-96 "
              />
              <button className="btn bg-orange-500 border-none join-item ">
                <FaSearch className="text-white text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <CategoriesTags saveData={saveData} />
    </div>
  );
};

export default Banner;
