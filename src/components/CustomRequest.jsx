import { useState } from "react"

export default function CustomRequest() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      // For demo, we'll create an order with custom notes
      const res = await fetch(`${base}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [],
          customer: { name, email, notes: message },
          total_eur: 0,
          status: 'pending'
        })
      })
      if (res.ok) setSent(true)
    } catch (e) {
      // ignore for demo
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="custom" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Request a Custom Piece</h2>
            <p className="text-slate-600 mt-2 max-w-xl">Tell us about your idea — dimensions, materials, the occasion — and we’ll reply with options and a quote.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li>Wood, acrylic and small metal work</li>
              <li>Laser cutting and engraving</li>
              <li>Sublimation and vinyl plotter cutting</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="grid gap-4">
              <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Your name" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-300" />
              <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-300" />
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required placeholder="Describe your idea" rows={5} className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-300" />
              <button disabled={loading} className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">{loading ? 'Sending…' : 'Send Request'}</button>
              {sent && <p className="text-green-700 text-sm">Thanks! We’ll get back to you soon.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
