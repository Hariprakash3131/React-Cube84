"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReduxProvider } from "@/redux/provider";

// Client-side wrapper that includes Redux Provider and Header
// This ensures Redux is properly initialized before Header mounts
export function ClientLayout({ children, name, age, gender }) {
  return (
    <ReduxProvider>
      <Header name={name} age={age} gender={gender} />
      {children}
      <Footer />
    </ReduxProvider>
  );
}
