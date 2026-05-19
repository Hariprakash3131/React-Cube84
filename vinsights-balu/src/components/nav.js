export default function Navbar(){
    return(
        <nav className="px-6 py-4 md:px-12">
  <div className="flex justify-between items-center mx-auto max-w-7xl">
    <div className="flex gap-2 items-center text-lg font-display font-bold">
      <div className="flex justify-center items-center w-8 h-8 text-sm font-bold text-white bg-gradient-to-br rounded-lg from-purple to-purple-light">V</div>
      <span>VINSIGHTS</span>
    </div>
    <div className="hidden gap-8 items-center text-sm md:flex text-white/70">
      <a href="#services" className="transition-colors hover:text-white">Services</a>
      <a href="#about" className="transition-colors hover:text-white">Industries</a>
      <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
      <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
      <a href="#contact" className="transition-colors hover:text-white">Contact</a>
    </div>
    <button className="px-5 py-2.5 text-sm font-medium rounded-full btn-white">Book Appointment →</button>
  </div>
</nav>
    )
}
