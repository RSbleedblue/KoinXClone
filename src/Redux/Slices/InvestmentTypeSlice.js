import { createSlice } from "@reduxjs/toolkit";

const Investment = createSlice({
    name: "investment",
    initialState:{
        type:"Short Term",
    },
    reducers:{
        setType(state,action){
            state.type = action.payload
        }
    }
})
export default Investment.reducer
export const {setType} = Investment.actions