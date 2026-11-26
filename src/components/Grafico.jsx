import { Ticket, Flame, CheckCircle2, Lock } from 'lucide-react'
import { lotes } from '../data/evento'
import Reveal from './Reveal'

function Grafico() {
  const totalVendidos = lotes.reduce((acc, lote) => acc + lote.vendidos, 0)
  const totalCapacidade = lotes.reduce((acc, lote) => acc + lote.capacidade, 0)

  return (
    <section id="lotes" className="relative overflow-hidden bg-superficie px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-energia/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-destaque uppercase">
                <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
                Ingressos vendidos
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
                Status dos Lotes
              </h2>
            </div>

            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md">
              <Flame className="h-5 w-5 text-energia" aria-hidden="true" />
              <div className="text-sm">
                <span className="font-bold text-white">{totalVendidos}</span>{' '}
                <span className="text-slate-400">
                  de {totalCapacidade} vagas iniciais preenchidas
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5">
          {lotes.map((lote, idx) => {
            const percentual = Math.min(
              100,
              Math.round((lote.vendidos / lote.capacidade) * 100)
            )
            const esgotado = !lote.disponivel

            return (
              <Reveal key={lote.id} delay={idx * 90}>
                <div
                  className={`rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ${
                    esgotado
                      ? 'border-white/10 bg-white/[0.02] opacity-85'
                      : 'border-white/15 bg-white/[0.05] hover:border-destaque/40 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-black text-white italic">
                        {lote.rotulo}
                      </h3>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase ${
                          esgotado
                            ? 'border border-rose-500/30 bg-rose-500/15 text-rose-300'
                            : 'border border-emerald-400/30 bg-emerald-500/15 text-emerald-300'
                        }`}
                      >
                        {esgotado ? (
                          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {lote.status}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-sm text-slate-400">Valor:</span>
                      <span className="font-display text-xl font-black text-destaque">
                        {lote.preco}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-slate-300">{lote.descricao}</p>

                  {/* Barra de progresso estilizada */}
                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">
                        {lote.vendidos} ingressos vendidos
                      </span>
                      <span
                        className={
                          esgotado ? 'text-rose-300' : 'text-destaque'
                        }
                      >
                        {percentual}% preenchido
                      </span>
                    </div>

                    <div
                      role="progressbar"
                      aria-label={`Progresso de vendas do ${lote.rotulo}`}
                      aria-valuenow={percentual}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="h-3.5 w-full overflow-hidden rounded-full border border-white/10 bg-[#070B19]"
                    >
                      <div
                        style={{ width: `${percentual}%` }}
                        className={`h-full rounded-full transition-all duration-700 ${
                          esgotado
                            ? 'bg-gradient-to-r from-rose-500 to-rose-400'
                            : 'bg-gradient-to-r from-energia via-amber-400 to-destaque shadow-[0_0_16px_rgba(250,204,21,0.55)]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Grafico
