import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// impport { getCustomers} from "../../services/customersServices";
import customerService from "../../services/customerServiceNew"
const initialState = {
    customers:[],
};
export const createCustomer= createAsyncThunk(

    "customers/create",
    async({name,phone,isGold},thunkAPI) => {
      const token = thunkAPI.getState().loginReducer.token;
        const res = await customerService.create({name,phone,isGold},token);
        return res.data;
    }
);
export const updateCustomer = createAsyncThunk(
    "customer/update",
    async ({ _id, name ,phone ,isGold},thunkAPI) => {
      const token = thunkAPI.getState().loginReducer.token;
      const res = await customerService.update(_id, { name,phone,isGold},token);
      return res.data;
    }
  );
  export const deleteCustomer = createAsyncThunk("customer/delete", async (id,thunkAPI) => {
    const token = thunkAPI.getState().loginReducer.token;
    const res = await customerService.remove(id,token);
    console.log("custoemr token",token);
    return res.data;
  });
export const retrieveCustomers = createAsyncThunk("customer/retrieve", async () => {
const res = await customerService.getAll();
return res.data;
});
export const customerSlice = createSlice({
    name:'customers',
    initialState,

    extraReducers: {
        [createCustomer.fulfilled]: (state, action) => {
          state.customers.push(action.payload);
        },
        [retrieveCustomers.fulfilled]: (state, action) => {
          return { customers: [...action.payload] };
        },
        [updateCustomer.fulfilled]: (state, action) => { 
          const index = state.customers.findIndex((customer) => customer._id === action.payload.id);
          state.customers.splice(index,1,action.payload)
        },
        [deleteCustomer.fulfilled]: (state, action) => {
          let index = state.customers.findIndex(
            (customer) => customer._id === action.payload._id
          );
          state.customers.splice(index, 1);
        },
      },
    });
    export const {reducer} = customerSlice;
    export default reducer;
    




//     {
//           name:'customers',
//     initialState,
//     reducers:{
//         deleteCustomer:(state,action) => {
//             const index = state.customers.findIndex((c) => c._id === action.payload);
//             console.log("this is action payload",action.payload);
//             state.customers.splice(index,1);
//         },
//         addCustomer:(state,action) => {
//              state.customers.push(action.payload);
//             console.log("this is customer state",state.customers);
//         },
//         updateCustomer:(state,action) => {
//             const index = state.customers.findIndex((c) => c._id === action.payload._id);
//             console.log("this is action payload",action.payload);
//             state.customers.splice(index,1,action.payload);
//        },
//     },
// });
// export const {deleteCustomer,addCustomer,updateCustomer} = customerSlice.actions;
// export default customerSlice.reducer;



