import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "../reduxCounter/countslice";
const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
});
export default store;
