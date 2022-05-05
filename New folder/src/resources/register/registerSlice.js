import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// impport { getCustomers} from "../../services/customersServices";
import registerService from "../../services/registerServices"
const initialState = {
    // isRegister: false,
    users:{},
};
export const createRegister= createAsyncThunk(

    "registers/create",
    async({name,email,password,isAdmin}) => {
        const res = await registerService.create({name,email,password,isAdmin});
        return res.data;
    }
);


export const registerSlice = createSlice({
    name:'registers',
    initialState,

    extraReducers: {
        [createRegister.fulfilled]: (state, action) => {
          if(action.payload)
        //   state.isRegister= true;
        state.users = action.payload
        },
        
       
      },
    });
    export const {reducer} = registerSlice;
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



