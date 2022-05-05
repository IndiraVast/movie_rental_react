import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// impport { getCustomers} from "../../services/customersServices";
import loginService from "../../services/loginServices"
const initialState = {
    token:'',
};
export const createLogin= createAsyncThunk(

    "logins/create",
    async({email,password}) => {
      
        const res = await loginService.create({email,password});
        sessionStorage.setItem("token",res.data)
        console.log(res.data);
        return res.data;
    }
);


export const loginSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
      loadLogin:(state)=>{
        state.token= sessionStorage.getItem("token")
      },
    },
    extraReducers: {
        [createLogin.fulfilled]: (state, action) => {
          state.token=action.payload;
          
        },
        
       
      },
    });
    export const {loadLogin} = loginSlice.actions;
    export default loginSlice.reducer;
    


