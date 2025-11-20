import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Catalog from './components/Catalog'
import CustomRequest from './components/CustomRequest'

function App() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  const addToCart = (p) => {
    setCart((c) => {
      const existing = c.find((i) => i.title === p.title)
      if (existing) return c.map((i) => i.title === p.title ? { ...i, quantity: i.quantity + 1 } : i)
      return [...c, { ...p, quantity: 1 }]
    })
    setOpen(true)
  }

  const total = cart.reduce((a, b) => a + (b.price || 0) * b.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onCartClick={() => setOpen(true)} />
      <main>
        <Hero />
        <Catalog onAdd={addToCart} />
        <Services />
        <CustomRequest />
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/workshop.jpg" alt="Leiriarte workshop" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Family‑owned, proudly local</h2>
              <p className="mt-3 text-slate-600">Based in Leiria, Portugal, we’re a small team who love turning ideas into beautiful tangible pieces. Whether it’s a wedding gift, company signage or a custom prototype, we craft it with care.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-50 border">10+ years</div>
                <div className="p-4 rounded-xl bg-slate-50 border">Fast quotes</div>
                <div className="p-4 rounded-xl bg-slate-50 border">Worldwide shipping</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Cart Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button className="text-slate-500" onClick={() => setOpen(false)}>Close</button>
            </div>
            <div className="mt-4 space-y-4 flex-1 overflow-auto">
              {cart.length === 0 && <p className="text-slate-600">Your cart is empty.</p>}
              {cart.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <img src={item.images?.[0] || '/placeholder-product.jpg'} className="w-16 h-16 rounded object-cover border" />
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-slate-600">€{(item.price || 0).toFixed(2)} × {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCart((c)=>c.map(i=> i.title===item.title? {...i, quantity: Math.max(1, i.quantity-1)}:i))} className="px-2 py-1 border rounded">-</button>
                    <button onClick={() => setCart((c)=>c.map(i=> i.title===item.title? {...i, quantity: i.quantity+1}:i))} className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Checkout</button>
            </div>
          </div>
        </div>
      )}

      <footer className="py-10 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Leiriarte • Leiria, Portugal</p>
          <p>Custom gifts • Laser cutting & engraving • Sublimation • Plotter cutting</p>
        </div>
      </footer>
    </div>
  )
}

export default App
