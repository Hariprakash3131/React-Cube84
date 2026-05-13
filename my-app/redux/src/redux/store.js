import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Create the Redux store
// configureStore automatically sets up Redux DevTools and middleware
const store = configureStore({
  reducer: {
    // Add all reducers here - each one becomes a slice of state
    cart: cartReducer, // This creates state.cart with all cart-related state
  },
});

export default store;
