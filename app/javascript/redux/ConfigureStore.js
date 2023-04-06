import { configureStore } from "@reduxjs/toolkit";
import messageSlice  from "./Slice";

const store = configureStore({
     reducer: {
        message : messageSlice,
     }
});

export default store;