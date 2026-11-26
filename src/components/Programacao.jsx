import {
  PackageCheck,
  Flame,
  Flag,
  Zap,
  Footprints,
  Trophy,
  Clock,
} from 'lucide-react'
import { programacao } from '../data/evento'
import Reveal from './Reveal'

const iconesProgramacao = {
  kit: PackageCheck,
  aquecimento: Flame,
  largada10: Flag,
  largada5: Zap,
  caminhada: Footprints,
  show: Trophy,
}

function Programacao() {
  return (
    <section id="programacao" className="relative overflow-hidden bg-fundo px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-energia/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-energia uppercase">
              Cronograma oficial
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
              Programação da Noite
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              Do retiro dos kits ao show de encerramento: cada momento planejado para você viver uma noite inesquecível.
            </p>
          </div>
        </Reveal>

        {/* Linha do tempo vertical */}
        <ol className="relative mt-12 space-y-6 before:absolute before:top-4 before:bottom-4 before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-destaque before:via-energia before:to-destaque/20 before:shadow-[0_0_12px_rgba(250,204,21,0.5)] sm:before:left-1/2 sm:before:-translate-x-px">
          {programacao.map((item, idx) => {
            const Icone = iconesProgramacao[item.icone] || Clock
            const direita = idx % 2 === 1

            return (
              <li key={item.horario} className="relative">
                <Reveal delay={idx * 70}>
                  <div
                    className={`relative flex items-start gap-6 sm:items-center ${
                      direita ? 'sm:flex-row-reverse' : 'sm:flex-row'
                    }`}
                  >
                    {/* Nó luminoso na linha */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-destaque/40 bg-[#0B1124] text-destaque shadow-[0_0_20px_rgba(250,204,21,0.3)] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <Icone className="h-5 w-5" aria-hidden="true" />
                    </div>

                    {/* Card do item */}
                    <div
                      className={`flex-1 sm:w-[calc(50%-3rem)] sm:flex-none ${
                        direita ? 'sm:pl-4' : 'sm:pr-4'
                      }`}
                    >
                      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-destaque/40 hover:bg-white/[0.07]">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-lg bg-destaque px-3 py-1 font-display text-sm font-black text-slate-950 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                            {item.horario}
                          </span>
                          <span className="text-xs font-medium text-slate-400">
                            Etapa 0{idx + 1}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-lg font-bold text-white">
                          {item.atividade}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          {item.detalhe}
                        </p>
                      </div>
                    </div>

                    {/* Espaçador simétrico no desktop */}
                    <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Programacao
