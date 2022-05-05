import React from "react"
 import { Link } from "react-router-dom";
 import {useSelector,useDispatch} from "react-redux"
 import { useEffect } from "react";
 import {deleteCustomer,retrieveCustomers} from "../resources/customer/customerSlice"
//import {getCustomers} from '../services/customersServices'
export default function Customers(){
//    const [customers,setCustomer] = useState(getCustomers());
//    function handleDelete(id){
//        const customersAfterDelete = customers.filter((c)=> c._id !== id)
//        setCustomer(customersAfterDelete);
//    }

const customers = useSelector((state) => state.customerReducer.customers);
const dispatch  = useDispatch();
useEffect(() => {
    dispatch(retrieveCustomers());
  }, []);
        return(
            <div>
                 <h1 className="text-2xl font-semiboldd font-normal
                  hover:font-bold text-center p-10"> Customers </h1>
            
                 <div className="tab" >
                     
                     <table className="text-2xl bg-blue-200 text-gray-700 bg-gray-50 
                     dark:bg-gray-700 dark:text-gray-400">
                         <thead className="align-content:center bg-red-300 border text-left px-10 py-10">
                             <tr>
                             <th  scope="row" className="px-6 py-4 font-medium
                              text-gray-900 dark:text-white whitespace-nowrap"> Name </th>
                              <th  scope="row" className="px-6 py-4 font-medium
                              text-gray-900 dark:text-white whitespace-nowrap"> Phone </th>
                               <th  scope="row" className="px-6 py-4 font-medium
                              text-gray-900 dark:text-white whitespace-nowrap"> IsGold</th>
                             <th className="p-3 text-center"> Operation </th>
                             </tr>
                     </thead> 
                     {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr> */}
                     <tbody className="border-separate border border-slate-400 text-2xl  ">
                         {customers.map((c)=>(
                             <tr data-aos="zoom-in-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000"
                             className="table-row shadow-md rounded-lg mt-6"
                              key={c._id}
                            >
                                
                         <td  className=" p-2 hover:text-blue-500 text-center "><Link to={`/customersForm/${c._id}`} >{c.name}</Link></td>
                         <td  className=" p-2 hover:text-blue-500 text-center ">{c.phone}</td>
                         <td  className=" p-2 hover:text-blue-500  text-center ">{c.isGold? "true" : "false"}</td>    

                         <td className=" p-2 hover:text-blue-500 text-center "><button type="button"
                                  className="focus:outline-none text-white bg-purple-500 hover:bg-green-500
                                   focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2
                                    mb-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-800"
                                    onClick={()=>dispatch(deleteCustomer(c._id))}
                                    >Delete</button> 
                        </td>
                             </tr>
                         ))}
                           
                         
                     </tbody>
                     </table>
                     <Link to="/customersForm/new"> <button className=" ml-100 text-white bg-gradient-to-r from-red-400 
                via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5
                 py-2.5 text-center mr-2 mb-2">Add Customer</button> </Link>
                
                     </div>
                   
            </div>
        )
    }
