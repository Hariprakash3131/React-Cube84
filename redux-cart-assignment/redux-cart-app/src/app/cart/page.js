"use client";

import { useDispatch, useSelector } from "react-redux";  
//useDispatch() its update to redux state  // useSelector() Read data from the redux store
import { updateQuantity, deleteItem, clearCart } from "@/redux/slices/cartSlice";
import { persistor } from "@/redux/store";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);

  // BONUS Challenge 2: Clear cart AND purge persisted storage
  const handleClearAll = async () => {
    dispatch(clearCart());
    await persistor.purge(); // Clears localStorage too
  };

  if (items.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.empty}>
          <p style={styles.emptyIcon}>🛒</p>
          <h2>Your cart is empty</h2>
          <p style={{ color: "#999" }}>Add some products to get started!</p>
          <Link href="/products" style={styles.shopBtn}>Browse Products →</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛒 Your Cart ({totalItems} items)</h1>

      <div style={styles.layout}>
        {/* Cart Items */}
        <div style={styles.items}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <span style={styles.itemEmoji}>{item.emoji}</span>
              <div style={styles.itemInfo}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>${item.price} each</p>
              </div>

              {/* Quantity Controls */}
              <div style={styles.qtyControls}>
                <button
                  style={styles.qtyBtn}
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                >−</button>
                <span style={styles.qty}>{item.quantity}</span>
                <button
                  style={styles.qtyBtn}
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                >+</button>
              </div>

              <p style={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</p>

              <button
                style={styles.deleteBtn}
                onClick={() => dispatch(deleteItem({ id: item.id }))}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          <div style={styles.summaryRow}>
            <span>Items:</span>
            <span>{totalItems}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Total:</span>
            <strong style={{ color: "#e94560", fontSize: "1.3rem" }}>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <button style={styles.checkoutBtn}>Checkout →</button>

          <button style={styles.clearBtn} onClick={handleClearAll}>
            🗑️ Clear Cart
          </button>

          <div style={styles.persistNote}>
            <p>💡 <strong>Persistence Test:</strong></p>
            <p>Refresh the page — your cart will still be here!</p>
            <code style={styles.code}>localStorage.getItem('persist:root')</code>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "1000px", margin: "0 auto", padding: "32px 20px" },
  heading: { fontSize: "1.8rem", color: "#1a1a2e", marginBottom: "24px" },
  layout: { display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px" },
  items: { display: "flex", flexDirection: "column", gap: "16px" },
  card: {
    background: "white", borderRadius: "12px", padding: "20px",
    display: "flex", alignItems: "center", gap: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  itemEmoji: { fontSize: "2.5rem" },
  itemInfo: { flex: 1 },
  itemName: { margin: 0, color: "#1a1a2e", fontSize: "1rem" },
  itemPrice: { margin: "4px 0 0", color: "#999", fontSize: "0.85rem" },
  qtyControls: { display: "flex", alignItems: "center", gap: "8px" },
  qtyBtn: {
    width: "28px", height: "28px", border: "1px solid #ddd",
    borderRadius: "6px", background: "white", cursor: "pointer",
    fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
  },
  qty: { fontSize: "1rem", fontWeight: "bold", minWidth: "24px", textAlign: "center" },
  subtotal: { fontWeight: "bold", color: "#1a1a2e", minWidth: "60px", textAlign: "right" },
  deleteBtn: {
    background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", padding: "4px",
  },
  summary: {
    background: "white", borderRadius: "12px", padding: "24px",
    height: "fit-content", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    display: "flex", flexDirection: "column", gap: "16px",
  },
  summaryTitle: { margin: 0, color: "#1a1a2e" },
  summaryRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  checkoutBtn: {
    width: "100%", padding: "14px", background: "#e94560",
    color: "white", border: "none", borderRadius: "8px",
    cursor: "pointer", fontSize: "1rem", fontWeight: "bold",
  },
  clearBtn: {
    width: "100%", padding: "10px", background: "white",
    color: "#e94560", border: "1px solid #e94560", borderRadius: "8px",
    cursor: "pointer", fontSize: "0.9rem",
  },
  persistNote: {
    background: "#fffbf0", borderRadius: "8px", padding: "12px",
    fontSize: "0.8rem", color: "#666",
  },
  code: {
    display: "block", background: "#1a1a2e", color: "#0ff",
    padding: "6px 8px", borderRadius: "4px", marginTop: "6px",
    fontFamily: "monospace", fontSize: "0.75rem",
  },
  empty: {
    textAlign: "center", padding: "80px 20px",
    background: "white", borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  emptyIcon: { fontSize: "4rem", margin: 0 },
  shopBtn: {
    display: "inline-block", marginTop: "16px", padding: "12px 24px",
    background: "#e94560", color: "white", borderRadius: "8px",
    textDecoration: "none", fontWeight: "bold",
  },
};
