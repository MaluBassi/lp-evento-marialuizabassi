import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { perguntas } from '../data/evento'
import Reveal from './Reveal'

function PerguntasFrequentes() {
  const [abertaId, setAbertaId] = useState(null)

  function alternar(id) {
    setAbertaId((atual) => (atual === id ? null : id))
  }

  return (
    <section id="duvidas" className="relative bg-fundo px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-energia uppercase">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Tire suas dúvidas
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
              Perguntas Frequentes
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 space-y-4">
          {perguntas.map((item, idx) => {
            const estaAberta = abertaId === item.id

            return (
              <Reveal key={item.id} delay={idx * 70}>
                <div
                  className={`overflow-hidden rounded-2xl border backdrop-blur-md transition-colors duration-300 ${
                    estaAberta
                      ? 'border-destaque/40 bg-white/[0.06]'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={estaAberta}
                      aria-controls={item.id}
                      onClick={() => alternar(item.id)}
                      className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-base font-bold text-white transition-colors hover:text-destaque sm:text-lg"
                    >
                      <span>{item.pergunta}</span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                          estaAberta
                            ? 'rotate-180 border-destaque/40 bg-destaque text-slate-950'
                            : 'border-white/10 bg-white/5 text-slate-300'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={item.id}
                    aria-hidden={!estaAberta}
                    className={`grid transition-all duration-300 ease-out ${
                      estaAberta ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                        <p>{item.resposta}</p>
                      </div>
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

export default PerguntasFrequentes
