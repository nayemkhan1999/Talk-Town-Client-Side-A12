// import { useState } from "react";

// const Pagination = ({ get }) => {
//   // console.log(get);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 2;

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const currentUsers = get.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(get.length / usersPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   return (
//     <div>
//       <div className="flex justify-center mt-4">
//         <div className="flex">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600 ${
//               currentPage === 1 && "cursor-not-allowed"
//             }`}
//             disabled={currentPage === 1}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>

//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => paginate(index + 1)}
//               className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
//                 currentPage === index + 1 && "bg-blue-500 text-white"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => paginate(currentPage + 1)}
//             className={`flex items-center justify-center px-4 py-2 mx-1 text-blue-500 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
//               currentPage === totalPages && "cursor-not-allowed"
//             }`}
//             disabled={currentPage === totalPages}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 010 1.414l-4 4a1 1 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
