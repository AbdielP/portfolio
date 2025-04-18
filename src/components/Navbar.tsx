import { useState } from 'react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:block w-6" />

        <button
          className="md:hidden text-xl z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className="hidden md:flex flex-row gap-8 font-medium">
          <a href="#about" className="hover:text-blueSky">About</a>
          <a href="#techs" className="hover:text-blueSky">Tech stack</a>
          <a href="#tools" className="hover:text-blueSky">Tools</a>
          <a href="#projects" className="hover:text-blueSky">Projects</a>
          <a href="#contact" className="hover:text-blueSky">Contact</a>
        </div>
      </div>

      {/* Menú móvil flotante */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 font-medium cursor-pointer">
          <a className="w-full text-center py-3 hover:bg-gray-100 transition-colors" href="#about" onClick={() => setOpen(false)}>About</a>
          <a className="w-full text-center py-3 hover:bg-gray-100 transition-colors" href="#techs" onClick={() => setOpen(false)}>Tech stack</a>
          <a className="w-full text-center py-3 hover:bg-gray-100 transition-colors" href="#tools" onClick={() => setOpen(false)}>Tools</a>
          <a className="w-full text-center py-3 hover:bg-gray-100 transition-colors" href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a className="w-full text-center py-3 hover:bg-gray-100 transition-colors" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}
