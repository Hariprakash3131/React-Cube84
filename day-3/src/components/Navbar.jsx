import Link from "next/link"
function NavbarPage(){
    return(
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'></Link>
          </nav>
    )
}