import { useState } from 'react'

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="w-full">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Placeholder para alinear bien en desktop */}
                <div className="hidden md:block w-6" />

                <button
                    className="md:hidden text-xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <div
                    className={`flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium ${open ? 'flex' : 'hidden'} md:flex`}
                >
                    <a href="#about" className="hover:text-black">About</a>
                    <a href="#projects" className="hover:text-black">Projects</a>
                    <a href="#contact" className="hover:text-black">Contact</a>
                </div>
            </div>
        </nav>
    )
}
