import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//import { getGenres } from "../../services/genresSrvce";
import genreService from "../../services/genresServicesNew";

const initialState = {
    genres:[],
};
export const createGenre = createAsyncThunk(
      "genres/create",
      async ({ name },thunkAPI) => {
        const token = thunkAPI.getState().loginReducer.token;
        const res = await genreService.create({ name },token);
        return res.data;
      }
    );
    export const updateGenre = createAsyncThunk(
          "genres/update",
          async ({ _id, name },thunkAPI) => {
            const token = thunkAPI.getState().loginReducer.token;
            const res = await genreService.update(_id, { name},token);
            return res.data;
          }
        );
        export const deleteGenre = createAsyncThunk("genres/delete", async (id,thunkAPI) => {
            const token = thunkAPI.getState().loginReducer.token;
            console.log(token);
          const res = await genreService.remove(id,token);
          return res.data;        
        });
export const retrieveGenres = createAsyncThunk("genres/retrieve", async () => {
  const res = await genreService.getAll();
  return res.data;
});
export const genreSlice = createSlice({
    name:'genres',
    initialState,
    // extraReducers:{
    //     deleteGenre:(state,action) => {
    //         const index = state.genres.findIndex((g) => g._id === action.payload);
    //         console.log("this is action payload",action.payload);
    //         state.genres.splice(index,1);
    //     },
    //     addGenre:(state,action) => {
    //          state.genres.push(action.payload);
    //         console.log("this is state",state.genres);
    //     },
    //     updateGenre:(state,action) => {
    //         const index = state.genres.findIndex((g) => g._id === action.payload._id);
    //         console.log("this is action payload",action.payload);
    //         state.genres.splice(index,1,action.payload);
    //    },
    // },
    extraReducers: {
    [createGenre.fulfilled]: (state, action) => {
      state.genres.push(action.payload);
    },
    [retrieveGenres.fulfilled]: (state, action) => {
      return { genres: [...action.payload] };
    },
    [updateGenre.fulfilled]: (state, action) => { 
      const index = state.genres.findIndex((genre) => genre._id === action.payload.id);
      state.genres.splice(index,1,action.payload)
    },
    [deleteGenre.fulfilled]: (state, action) => {
      let index = state.genres.findIndex(
        (genre) => genre._id === action.payload._id
      );
      state.genres.splice(index, 1);
    },
  },
});
export const {reducer} = genreSlice;
export default reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import genreService from "../../services/genresServicesNew";

// const initialState = {
//   genres: [],
// };
// export const createGenre = createAsyncThunk(
//   "genres/create",
//   async ({ name }) => {
//     const res = await genreService.create({ name });
//     return res.data;
//   }
// );
// export const retrieveGenres = createAsyncThunk("genres/retrieve", async () => {
//   const res = await genreService.getAll();
//   return res.data;
// });
// export const updateGenre = createAsyncThunk(
//   "genres/update",
//   async ({ id, data }) => {
//     const res = await genreService.update(id, data);
//     return res.data;
//   }
// );
// export const deleteGenre = createAsyncThunk("genres/delete", async (id) => {
//   const res = await genreService.remove(id);
//   return res.data;
// });

// export const genreSlice = createSlice({
//   name: "genres",
//   initialState,
//   extraReducers: {
//     [createGenre.fulfilled]: (state, action) => {
//       state.push(action.payload);
//     },
//     [retrieveGenres.fulfilled]: (state, action) => {
//       return { genres: [...action.payload] };
//     },
//     [updateGenre.fulfilled]: (state, action) => {
//       const index = state.findIndex((genre) => genre._id === action.payload.id);
//       state[index] = {
//         ...state[index],
//         ...action.payload,
//       };
//     },
//     [deleteGenre.fulfilled]: (state, action) => {
//       let index = state.genres.findIndex(
//         (genre) => genre._id === action.payload.id
//       );
//       state.genres.splice(index, 1);
//     },
//   },
// });

// export const { reducer } = genreSlice;
// export default reducer;


