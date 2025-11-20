import { useEffect, useState } from "react"

function ProductCard({ p, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition">
      <div className="aspect-square bg-slate-100 overflow-hidden">
        <img src={p.images?.[0] || "/placeholder-product.jpg"} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-slate-900">{p.title}</h4>
        <p className="text-sm text-slate-600 line-clamp-2 min-h-[2.5rem]">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-slate-900">€{p.price?.toFixed(2)}</span>
          <button onClick={() => onAdd(p)} className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800">Add</button>
        </div>
      </div>
    </div>
  )
}

export default function Catalog({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const sampleIfEmpty = products.length === 0
    ? [
        { title: 'Engraved Wooden Keychain', description: 'Custom name engraving on oak wood.', price: 8.5, category: 'Wood', images: ['/sample-wood.jpg'] },
        { title: 'Acrylic Name Sign', description: 'Laser cut acrylic sign with your name.', price: 24, category: 'Acrylic', images: ['/sample-acrylic.jpg'] },
        { title: 'Personalized Metal Tag', description: 'Durable, precise laser engraving.', price: 12, category: 'Metal', images: ['/sample-metal.jpg'] },
      ]
    : products

  return (
    <section id="catalog" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Catalog</h2>
            <p className="text-slate-600 mt-2">Beautiful, customizable pieces ready to make yours.</p>
          </div>
        </div>

        {loading ? (
          <p className="mt-10 text-slate-600">Loading products…</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleIfEmpty.map((p) => (
              <ProductCard key={p.title} p={p} onAdd={onAdd} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
