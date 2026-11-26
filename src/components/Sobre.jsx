import { HeartHandshake, Route, Users, Droplets } from 'lucide-react'
import { evento, numeros } from '../data/evento'
import Reveal from './Reveal'

const iconesMetricas = {
  percursos: Route,
  participantes: Users,
  hidratacao: Droplets,
}

function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-superficie px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-72 w-2xl -translate-x-1/2 rounded-full bg-destaque/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-destaque uppercase">
              Sobre o evento
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
              Energia pelas ruas iluminadas de Osvaldo Cruz
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {evento.sobre}
            </p>
          </div>
        </Reveal>

        {/* Selo/Banner especial de Impacto Social */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-energia/30 bg-gradient-to-r from-energia/15 via-rose-500/10 to-transparent p-5 backdrop-blur-md sm:flex-row sm:items-center sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-energia to-rose-500 text-white shadow-[0_0_24px_rgba(249,115,22,0.4)]">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-energia/20 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-orange-300 uppercase">
                Impacto Social · Corrida Solidária
              </span>
              <p className="mt-1.5 text-sm font-medium text-slate-100 sm:text-base">
                {evento.impactoSocial}
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 Cards de Métricas */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {numeros.map((item, idx) => {
            const Icone = iconesMetricas[item.id] || Route
            return (
              <Reveal key={item.descricao} delay={idx * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-destaque/40 hover:bg-white/[0.07] hover:shadow-[0_12px_36px_rgba(250,204,21,0.12)]">
                  <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl border border-destaque/25 bg-destaque/10 text-destaque transition-transform duration-300 group-hover:scale-110">
                    <Icone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-display text-4xl font-black text-white italic">
                    {item.valor}
                  </p>
                  <p className="mt-1 text-base font-bold text-destaque uppercase tracking-wide">
                    {item.descricao}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-400">
                    {item.detalhe}
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

export default Sobre
