import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import rentalServices from "../../services/rentalServices";

const initialState={
    rentals:[],
};

export const createRental = createAsyncThunk(

  "rentals/create",
  async(data)=> {
      const res = await rentalServices.create(data);
      return res.data
  }
);

export const retrieveReantals = createAsyncThunk(
    "rentals/ retrieve",
    async () => {
        const res = await rentalServices.getAll();
        return res.data
    }
);

export const rentalSlice = createSlice({
   name:'rentals',
   initialState,

   extraReducers:{
       [createRental.fulfilled]:(state,action) =>{
           state.rentals.push(action.payload);
       },
       [retrieveReantals.fulfilled]:(state,action) =>{
           return {rentals:[...action.payload]}
       },
   },
});

export const {reducer} = rentalSlice;
export default reducer;