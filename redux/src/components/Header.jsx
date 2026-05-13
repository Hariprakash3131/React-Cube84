"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

// Navbar component with Redux integration
const Header = ({ name, age, gender }) => {
  // useSelector hook to access Redux state
  // state.cart.totalItems gets the total number of items in cart from Redux store
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Left side: App title and welcome message */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">{`Welcome ${name}!`}</h1>
          <span className="text-sm text-blue-200">
            ({age} years, {gender})
          </span>
        </div>

        {/* Right side: Navigation links */}
        <div className="flex items-center gap-6">
          {/* Link to home page */}
          <Link href="/" className="hover:text-blue-200 transition">
            Home
          </Link>

          {/* Link to products page */}
          <Link href="/products" className="hover:text-blue-200 transition">
            Products
          </Link>

          {/* Cart icon with item count badge */}
          <Link
            href="/cart"
            className="relative hover:text-blue-200 transition"
          >
            <span className="text-xl">🛒</span>
            {/* Badge showing total items in cart */}
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 -translate-y-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;