import { configureStore } from "@reduxjs/toolkit"

import movieDataReducer from "../features/movieDataSlice"

export default configureStore({
          reducer: {
             movieData : movieDataReducer
          }
})