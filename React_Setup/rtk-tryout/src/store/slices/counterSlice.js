import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 100
}


const counterSlice = createSlice({
    name: 'count',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            console.log('INCREMENTING....')
            state.count = state.count + 1;
        },
        decrement: (state) => {
            console.log('DECREMENTING....')
            state.count  = state.count - 1;
        },
        reset: (state) => {
            console.log('RESET....')
            state.count = 0;
        }
    }
});
// const { reducer } = counterSlice;
// reducers
export default counterSlice.reducer;

export const {increment, decrement, reset}  =  counterSlice.actions;
