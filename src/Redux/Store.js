import { configureStore } from "@reduxjs/toolkit";
import InvestmentTypeSlice from "./Slices/InvestmentTypeSlice";

const store = configureStore({
    reducer:{
        investment:InvestmentTypeSlice
    }
})
export default store;