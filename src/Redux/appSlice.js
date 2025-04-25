import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "Ecommerce",
    initialState: {
        products: [],
        favourait: [],
        color_cart: {},
        color_favourait: {},
    },
    reducers: {
        AddToCart:(state , action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if(item)
                item.quantity += action.payload.quantity;
            else
            {
                state.products.push(action.payload);
                state.color_cart[action.payload.id] = true;
            }
        },
        RemoveToCart:(state , action) => {
            const index = state.products.findIndex(item => item.id === action.payload.id);
            if(index > -1)
            {
                state.products.splice(index , 1);
                state.color_cart[action.payload.id] = false;
            }
        },
        Increment:(state , action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            item.quantity++ ;
        },
        Decrement:(state , action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if(item && item.quantity != 1)
                item.quantity--;
            if(item && item.quantity == 1)
            {
                const index = state.products.findIndex( index => index.id === action.payload.id);
                state.products.splice(index , 1);
                state.color_cart[action.payload.id] = false;
            }
        },
        AddToFavourite: (state , action) => {
            const item = state.favourait.find(item => item.id === action.payload.id);
            if(!item)
            {
                state.favourait.push(action.payload);
                state.color_favourait[action.payload.id] = true;
            }
            else{
                const index = state.favourait.findIndex(index => index.id === action.payload.id);
                state.favourait.splice(index , 1);
                state.color_favourait[action.payload.id] = false;
            }
        },
        RemoveToFavourite: (state , action) => {
            const index = state.favourait.findIndex(index => index.id === action.payload.id);
            state.favourait.splice(index, 1);
            state.color_favourait[action.payload.id] = false;
        },
        ClearAllFavourait: (state) => {
            state.favourait = [];
            state.color_favourait = {};
        },
        ClearAllProducts: (state) => {
            state.products = [];
            state.color_cart = {};
        },
    },
})

export const { AddToCart , Increment , Decrement , ClearAllFavourait , ClearAllProducts , AddToFavourite , RemoveToFavourite , color_cart , color_favourait} = appSlice.actions;
export default appSlice.reducer;