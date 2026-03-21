import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <main style={{ padding: "18rem", fontFamily: "sans-serif",  backgroundColor:'white'}}>
      <h1 style={{color:'black'}}>Hello, World! 👋</h1>
      <p style={{color:'black'}}>My first Next.js app is running!</p>
      <p style={{color:'black'}}>Today is: {new Date().toDateString()}</p>
    </main>
  );
}
