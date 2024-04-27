import {createSlice} from "@reduxjs/toolkit";

export const movieDataSlice = createSlice({
        name : "movieData",
        
        initialState : {
            movies : []
        },
        
        reducers: {
            getMovieData : (state,action) => {
                state.movies = action.payload
            }
        }
})

export default movieDataSlice.reducer

export const {getMovieData} = movieDataSlice.actions