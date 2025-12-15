// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { LoadAllStocks, setCurrentPage } from '../stocksSlice';

// const Pagination = () => {
//   const dispatch = useDispatch();
//   const { currentPage, totalPages, pageSize, loading } = useSelector((state) => state.stock);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
//       dispatch(setCurrentPage(newPage));
//       dispatch(LoadAllStocks({ pageNumber: newPage, pageSize }));
//     }
//   };

//   const handlePageSizeChange = (e) => {
//     const newSize = parseInt(e.target.value);
//     dispatch(setPageSize(newSize));
//     dispatch(LoadAllStocks({ pageNumber: 1, pageSize: newSize }));
//   };

//   if (totalPages <= 1) return null;

//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-6 p-4 bg-white rounded-lg shadow-md">
//       {/* Page Size Selector */}
//       <div className="flex items-center space-x-2">
//         <label htmlFor="pageSize" className="text-sm font-medium text-gray-700">
//           Rows per page:
//         </label>
//         <select
//           id="pageSize"
//           value={pageSize}
//           onChange={handlePageSizeChange}
//           disabled={loading}
//           className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="50">50</option>
//           <option value="100">100</option>
//         </select>
//       </div>

//       {/* Page Navigation */}
//       <div className="flex items-center space-x-2">
//         <button
//           onClick={() => handlePageChange(1)}
//           disabled={currentPage === 1 || loading}
//           className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           First
//         </button>
        
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1 || loading}
//           className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Previous
//         </button>

//         <span className="px-3 py-1 text-sm text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages || loading}
//           className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Next
//         </button>
        
//         <button
//           onClick={() => handlePageChange(totalPages)}
//           disabled={currentPage === totalPages || loading}
//           className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Last
//         </button>
//       </div>

//       {/* Page Number Input */}
//       <div className="flex items-center space-x-2">
//         <span className="text-sm text-gray-700">Go to page:</span>
//         <input
//           type="number"
//           min="1"
//           max={totalPages}
//           defaultValue={currentPage}
//           onBlur={(e) => {
//             const page = parseInt(e.target.value);
//             if (page >= 1 && page <= totalPages) {
//               handlePageChange(page);
//             }
//           }}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               const page = parseInt(e.target.value);
//               if (page >= 1 && page <= totalPages) {
//                 handlePageChange(page);
//               }
//             }
//           }}
//           className="w-16 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default Pagination;