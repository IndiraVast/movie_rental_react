import React, { useEffect} from "react";
import {useForm} from "react-hook-form"
import { useParams } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup"
// import { getMovie } from "../services/movieServices";
import * as yup from "yup"
// import  {getGenres}  from "../services/genresSrvce";
import { useSelector,useDispatch } from "react-redux";
import { createMovie,updateMovie } from "../resources/movies/movieSlice";
import { nonoid } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
const schema = yup.object().shape({
    title:yup.string().min(3).max(20).required(),
    numberInStock:yup.number().min(0).max(255).required(),
    dailyRentalRate:yup.number().min(0).max(255).required(),
     genreId:yup.string().required(),
    liked:yup.boolean(),
});


function Movieform(){
    // const [genres] = useState(getGenres());
    // console.log(genres);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams();
    const {register,handleSubmit,formState:{errors},setValue} 
    =useForm({
        resolver:yupResolver(schema),
    });
    const onSubmitHandler = (data)=>{
        // console.log("this is movies data",{data});
        console.log("hddddd");
        {
            data._id
            ? dispatch(updateMovie(data))
            : dispatch(createMovie(data))
        }
        navigate('/movies')
    };
    const movies= useSelector((state)=> state.movieReducer.movies);
   const genres = useSelector((state)=> state.genreReducer.genres)
    useEffect(()=>{
        
        const movieId = params.movieId;
        if(!movieId) return;
        const movie= movies.find(m=>m._id === params.movieId);
        if(!movie) return;
        setValue("title",movie.title);
        setValue("dailyRentalRate",movie.dailyRentalRate);
        setValue("numberInStock",movie.numberInStock);
        setValue("_id",movie._id);
        setValue("genreId",movie.genre._id);
        setValue("liked",movie.liked)
    },[]);
    
       return(
           <div className="flex  items-center   justify-center min-h-screen bg-green-300">
           <div className="px-8 py-3  mt-1000   text-left bg-green-500 shadow-lg"> 
          
          <form onSubmit={handleSubmit(onSubmitHandler)}>
             <h2 className="text-2xl"> Lets Add Movie .</h2>
             <br />
             <input className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("title")} placeholder="Enter title" type="text" required></input>
             <br />
             <input className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("dailyRentalRate")} placeholder="Enter dailyRentalRa" type="text" required></input>
             <br />
             <input className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("numberInStock")} placeholder="Enter numberInStock" type="text" required></input>
             <br />
             <select className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("genreId")}
               >
                   <option value="" disabled selected> select genre</option>
                {genres.map((g)=>(
            <option  key={g._id} value={g._id}> {g.name}</option>
             
               ))}
               </select>
             <br />
             <input className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("liked")}  type="checkbox"></input>
               <span>Like</span>
             <br />
            
             
            
            
             <p> {errors.title?.message}</p>
             <button className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900" type="submit">Add movie</button>

             <br />
             
             </form>
             </div>
           </div>
       )
   }
   export default Movieform;