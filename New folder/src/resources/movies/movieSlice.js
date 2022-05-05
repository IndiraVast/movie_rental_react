import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// impport { getmovies} from "../../services/moviesServices";
import movieService from "../../services/movieServiceNew"
const initialState = {
    movies:[],
};
export const createMovie= createAsyncThunk(

    "movies/create",
    async(data,thunkAPI) => {
      const token = thunkAPI.getState().loginReducer.token;
      console.log("movies create function",data)
        const res = await movieService.create(data,token);
        return res.data;
    }
);
export const updateMovie = createAsyncThunk(
    "movie/update",
    async ({_id,...data},thunkAPI) => {
      const token = thunkAPI.getState().loginReducer.token;
      const res = await movieService.update(_id,{...data},token);
      return res.data;
    }
  );
  export const deleteMovie = createAsyncThunk("movie/delete", async (id,thunkAPI) => {
    const token = thunkAPI.getState().loginReducer.token;
    const res = await movieService.remove(id,token);
    return res.data;
  });
export const retrieveMovies = createAsyncThunk(
  "movie/retrieve", async () => {
const res = await movieService.getAll();
return res.data;
});
export const movieSlice = createSlice({
    name:'movies',
    initialState,

    extraReducers: {
        [createMovie.fulfilled]: (state, action) => {
          state.movies.push(action.payload);
        },
        [retrieveMovies.fulfilled]: (state, action) => {
          return { movies: [...action.payload] };
        },
        [updateMovie.fulfilled]: (state, action) => { 
          const index = state.movies.findIndex((movie) => movie._id === action.payload.id);
          state.movies.splice(index,1,action.payload)
        },
        [deleteMovie.fulfilled]: (state, action) => {
          let index = state.movies.findIndex(
            (movie) => movie._id === action.payload._id
          );
          state.movies.splice(index, 1);
        },
      },
    });
    export const {reducer} = movieSlice;
    export default reducer;
    
