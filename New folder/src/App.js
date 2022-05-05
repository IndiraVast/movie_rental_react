// import logo from './logo.svg';
//import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link ,Outlet} from "react-router-dom"
import { loadLogin } from "./resources/login/loginSlice";
//import Genres from "./components/genres"

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadLogin());
  },[dispatch])
  return (
    <div className=" relative overflow-x-auto shadow-md sm:rounded-lg"
         
    >
      <nav className=" w-screen h-[80px] flex space-x-5 pr-10  flex-items-center justify-between text-black-500 bg-purple-400 border-gray-300 px-2 sm:px-4 py:2.5 rounded dark:bg-white-800"
            
      >
        <span className=' p-6 mr-3 h-6 sm:h-10 font-bold text-2xl text-black '> Movie Rentals</span>
      <Link to="/Genres" className=' p-8 hover:text-blue-800 text'>Genres</Link> 
      <Link to="/Movies"className='p-8 hover:text-blue-800'>Movies</Link>
      <Link to="/Customers"className='p-8 hover:text-blue-800'>Customers</Link> 
      <Link to="/Rentals"className='p-8 hover:text-blue-800'>Rentals</Link>  
      <Link to="/Register"className='p-8 hover:text-blue-800'>Register</Link> 
      <Link to="/Login"className=' p-8 hover:text-blue-800'>Login</Link> 
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;



// import "./App.css";
// import NavBar from "./components/navBar";
// import { Outlet } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Outlet />
//     </div>
//   );
// }

// export default App;
