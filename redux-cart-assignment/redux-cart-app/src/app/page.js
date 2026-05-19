import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>🛒 Redux Persist Cart</h1>
        <p style={styles.subtitle}>
          Add items to your cart — they'll survive page refreshes thanks to{" "}
          <strong>redux-persist</strong>!
        </p>
        <div style={styles.buttons}>
          <Link href="/products" style={styles.btnPrimary}>
            Browse Products →
          </Link>
          <Link href="/cart" style={styles.btnSecondary}>
            View Cart
          </Link>
        </div>

        <div style={styles.infoBox}>
          <h3>🎯 What's Implemented:</h3>
          <ul style={styles.list}>
            <li>✅ <strong>Task 1:</strong> Redux store with <code>redux-persist</code></li>
            <li>✅ <strong>Task 2:</strong> Provider wrapped with <code>PersistGate</code></li>
            <li>✅ Cart persists across page refreshes</li>
            <li>✅ LocalStorage saves cart state automatically</li>
          </ul>
        </div>

        <div style={styles.tipBox}>
          <p>💡 <strong>Test it:</strong> Add items → Refresh page → Cart is still there!</p>
          <p>🔍 <strong>Check localStorage:</strong> Open DevTools (F12) → Console → type:</p>
          <code style={styles.code}>JSON.parse(localStorage.getItem('persist:root'))</code>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "800px", margin: "0 auto", padding: "40px 20px" },
  hero: {
    background: "white",
    borderRadius: "16px",
    padding: "48px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  title: { fontSize: "2.5rem", color: "#1a1a2e", marginBottom: "16px" },
  subtitle: { fontSize: "1.1rem", color: "#666", marginBottom: "32px", lineHeight: 1.6 },
  buttons: { display: "flex", gap: "16px", justifyContent: "center", marginBottom: "40px" },
  btnPrimary: {
    background: "#e94560", color: "white", padding: "14px 28px",
    borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1rem",
  },
  btnSecondary: {
    background: "#1a1a2e", color: "white", padding: "14px 28px",
    borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1rem",
  },
  infoBox: {
    background: "#f0f8ff", border: "1px solid #b3d9ff",
    borderRadius: "12px", padding: "24px", textAlign: "left", marginBottom: "20px",
  },
  list: { lineHeight: 2, paddingLeft: "20px" },
  tipBox: {
    background: "#fffbf0", border: "1px solid #ffd700",
    borderRadius: "12px", padding: "20px", textAlign: "left", fontSize: "0.9rem",
  },
  code: {
    display: "block", background: "#1a1a2e", color: "#0ff",
    padding: "8px 12px", borderRadius: "6px", marginTop: "8px", fontFamily: "monospace",
  },
};
