// import { render } from "@testing-library/react";
import React,{useState} from "react"
import { Link } from "react-router-dom";
import { getMovies } from "../services/movieServices"
import { useSelector,useDispatch } from "react-redux";
import { deleteMovie,retrieveMovies } from "../resources/movies/movieSlice";
import { useEffect } from "react";
 
const Movie=()=>{
    // const [movies,setMovies] = useState(getMovies());
    // function handleDelete(id){
    //     console.log("hello "+id);
    //     const moviesAfterDelete = movies.filter((m)=> m._id !== id);
       
    //     setMovies(moviesAfterDelete);
    // }
 const movies = useSelector((state)=> state.movieReducer.movies);
 const dispatch = useDispatch();
 useEffect(()=>{
     dispatch(retrieveMovies());
 },[]);
    return(
            <div>
                <h1 className="text-2xl font-semiboldd font-normal hover:font-bold text-center p-10"> Movies </h1>
                
                
                <div className="tab">
                <table className="text-2xl bg-blue-200 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border">
                    <thead className="align-content:center bg-red-300 border text-left px-10 py-10">
                    <th  scope="row" class="px-6 py-4 font-medium
                     text-gray-900 dark:text-white whitespace-nowrap"> Title</th>
                     <th  scope="row" class="px-6 py-4 font-medium
                     text-gray-900 dark:text-white whitespace-nowrap"> Genre </th>
                     <th  scope="row" class="px-6 py-4 font-medium
                     text-gray-900 dark:text-white whitespace-nowrap"> Rate </th>
                     <th  scope="row" class="px-6 py-4 font-medium
                     text-gray-900 dark:text-white whitespace-nowrap"> Stock</th>
                     <th  scope="row" class="px-6 py-4 font-medium
                     text-gray-900 dark:text-white whitespace-nowrap"> Liked</th>
                     

                    <th className="p-3 text-center"> Operation </th>
                </thead> 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr>
                <tbody className="border-separate border border-slate-400 text-2xl  ">
                    {movies.map((m)=>(
                        <tr key={m._id}
                        style={{textAlign: "center"}}>

                            <td className="p-3 text-sm text gray-500 " ><Link to={`/moviesForm/${m._id}`}>{m.title}</Link>
                     </td>
                            <td className="p-3 text-sm text gray-500 " > {m.genre.name}</td>
                            <td className="p-3 text-sm text gray-500 " > {m.dailyRentalRate}</td>
                            <td className="p-3 text-sm text gray-500 " > {m.numberInStock}</td>
                            <td className="p-3 text-sm text gray-500 " > {m.liked?<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg> :<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>}</td>
                            
                            <td className=" p-2 hover:text-blue-500 text-center "> <button type="button"
                             className="focus:outline-none text-white bg-purple-500 hover:bg-green-500
                              focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2
                               mb-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-800"
                               onClick={()=>dispatch(deleteMovie(m._id))}
                               >Delete</button> 
                   </td>
                        </tr>
                    ))}
                    <Link to="/moviesForm/new"> <button className=" ml-20 text-white bg-gradient-to-r from-red-400 
                via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5
                 py-2.5 text-center mr-2 mb-2">Add Movie</button> </Link>
                </tbody>
                </table>
                </div>
            </div>
        )
    }
export default Movie