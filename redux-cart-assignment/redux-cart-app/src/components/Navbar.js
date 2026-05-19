"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  // Read totalItems from Redux store (persisted!)
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.brand}>
        🛒 ShopApp
      </Link>
      <div style={styles.links}>
        <Link href="/products" style={styles.link}>
          Products
        </Link>
        <Link href="/cart" style={styles.cartLink}>
          Cart
          {totalItems > 0 && (
            <span style={styles.badge}>{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 32px",
    background: "#1a1a2e",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  brand: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.2s",
  },
  cartLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    position: "relative",
    padding: "6px 14px",
    background: "#e94560",
    borderRadius: "20px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "#ffd700",
    color: "#1a1a2e",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
};
