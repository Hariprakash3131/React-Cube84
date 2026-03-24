import Image from "next/image";
import styles from "./page.module.css";
 export default function Home() {
   const name='Prakash'
  const skills=['Html','css','js']
  return (
  <main style={{ padding: "18rem", fontFamily: "sans-serif",  backgroundColor:'black'}}>
      {/* <h1 style={{color:'black'}}>Hello, World! 👋</h1>
       <p style={{color:'black'}}>My first Next.js app is running!</p>
       <p style={{color:'black'}}>Today is: {new Date().toDateString()}</p> */
       }
         <div>
      <h1>My Name is:{name}</h1>
      <p>Today I learn Next Js</p>
      <p>My skills:</p>
    <ul>
      {skills.map((s)=>{
      return   <li key={s}>{s}</li>
 })}
    </ul>
    </div>
     </main>
   );
}



  // const name='Subash'
  // const skills=['Html','css','js']
  // return (
  //   <div>
  //     <h1>My Name is:{name}</h1>
  //     <p>Today I learn Next Js</p>
  //     <p>My skills:</p>
  //     <ul>
  //       {skills.map((s)=>{
  //         <li key={s}>{s}</li>
  //       })}
  //     </ul>
  //   </div>

