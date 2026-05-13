"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/redux/slices/cartSlice";
import Link from "next/link";

const CartPage = () => {
  // Get cart data from Redux store
  const { items, totalItems, totalPrice } = useSelector(
    (state) => state.cart
  );

  // useDispatch hook to dispatch Redux actions
  const dispatch = useDispatch();

  // Handler to remove item from cart
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Handler to update item quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  // Handler to clear entire cart
  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart());
    }
  };

  // Show empty cart message if no items
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Shopping Cart
          </h1>

          {/* Empty cart state */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Shopping Cart
        </h1>

        {/* Cart items section */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          {/* Header row for cart table */}
          <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-gray-200 font-bold text-gray-800 border-b">
            <div>Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Subtotal</div>
            <div className="text-center">Action</div>
          </div>

          {/* Map through cart items and display each one */}
          {items.map((item) => (
            <div
              key={item.id}
              className="md:grid md:grid-cols-5 md:gap-4 p-4 border-b flex flex-col gap-2 md:gap-0"
            >
              {/* Product name */}
              <div className="font-semibold text-gray-800">
                <span className="md:hidden text-gray-600">Product: </span>
                {item.name}
              </div>

              {/* Product price */}
              <div className="text-center text-gray-700">
                <span className="md:hidden text-gray-600">Price: </span>$
                {item.price}
              </div>

              {/* Quantity controls */}
              <div className="flex justify-center items-center gap-2">
                <span className="md:hidden text-gray-600">Qty: </span>
                {/* Decrease quantity button */}
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                >
                  -
                </button>

                {/* Current quantity display */}
                <span className="px-4 font-semibold">{item.quantity}</span>

                {/* Increase quantity button */}
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>

              {/* Subtotal (price × quantity) */}
              <div className="text-center font-semibold text-green-600">
                <span className="md:hidden text-gray-600">Subtotal: </span>$
                {(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove button */}
              <div className="text-center">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart summary section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {/* Total items and total price display */}
          <div className="flex justify-between items-center mb-6 pb-6 border-b-2">
            <div className="text-xl font-semibold text-gray-800">
              Total Items: <span className="text-2xl text-blue-600">{totalItems}</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">
              Total: <span className="text-3xl text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 flex-wrap">
            {/* Clear cart button */}
            <button
              onClick={handleClearCart}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg flex-1 md:flex-none"
            >
              Clear Cart
            </button>

            {/* Continue shopping button */}
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex-1 md:flex-none text-center"
            >
              Continue Shopping
            </Link>

            {/* Checkout button (for future implementation) */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex-1 md:flex-none">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
