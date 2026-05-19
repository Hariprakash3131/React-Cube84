// ============================================================
// TASK 1: Redux Store with redux-persist
// ============================================================
// This file sets up the Redux store with state persistence.
// redux-persist automatically saves Redux state to localStorage
// and reloads it when the app restarts.

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import cartReducer from "./slices/cartSlice";

// -------------------------------------------------------------
// STEP 1: persistConfig — tells redux-persist HOW to save state
// -------------------------------------------------------------
// key: "root"     → data is saved in localStorage under the key "persist:root"
// storage         → use localStorage (could also use sessionStorage)
// whitelist       → ONLY persist the "cart" slice (not other slices)
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"], // Only the cart slice will be persisted
};

// -------------------------------------------------------------
// STEP 2: persistReducer — wraps cartReducer to make it "persist-aware"
// -------------------------------------------------------------
// It intercepts Redux actions like PERSIST, REHYDRATE, etc.
// and handles reading/writing to localStorage automatically.
const persistedReducer = persistReducer(persistConfig, cartReducer);

// -------------------------------------------------------------
// STEP 3: Create the Redux store using the persisted reducer
// -------------------------------------------------------------
// We also disable the serializable check middleware because
// redux-persist stores non-serializable values internally.
const store = configureStore({
  reducer: {
    cart: persistedReducer, // Use persisted version instead of plain cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist internal actions to avoid warnings
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// -------------------------------------------------------------
// STEP 4: Create the persistor (needed by PersistGate in provider.js)
// -------------------------------------------------------------
// persistor controls flushing/purging of the persisted state
export const persistor = persistStore(store);

// Export store as default
export default store;
