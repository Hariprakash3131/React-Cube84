"use client";

import { Provider } from "react-redux";
import store from "./store";

// ReduxProvider component to wrap the entire app with Redux
// This makes Redux store available to all child components
export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
