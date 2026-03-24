import Image from "next/image";
import styles from "./page.module.css";
import HelloWord from "./components/HelloWrold";
import HomePage from "./components/Map";

export default function Home() {
  return (
 <>
 <HelloWord/>
 <HomePage/>
 </>
  );
}
