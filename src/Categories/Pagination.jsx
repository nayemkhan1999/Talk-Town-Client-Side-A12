import { useEffect, useState } from "react";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import "./Pagination.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const axiosPublic = useAxiosPublic();
  const [get, setGet] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    axiosPublic
      .get(`allPost?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => {
        setGet(res.data.posts);
        setTotalPosts(res.data.totalPosts);
      });
  }, [axiosPublic, currentPage, itemPerPage]);
  // console.log(get, "17 number line");

  const numberOfPages = Math.ceil(totalPosts / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* Pagination Start Here */}
      <div className="pagination">
        <p className="text-xs">Current Page: {currentPage}</p>
        <button onClick={handlePrev}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
