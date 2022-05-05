import React, { useEffect} from "react";
import {useForm} from "react-hook-form"
import { useParams } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup"
// import { getGenre } from "../services/genresServices";
import * as yup from "yup"
import { useDispatch,useSelector, } from "react-redux";
import {createGenre,updateGenre} from "../resources/genre/genreSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";


 const genreSchema = yup.object().shape({
    name:yup.string().min(3).max(20).required(),
});


function Genreform(){
     const params = useParams();
     const {register,handleSubmit,formState:{errors},setValue} 
     =useForm({
         resolver:yupResolver(genreSchema),
     });
     
     const genres = useSelector((state)=> state.genreReducer.genres);
     useEffect(()=>{
         console.log("this is params",params);
         const genreId = params.genreId;
         console.log(genreId);
         if(!genreId) return;
         const genre= genres.find(g=>g._id==params.genreId);
         if(!genre) return;
         setValue("name",genre.name);
         setValue("_id",genre._id);
     },[]);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onSubmitHandler=(data) =>{
        console.log(data);
        {
            data._id
            ?
            
            dispatch(updateGenre(data))
         
           :  
             dispatch(createGenre({
                 _id : nanoid(),
                name : data.name
             } ))
     
             navigate('/genres')
         };
    }
    
     






        return(
            <div className="flex  items-center   justify-center min-h-screen bg-green-300">
            <div className="px-8 py-3  mt-1000   text-left bg-green-500 shadow-lg"> 
           
           <form onSubmit={
                handleSubmit(onSubmitHandler)}>
              <h2 className="text-2xl"> Lets Add Genre .</h2>
              <br />
              <input className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("name")} placeholder="enter name" type="text" required></input>
              <br />
              <p> {errors.name?.message}</p>
              <button className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900" type="submit" 
             
              >Submit </button>

              <br />
              
              </form>
              </div>
            </div>
        )
    }
    export default Genreform;
    
// import React, { useEffect } from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { createGenre, updateGenre } from "../resources/genre/genreSlice";
// import { nanoid } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// const GenreForm = () => {
//   const params = useParams();
//   const genres = useSelector((state) => state.genreReducer.genres);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const schema = yup.object().shape({
//     name: yup.string().min(3).max(10).required(),
//   });
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm({ resolver: yupResolver(schema) });
//   const onSubmitHandler = (data) => {
//     if (!data._id) {
//       data._id = nanoid();
//       dispatch(createGenre(data));
//     } else {
//       dispatch(updateGenre(data));
//     }
//     navigate("/genres");
//   };
//   useEffect(() => {
//     const genreId = params.genreId;
//     if (!genreId) return;
//     const genre = genres.find((g) => g._id === params.genreId);
//     if (!genre) return;
//     setValue("name", genre.name);
//     setValue("_id", genre._id);
//   }, []);
//   return (
//     <div>
//       <h1>Manage Genres</h1>
//       <form
//         style={{ margin: "0 auto", width: "800px" }}
//         onSubmit={handleSubmit(onSubmitHandler)}
//       >
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             {...register("name")}
//             className="form-control"
//           ></input>
//           <p>{errors.name?.message}</p>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GenreForm;
