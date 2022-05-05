import React,{useEffect} from "react";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate, useParams } from "react-router-dom";
// import {getCustomer} from "../services/customersServices";
import { createCustomer,updateCustomer } from "../resources/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const schema = yup.object().shape({
    name:yup.string().min(3).max(20).required(),
    phone:yup.string().min(10).max(10).required(),
    isGold:yup.boolean(),
});
function Customerform(){
    const params = useParams();
    const {register,handleSubmit,formState:{errors},setValue} 
    =useForm({
        resolver:yupResolver(schema),
    });
    
    const customers = useSelector((state)=> state.customerReducer.customers)

    useEffect(()=>{
        console.log("this is customers param",params);
        const customerId = params.customerId;
        if(!customerId) return;
        const customer = customers.find(c=>c._id === params.customerId)
        if(!customer) return;
        setValue("name",customer.name);
        setValue("phone",customer.phone);
        setValue("_id",customer._id);
        setValue("isGold",customer.isGold)
    },[])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onSubmitHandler = (data) =>{

        console.log("this is customer id",data._id);
        data._id 
       ? 
       dispatch(updateCustomer({
                _id : data._id,
               name : data.name,
               phone : data.phone,
               isGold :data.isGold,
            }))
      :  
        dispatch(createCustomer({
            _id : nanoid(),
           name : data.name,
           phone : data.phone,
           isGold :data.isGold,
        } ))
        navigate('/customers');
    };
    

       return(
           <div className="flex  items-center   justify-center min-h-screen bg-green-300">
           <div className="px-8 py-3  mt-1000   text-left bg-green-500 shadow-lg"> 
          
          <form onSubmit={handleSubmit(onSubmitHandler)}>
             <h2 className="text-2xl"> Lets Add Customer</h2>
             <br />
             <input className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("name")} placeholder="Enter name" type="text" required></input>
             <br />
             <p> {errors.name?.message}</p>
             <br/>
             <input className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("phone")} placeholder="Enter phone number" type="text" required></input>
             <br />
             <p> {errors.phone?.message}</p>
             <br/>
             <input className="focus:ring-blue-600"{...register("isGold")} name="isGold" type="checkbox"/> Gold
             <br />
             <p> {errors.isGold?.message}</p>
             {/* <input type="checkbox" />{"    "}Gold */}
             <br />
             <button className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900" type="submit">Submit</button>
 
             <br />
             
             </form>
             </div>
           </div>
       )
   }
   export default Customerform;