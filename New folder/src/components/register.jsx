
import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createRegister } from "../resources/register/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";



const schema = yup.object().shape({
    name:yup.string().min(5).max(50).required(),
    email: yup.string().email().min(5).max(255).required(),
  password: yup.string().min(5).max(1024).required(),
  isAdmin:yup.boolean().required(),
})

export default function Register(){
     const dispatch = useDispatch();
     const  navigate = useNavigate();
    // const registers = useSelector((state)=> state.registerReducer.registers)
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema),
    });
   const onSubmitHandler = (data) =>{
       console.log({data});
       dispatch(createRegister({
        
       name : data.name,
       email : data.email,
       password :data.password,
       isAdmin: data.isAdmin,

    } ))
    navigate('/login');
    //    reset();
   } 
        return(
            <div   className="flex  items-center   justify-center min-h-screen bg-green-300">
              <div className="px-8 py-3  mt-1000   text-left bg-green-500 shadow-lg">
               <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h2 className="text-2xl">Let's Get Register</h2>
                    <br />
                    <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("name")}
                     placeholder="Enter Name" type="text" required></input>
                    <br />
                    <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("email")} 
                    placeholder="Email" type="email"    required></input>
                    <br />
                    <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("password")} 
                    placeholder="password" type="password" required></input>
                    <br />
                   {/* // <input  {...register("isAdmin")} type="checkbox" /> Admin */}
                  
                    <p > {errors.password?.message}</p>
                    <br />
                    <input {...register("isAdmin")} type="checkbox" />isAdmin

                    <button className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900" type="submit">Register</button>
               </form>
              </div>
           </div>
        )
    }
