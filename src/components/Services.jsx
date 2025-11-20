import { PenTool, Ruler, Scissors, Flame, Brush } from "lucide-react"

const services = [
  {
    icon: <Scissors className="h-5 w-5" />, title: "Laser Cutting",
    desc: "Precision cutting for wood, acrylic and small metal parts."
  },
  {
    icon: <Flame className="h-5 w-5" />, title: "Laser Engraving",
    desc: "Crisp, permanent engraving for gifts, plaques and signage."
  },
  {
    icon: <Brush className="h-5 w-5" />, title: "Sublimation",
    desc: "Full‑color transfers for mugs, textiles and coated items."
  },
  {
    icon: <PenTool className="h-5 w-5" />, title: "Personalization",
    desc: "Names, dates and custom messages on any compatible product."
  },
  {
    icon: <Ruler className="h-5 w-5" />, title: "Plotter Cutting",
    desc: "Silhouette vinyl cutting for decals, labels and packaging."
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Services</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">From one‑off gifts to small series, we bring your ideas to life using modern techniques and a careful artisan touch.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
