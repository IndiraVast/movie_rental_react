import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
// import { dat a } from "autoprefixer";
import * as yup from "yup"
import { createLogin } from "../resources/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    email: yup.string().email().required(),
  password: yup.string().min(5).max(32).required(),
})
const Login = () => {

  const dispatch = useDispatch();
  const  navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} 
    = useForm({
        resolver: yupResolver(schema),
    }); 
    const onSubmitHandler = (data) =>{
      console.log({data});
      dispatch(createLogin({       
      email : data.email,
      password :data.password,     

   } ))
   navigate('/genres');
  }
   
     return ( 
         <div  className="flex  items-center   justify-center min-h-screen bg-green-300">
            <div className="px-8 py-3  mt-1000   text-left bg-green-500 shadow-lg"> 
           
          <form onSubmit={handleSubmit(onSubmitHandler)}>
             <h2 className="text-2xl"> Lets signs you In .</h2>
             <br />
             <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
             {...register("email")} placeholder="email" type="email" required></input>
             <br />

             <input  
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
             {...register("password")}
              placeholder="password" type="password" required></input>
            
            <p> {errors.password?.message}</p>
             <br />

             <button className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900" type="submit">Sign In</button>
             
          </form>
            </div>
          </div>
      
     )
}

export default Login;