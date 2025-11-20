import { ShoppingCart, Menu, Hammer, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Navbar({ onCartClick }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-amber-400 grid place-items-center text-white shadow-lg">
              <Hammer className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base leading-tight font-semibold text-slate-900">Leiriarte</p>
              <p className="text-[11px] -mt-0.5 text-slate-500">Leiria • Portugal</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#catalog" className="hover:text-slate-900">Catalog</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#custom" className="hover:text-slate-900">Custom Work</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onCartClick} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
            </button>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2 text-slate-700">
            <a href="#catalog" onClick={() => setOpen(false)} className="py-2">Catalog</a>
            <a href="#services" onClick={() => setOpen(false)} className="py-2">Services</a>
            <a href="#custom" onClick={() => setOpen(false)} className="py-2">Custom Work</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
          </div>
        )}
      </div>
    </header>
  )
}
