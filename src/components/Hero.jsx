import { useEffect, useState } from 'react'
import { Calendar, MapPin, ArrowRight, Sparkles, Timer } from 'lucide-react'
import { evento } from '../data/evento'
import BotaoLembrete from './BotaoLembrete'

function calcularTempoRestante(alvoMs) {
  const diff = Math.max(0, alvoMs - Date.now())
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diff / (1000 * 60)) % 60)
  const segundos = Math.floor((diff / 1000) % 60)
  return { dias, horas, minutos, segundos, encerrado: diff === 0 }
}

function formatarDoisDigitos(valor) {
  return String(valor).padStart(2, '0')
}

function Hero() {
  const alvoMs = new Date(evento.dataISO).getTime()
  const [tempo, setTempo] = useState(() => calcularTempoRestante(alvoMs))

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempo(calcularTempoRestante(alvoMs))
    }, 1000)
    return () => clearInterval(intervalo)
  }, [alvoMs])

  const blocosTempo = [
    { rotulo: 'Dias', valor: String(tempo.dias) },
    { rotulo: 'Horas', valor: formatarDoisDigitos(tempo.horas) },
    { rotulo: 'Minutos', valor: formatarDoisDigitos(tempo.minutos) },
    { rotulo: 'Segundos', valor: formatarDoisDigitos(tempo.segundos) },
  ]

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-fundo pt-28 pb-20 text-white sm:pt-32 sm:pb-24">
      {/* Imagem de fundo Unsplash com overlay noturno */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={evento.heroImagem}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B19]/90 via-[#070B19]/75 to-[#070B19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B19] via-[#070B19]/70 to-transparent" />
        {/* Brilhos radiais simulando luzes urbanas noturnas */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-destaque/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-energia/15 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-destaque/30 bg-destaque/10 px-4 py-1.5 text-xs font-bold tracking-wider text-destaque uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Edição Noturna 2027 · Osvaldo Cruz/SP
            </div>

            <h1 className="mt-5 font-display text-4xl font-black tracking-tight text-white uppercase italic sm:text-6xl lg:text-7xl">
              Corrida Noturna{' '}
              <span className="bg-gradient-to-r from-destaque via-amber-300 to-energia bg-clip-text text-transparent">
                OC
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-xl font-semibold text-destaque sm:text-2xl">
              {evento.slogan}
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-200 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:text-base">
              <div className="inline-flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-destaque">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{evento.data}</span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-energia">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{evento.local}</span>
              </div>
            </div>

            {/* Botões lado a lado no desktop */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-start">
              <a
                href="#inscricao"
                className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-destaque to-amber-300 px-7 py-3.5 text-base font-extrabold text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(250,204,21,0.65)]"
              >
                Garantir minha inscrição
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <BotaoLembrete />
            </div>
          </div>

          {/* Contagem Regressiva em tempo real */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-destaque/25 via-transparent to-energia/25 opacity-60 blur-sm"
              />

              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-destaque uppercase">
                  <Timer className="h-4 w-4" aria-hidden="true" />
                  Contagem regressiva
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Inscrições abertas
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-300">
                Faltam exatamente para a largada oficial:
              </p>

              <div
                aria-label={`Contagem regressiva: ${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos e ${tempo.segundos} segundos`}
                className="mt-5 grid grid-cols-4 gap-2.5 sm:gap-3"
              >
                {blocosTempo.map((bloco) => (
                  <div
                    key={bloco.rotulo}
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#070B19]/75 px-2 py-4 text-center shadow-inner"
                  >
                    <span className="font-display text-2xl font-black tracking-tight text-white tabular-nums sm:text-3xl">
                      {bloco.valor}
                    </span>
                    <span className="mt-1 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      {bloco.rotulo}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-300">
                <span>17 abr 2027 · 19h30</span>
                <span className="font-semibold text-energia">Vagas limitadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
