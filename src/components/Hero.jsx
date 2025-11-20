import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 bg-rose-400/30 blur-3xl rounded-full" />
        <div className="absolute top-40 -left-20 h-96 w-96 bg-amber-400/30 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Personalized gifts crafted with heart in Leiria
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            We design and produce unique pieces in wood, acrylic and metal. Laser cutting & engraving, sublimation and plotter cutting — made for the moments that matter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
              Explore Catalog
            </a>
            <a href="#custom" className="px-5 py-3 rounded-xl border border-slate-300 text-slate-800 hover:bg-white">
              Request a Custom Piece
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Sparkles className="text-amber-500" />
              <span>Laser cut & engraving</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-rose-500" />
              <span>Sublimation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-sky-500" />
              <span>Plotter cutting</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
            <img src="/hero-leiriarte.jpg" alt="Leiriarte crafts" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur p-4 rounded-xl shadow border text-sm">
            Family owned • Since 2015 • Leiria
          </div>
        </div>
      </div>
    </section>
  )
}
