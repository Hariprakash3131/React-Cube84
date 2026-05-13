import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  items: [], // Array to store cart items with id, name, price, quantity
  totalItems: 0, // Total number of items in cart
  totalPrice: 0, // Total price of all items in cart
};

// Create the cart slice with reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add item to cart
    addToCart: (state, action) => {
      const product = action.payload; // Product object contains: id, name, price, quantity

      // Check if item already exists in cart
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += product.quantity || 1;
      } else {
        // If item doesn't exist, add it to cart with default quantity of 1
        state.items.push({
          ...product,
          quantity: product.quantity || 1,
        });
      }

      // Recalculate totals
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Action to remove item from cart
    removeFromCart: (state, action) => {
      const productId = action.payload; // Product ID to remove

      // Filter out the item with matching ID
      state.items = state.items.filter((item) => item.id !== productId);

      // Recalculate totals
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Action to update quantity of an item
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;

      // Find the item and update its quantity
      const item = state.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = Math.max(1, quantity); // Prevent quantity from going below 1
      }

      // Recalculate totals
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Action to clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions for use in components
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// Export reducer for store configuration
export default cartSlice.reducer;
