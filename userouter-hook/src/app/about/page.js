"use client";
import { useRouter } from "next/navigation";
export default function AboutPage(){
    const router=useRouter()
    const home=()=>{
        router.push('/')
    }

    return(
        <main>
            <h1>About Page</h1>
            <br/> <br/>
            <button onClick={home}>Go to Home</button>
            <br/> <br/>
            <button onClick={()=>{
                router.back()
            }}>GO Back</button>
            <br/> <br/>
            <footer>Footer</footer>
        </main>
    )
}