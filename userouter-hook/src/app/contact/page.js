'use client';
import { useRouter } from "next/navigation"
export default function ContactPage(){
     const router=useRouter()
     const homePage=()=>{
        router.push('/')
     }
     const aboutPage=()=>{
        router.push('/about')
     }
    return(
        <main>
            <h1>Contact Page</h1>
            <br/> <br/>
            <button onClick={homePage}>Home</button>
            <br/> <br/>
            <button onClick={aboutPage}>About</button>
            <br/> <br/>
            <footer>Footer</footer>
        </main>
    )
}