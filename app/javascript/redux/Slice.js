import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'http://localhost:3000/api/messages';

const initialState = {
     message: '',
     isLoading: true
};

export const getMessageData = createAsyncThunk('message/getMessageData', async () => {
     const response = await fetch(API);
     const data = await response.json();
     return data;
});

const messageSlice = createSlice({
     initialState,
     name: "message",
     extraReducers: (builder) => {
          builder.addCase(getMessageData.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(getMessageData.fulfilled, (state, action) => {
            state.message = action.payload;
            state.isLoading = false;
          });
          builder.addCase(getMessageData.rejected, (state) => {
            state.isLoading = false;
          });
        },
 })
 
 export default messageSlice.reducer;