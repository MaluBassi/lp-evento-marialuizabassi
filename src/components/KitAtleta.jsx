import { Shirt, Medal, Cpu, Droplets, Sparkles } from 'lucide-react'
import { kitItens } from '../data/evento'
import Reveal from './Reveal'

const iconesKit = {
  camiseta: Shirt,
  medalha: Medal,
  chip: Cpu,
  hidratacao: Droplets,
}

function KitAtleta() {
  return (
    <section id="kit" className="relative overflow-hidden bg-fundo px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-destaque/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-energia uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Experiência completa
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
                Kit do Atleta
              </h2>
            </div>
            <span className="inline-flex items-center rounded-full border border-destaque/30 bg-destaque/10 px-4 py-1.5 text-xs font-bold text-destaque">
              Retirada no dia do evento a partir das 16h
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kitItens.map((item, idx) => {
            const Icone = iconesKit[item.id] || Shirt
            return (
              <Reveal key={item.id} delay={idx * 80}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-destaque/40 hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-destaque/20 to-energia/20 text-destaque ring-1 ring-destaque/30 transition-transform duration-300 group-hover:scale-110">
                      <Icone className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.descricao}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KitAtleta
