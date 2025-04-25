import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appSlice";

export const Store = configureStore({
    reducer: {AppReducer},
})