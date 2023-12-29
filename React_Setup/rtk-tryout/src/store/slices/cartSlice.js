import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        // data from json
    ],
    totalQuantity: 0,
    totalPrice: 0
}


const counterSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        increment_product: (state, payload) => {
            console.log('INCREMENTING....')
            state.count = state.count + 1;
        },
        decrement_product: (state, payload) => {
            console.log('DECREMENTING....')
            state.count  = state.count - 1;

        },
        add_product_to_cart: (state, payload) => {
            console.log('RESET....')
            state.products = [...state.products, payload.product];
            state.totalQuantity  = state.products.reduce(); // array function
            state.totalPrice = state.products.reduce(); // array function
            state.count = 0;
        },
        remove_product_from_cart: (state, payload) => {
            // logic
        }
     }
});
// const { reducer } = counterSlice;
// reducers
export default counterSlice.reducer;

export const {increment_product, decrement_product, add_product_to_cart, remove_product_from_cart}  =  counterSlice.actions;
