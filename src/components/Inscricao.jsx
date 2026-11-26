import { useEffect, useState } from 'react'
import {
  CheckCircle2,
  User,
  Mail,
  Phone,
  Ticket,
  Sparkles,
  X,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'
import { evento, ingressos } from '../data/evento'
import Reveal from './Reveal'

function aplicarMascaraTelefone(valor) {
  const digitos = valor.replace(/\D/g, '').slice(0, 11)
  if (digitos.length <= 2) return digitos ? `(${digitos}` : ''
  if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`
}

function Inscricao({ modalidadeSelecionada }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ingresso, setIngresso] = useState(ingressos[0])
  const [tocados, setTocados] = useState({})
  const [modalAberto, setModalAberto] = useState(false)

  useEffect(() => {
    if (modalidadeSelecionada && ingressos.includes(modalidadeSelecionada)) {
      const id = requestAnimationFrame(() => setIngresso(modalidadeSelecionada))
      return () => cancelAnimationFrame(id)
    }
  }, [modalidadeSelecionada])

  useEffect(() => {
    if (!modalAberto) return
    function aoPressionarTecla(e) {
      if (e.key === 'Escape') {
        setModalAberto(false)
      }
    }
    window.addEventListener('keydown', aoPressionarTecla)
    return () => window.removeEventListener('keydown', aoPressionarTecla)
  }, [modalAberto])

  const nomeValido = nome.trim().length >= 3
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const telefoneDigitos = telefone.replace(/\D/g, '')
  const telefoneValido = telefoneDigitos.length >= 10

  function marcarTocado(campo) {
    setTocados((prev) => ({ ...prev, [campo]: true }))
  }

  function enviar(e) {
    e.preventDefault()
    setTocados({ nome: true, email: true, telefone: true })
    if (!nomeValido || !emailValido || !telefoneValido) return
    setModalAberto(true)
  }

  function novaInscricao() {
    setModalAberto(false)
    setNome('')
    setEmail('')
    setTelefone('')
    setTocados({})
  }

  return (
    <section id="inscricao" className="relative overflow-hidden bg-superficie px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-destaque/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-destaque uppercase">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Garanta sua vaga
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
              Inscrição Online
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Preencha seus dados abaixo para confirmar sua participação na {evento.nome}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={enviar}
            noValidate
            className="mt-8 space-y-5 rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            {/* Nome */}
            <div>
              <label htmlFor="campo-nome" className="block text-sm font-semibold text-slate-200">
                Nome completo
              </label>
              <div className="relative mt-1.5">
                <User
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  id="campo-nome"
                  type="text"
                  name="nome"
                  autoComplete="name"
                  required
                  placeholder="Ex.: Maria Luiza Bassi"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  onBlur={() => marcarTocado('nome')}
                  aria-invalid={tocados.nome && !nomeValido}
                  className={`block min-h-12 w-full rounded-xl border bg-[#070B19]/80 pr-10 pl-10 text-sm text-white placeholder-slate-500 transition ${
                    tocados.nome && !nomeValido
                      ? 'border-rose-500/70'
                      : nomeValido
                        ? 'border-emerald-400/60'
                        : 'border-white/15 focus:border-destaque'
                  }`}
                />
                {nomeValido && (
                  <CheckCircle2
                    className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-emerald-400"
                    aria-hidden="true"
                  />
                )}
              </div>
              {tocados.nome && !nomeValido && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Informe seu nome completo (mínimo 3 letras).
                </p>
              )}
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="campo-email" className="block text-sm font-semibold text-slate-200">
                E-mail
              </label>
              <div className="relative mt-1.5">
                <Mail
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  id="campo-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="voce@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => marcarTocado('email')}
                  aria-invalid={tocados.email && !emailValido}
                  className={`block min-h-12 w-full rounded-xl border bg-[#070B19]/80 pr-10 pl-10 text-sm text-white placeholder-slate-500 transition ${
                    tocados.email && !emailValido
                      ? 'border-rose-500/70'
                      : emailValido
                        ? 'border-emerald-400/60'
                        : 'border-white/15 focus:border-destaque'
                  }`}
                />
                {emailValido && (
                  <CheckCircle2
                    className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-emerald-400"
                    aria-hidden="true"
                  />
                )}
              </div>
              {tocados.email && !emailValido && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Digite um e-mail válido.
                </p>
              )}
            </div>

            {/* Telefone com máscara */}
            <div>
              <label htmlFor="campo-telefone" className="block text-sm font-semibold text-slate-200">
                WhatsApp / Telefone
              </label>
              <div className="relative mt-1.5">
                <Phone
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  id="campo-telefone"
                  type="tel"
                  name="telefone"
                  autoComplete="tel"
                  required
                  placeholder="(18) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(aplicarMascaraTelefone(e.target.value))}
                  onBlur={() => marcarTocado('telefone')}
                  aria-invalid={tocados.telefone && !telefoneValido}
                  className={`block min-h-12 w-full rounded-xl border bg-[#070B19]/80 pr-10 pl-10 text-sm text-white placeholder-slate-500 transition ${
                    tocados.telefone && !telefoneValido
                      ? 'border-rose-500/70'
                      : telefoneValido
                        ? 'border-emerald-400/60'
                        : 'border-white/15 focus:border-destaque'
                  }`}
                />
                {telefoneValido && (
                  <CheckCircle2
                    className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-emerald-400"
                    aria-hidden="true"
                  />
                )}
              </div>
              {tocados.telefone && !telefoneValido && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Informe um telefone com DDD (ex.: (18) 99999-9999).
                </p>
              )}
            </div>

            {/* Modalidade */}
            <div>
              <label htmlFor="campo-ingresso" className="block text-sm font-semibold text-slate-200">
                Modalidade / Ingresso
              </label>
              <div className="relative mt-1.5">
                <Ticket
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-destaque"
                  aria-hidden="true"
                />
                <select
                  id="campo-ingresso"
                  value={ingresso}
                  onChange={(e) => setIngresso(e.target.value)}
                  className="block min-h-12 w-full cursor-pointer rounded-xl border border-white/15 bg-[#070B19]/90 pr-4 pl-10 text-sm font-medium text-white transition focus:border-destaque"
                >
                  {ingressos.map((opcao) => (
                    <option key={opcao} value={opcao}>
                      {opcao}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="group inline-flex min-h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-destaque to-amber-300 px-6 py-3.5 text-base font-extrabold text-slate-950 shadow-[0_0_26px_rgba(250,204,21,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(250,204,21,0.55)]"
            >
              Confirmar inscrição
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </form>
        </Reveal>
      </div>

      {/* Modal bonito de confirmação */}
      {modalAberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-modal-confirmacao"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-md rounded-3xl border border-destaque/40 bg-[#0B1124] p-7 text-white shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <button
              type="button"
              onClick={() => setModalAberto(false)}
              aria-label="Fechar confirmação"
              className="absolute top-4 right-4 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.45)]">
              <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
            </div>

            <h3
              id="titulo-modal-confirmacao"
              className="mt-5 text-center font-display text-2xl font-black text-white italic"
            >
              Inscrição confirmada!
            </h3>
            <p className="mt-2 text-center text-sm text-slate-300">
              Obrigado, <strong className="text-white">{nome}</strong>. Sua vaga na modalidade{' '}
              <strong className="text-destaque">{ingresso}</strong> está garantida!
            </p>

            <div className="mt-6 space-y-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-slate-400">E-mail:</span>
                <span className="truncate font-medium text-slate-100">{email}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-400">WhatsApp:</span>
                <span className="font-medium text-slate-100">{telefone}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-400">Data da largada:</span>
                <span className="font-medium text-destaque">17/04/2027 · 19h30</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={novaInscricao}
                className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-xl bg-destaque px-4 py-2.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
              >
                Concluir
              </button>
              <button
                type="button"
                onClick={() => setModalAberto(false)}
                className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Editar dados
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Inscricao
