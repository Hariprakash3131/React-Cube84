// ============================================================
// TASK 2: Redux Provider with PersistGate
// ============================================================
// PersistGate delays rendering until persisted state has been
// loaded from localStorage into Redux. Without it, components
// would briefly render with empty state (flash of empty cart).

"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // New import
import store, { persistor } from "./store"; // Import BOTH store and persistor

export function ReduxProvider({ children }) {
  return (
    // 1. Provider makes the Redux store available to all components
    <Provider store={store}>
      {/*
        2. PersistGate waits for localStorage data to be loaded before rendering.
           - persistor: the persistor object from persistStore(store)
           - loading: what to show while state is being loaded from storage
                      (null = render nothing, or use a spinner component)
      */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
