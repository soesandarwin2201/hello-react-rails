import { configureStore } from "@reduxjs/toolkit";
import { getMessageData } from "./Slice";

const store = configureStore({
     reducer: {
        message : getMessageData,
     }
});

export default store;