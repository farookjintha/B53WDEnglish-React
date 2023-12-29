import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slices/counterSlice';

const myStore = configureStore({
    reducer: {
        count: countReducer
    }
});

export default myStore;