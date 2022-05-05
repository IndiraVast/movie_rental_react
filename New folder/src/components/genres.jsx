//import { render, } from "@testing-library/react";
import React from "react"
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteGenre,retrieveGenres } from "../resources/genre/genreSlice";
import { useEffect } from "react";

const Genres = () =>{

const genres = useSelector((state)=> state.genreReducer.genres);
const dispatch = useDispatch();
useEffect(() => {
        dispatch(retrieveGenres());
      }, []);
   
        return(
            <div className="flex  items-center   justify-center min-h-screen bg-green-300">
            <div className="px-8 py-3  mt-1000   text-left bg-green-500 shadow-lg"> 
           
                <h1 className="text-2xl font-semiboldd font-normal hover:font-bold text-center p-10"> Genres </h1>
    
                
                <div className="tab">
                {genres && genres.length > 0 ? (   
                <table className="text-2xl bg-blue-200 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <thead className="align-content:center bg-red-300 border text-left px-10 py-10">
                    <tr>
                     <th  scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"> Name </th>
                     <th className="p-3 text-center"> Operation </th>
                     </tr>
                </thead> 
                {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr> */}
                <tbody className="border-separate border border-slate-400 text-2xl  ">
                    {genres.map((g)=>(
                        <tr data-aos="zoom-in-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="table-row shadow-md rounded-lg mt-6"
                         key={g._id}
                       >
                <td> 
                <Link to={`/genreForm/${g._id}`}>{g.name}</Link>
                    
                    
               </td>                           
                            <td className=" p-2 hover:text-blue-500 text-center "> <button type="button"
                             className="focus:outline-none text-white bg-purple-500 hover:bg-green-500
                              focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2
                               mb-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-800"
                               onClick={()=>dispatch(deleteGenre(g._id))}
                               >Delete</button> 
                   </td>
                        </tr>
                    ))}
                     
                </tbody>
               
                </table>
                ) : (
                    <p> No genres found in the database</p>
                )
                }
                </div>
                <Link to="/genreForm/new" className="ml-40">
                    
                <button type="button" className="inline-block px-7 py-3
                 bg-blue-600 text-white font-medium text-sm leading-snug 
                 uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Genre</button>
  </Link>
                
            </div>
            </div> 
        )
    }
export default Genres;


// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteGenre, retrieveGenres } from "../resources/genre/genreSlice";
// import { Link } from "react-router-dom";
// const Genres = () => {
//   const genres = useSelector((state) => state.genreReducer.genres);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(retrieveGenres());
//   }, []);
//   return (
//     <div>
//       <h1>Genres</h1>
//       <div className="row">
//         <div className="col-2">
//           <Link to="/genreform" className="btn btn-sm btn-primary m-2">
//             Add Movie
//           </Link>
//         </div>
//         <div className="col">
//           {genres && genres.length > 0 ? (
//             <table
//               className="table table-primary m-2"
//               style={{ margin: "0 auto", width: "800px" }}
//             >
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {genres.map((g) => (
//                   <tr key={g._id}>
//                     <td>
//                       <Link to={`/genreform/${g._id}`}>{g.name}</Link>
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => dispatch(deleteGenre(g._id))}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No genres found in the database</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Genres;
