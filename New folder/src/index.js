import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Movies from './components/movies';
import Genres from './components/genres';
import Customers from './components/customers'
import Rentals from './components/rentals'
import Register from './components/register'
import Login from './components/login'
import Genreform from './components/genreForm'
import CustomersForm from './components/customersForm'
import MoviesForm from './components/moviesForm'
import { Provider } from 'react-redux';
import {store} from "./store"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'tw-elements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} >
    <Route path="Movies" element={<Movies/>} ></Route>
    <Route path="Genres" element={<Genres/>} ></Route>
    <Route path="Customers" element={<Customers/>} ></Route>
    <Route path="Rentals" element={<Rentals/>} ></Route>
    <Route path="Register" element={<Register/>} ></Route>
    <Route path="Login" element={<Login/>} ></Route>
    <Route path='genreForm/:genreId' element={<Genreform />} ></Route>
    <Route path='genreForm/new' element={<Genreform />} ></Route>
    <Route path='customersForm/:customerId' element={<CustomersForm />} ></Route>
    <Route path='customersForm/new' element={<CustomersForm />} ></Route>
    <Route path='moviesForm/:movieId' element={<MoviesForm />} ></Route>
    <Route path='moviesForm/new' element={<MoviesForm />} ></Route>

    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

