"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter()
  const goAbout=()=>{
    router.push("/about")
  }
  const goContact=()=>{
    router.push('/contact')
  }
  return (
    <main>
      <h1>Home Page</h1>
         <br/> <br/>
      <button onClick={goAbout}> About Page</button>
        <br/> <br/>

        <button onClick={goContact}>Contact Page</button>
       <br/> <br/>

       <footer>Footer</footer>
    </main>
  );
}
