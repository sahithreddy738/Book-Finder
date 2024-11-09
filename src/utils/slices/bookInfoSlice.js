import { createSlice } from "@reduxjs/toolkit";



const bookInfoSlice=createSlice({
    name:"bookInfo",
    initialState:{
        bookInformation:{}
    },
    reducers:{
        addBookInformation:(state,action)=>{
            state.bookInformation={...action.payload,...state.bookInformation}
            console.log(state.bookInformation);
        },
        removeBookInformation:(state)=>{
            state.bookInformation=[]
        }
    }
})

export const {addBookInformation,removeBookInformation}=bookInfoSlice.actions;

export default bookInfoSlice.reducer;