// import { render } from "@testing-library/react"
import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { retrieveReantals } from "../resources/rentals/rentalSlice";
import { useEffect } from "react";

const Rentals = () => {
const rentals = useSelector((state) => state.rentalReducer.rentals)
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(retrieveReantals());
},[]);

return(
    <div>
        <h1 className="text-2xl font-semiboldd font-normal hover:font-bold text-center p-10"> Rentals </h1>
        
        
        <div className="tab">
        <table className="text-2xl bg-blue-200 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border">
            <thead className="align-content:center bg-red-300 border text-left px-10 py-10">
           <tr>
           <th  scope="row" class="px-6 py-4 font-medium
             text-gray-900 dark:text-white whitespace-nowrap"> Customer</th>
             <th  scope="row" class="px-6 py-4 font-medium
             text-gray-900 dark:text-white whitespace-nowrap"> Movies </th>
            
            <th className="p-3 text-center"> Operation </th>
            </tr>
        </thead> 
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr>
        <tbody className="border-separate border border-slate-400 text-2xl  ">
            {rentals.map((r)=>(
                <tr key={r._id}
                style={{textAlign: "center"}}>

                    <td className="p-3 text-sm text gray-500 " ><Link to={`/rentalForm/${r._id}`}>{r.customers.name}</Link>
             </td>
                    <td className="p-3 text-sm text gray-500 " > {r.movies.title}</td>
                   
                    <td className=" p-2 hover:text-blue-500 text-center "> <button type="button"
                     className="focus:outline-none text-white bg-purple-500 hover:bg-green-500
                      focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2
                       mb-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-800"
                    //    onClick={()=>dispatch(deleteMovie(m._id))}
                       >Delete</button> 
           </td>
           
                </tr>
            ))}
            <Link to="/rentalsForm/new"> <button className=" ml-20 text-white bg-gradient-to-r from-red-400 
        via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
        focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5
         py-2.5 text-center mr-2 mb-2">Add Reantal</button> </Link>
        </tbody>
        </table>
        </div>
    </div>
)

}

export default Rentals