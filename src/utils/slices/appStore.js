import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from "./bookSlice";
import bookInfoReducer from "./bookInfoSlice";

const appStore=configureStore({
    reducer:{
       books:bookSliceReducer,
       bookInfo:bookInfoReducer
    }
});

export default appStore;