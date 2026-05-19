"use client";

import { useDispatch, useSelector } from "react-redux";

//useDispatch() its update to redux state  // useSelector() Read data from the redux store
import { addToCart } from "@/redux/slices/cartSlice";

//addToCart importing the redux action


// 5 static products
const PRODUCTS = [
  { id: 1, name: "Laptop Pro", price: 999, emoji: "💻", category: "Electronics" },
  { id: 2, name: "Wireless Headphones", price: 149, emoji: "🎧", category: "Electronics" },
  { id: 3, name: "Mechanical Keyboard", price: 89, emoji: "⌨️", category: "Accessories" },
  { id: 4, name: "4K Webcam", price: 79, emoji: "📷", category: "Accessories" },
  { id: 5, name: "USB-C Hub", price: 49, emoji: "🔌", category: "Accessories" },
  { id: 6, name: "Monitor Stand", price: 35, emoji: "🖥️", category: "Furniture" },
];

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getCartQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛍️ Products</h1>
      <p style={styles.sub}>Click "Add to Cart" — then refresh the page to test persistence!</p>

      <div style={styles.grid}>
        {PRODUCTS.map((product) => {
          const qty = getCartQty(product.id);
          return (
            <div key={product.id} style={styles.card}>
              <div style={styles.emoji}>{product.emoji}</div>
              <span style={styles.category}>{product.category}</span>
              <h3 style={styles.name}>{product.name}</h3>
              <p style={styles.price}>${product.price}</p>

              <button
                style={styles.btn}
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>

              {qty > 0 && (
                <div style={styles.inCart}>✅ {qty} in cart</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "1000px", margin: "0 auto", padding: "32px 20px" },
  heading: { fontSize: "2rem", color: "#1a1a2e", marginBottom: "8px" },
  sub: { color: "#666", marginBottom: "32px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "white", borderRadius: "12px",
    padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    display: "flex", flexDirection: "column", gap: "8px",
    transition: "transform 0.2s",
  },
  emoji: { fontSize: "3rem" },
  category: {
    fontSize: "0.75rem", color: "#999", textTransform: "uppercase",
    letterSpacing: "1px", fontWeight: "bold",
  },
  name: { fontSize: "1.1rem", color: "#1a1a2e", margin: "4px 0" },
  price: { fontSize: "1.4rem", fontWeight: "bold", color: "#e94560", margin: 0 },
  btn: {
    marginTop: "12px", padding: "10px 0",
    background: "#1a1a2e", color: "white",
    border: "none", borderRadius: "8px",
    cursor: "pointer", fontSize: "0.95rem", fontWeight: "bold",
  },
  inCart: {
    textAlign: "center", color: "#16a34a",
    fontSize: "0.85rem", fontWeight: "bold",
    background: "#f0fdf4", borderRadius: "6px", padding: "6px",
  },
};
