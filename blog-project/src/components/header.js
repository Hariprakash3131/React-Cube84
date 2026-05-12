export default function Header(){
    return(

       <header className="flex justify-between items-center px-6 bg-white rounded-xl border border-gray-200 h-18">
        <nav className="flex gap-8 items-center">
             <a href="#" className="pb-1 text-sm font-medium text-gray-600 border-b-2 transition-colors hover:text-black border-transprent hover:border-black">Home</a>
             <a href="#" className="pb-1 text-sm font-medium text-gray-600 border-b-2 transition-colors hover:text-black border-transprent hover:border-black" >Artical</a>
        </nav>
        <div className="flex gap-8 items-center font-medium">
            <div>

            </div>
        </div>
       </header>
    )
}