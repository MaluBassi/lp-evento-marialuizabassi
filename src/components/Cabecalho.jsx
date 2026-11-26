import { useEffect, useState } from 'react'
import { Menu, X, Zap, ArrowRight } from 'lucide-react'
import { evento } from '../data/evento'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#programacao', label: 'Programação' },
  { href: '#percursos', label: 'Percursos' },
  { href: '#kit', label: 'Kit' },
  { href: '#lotes', label: 'Lotes' },
  { href: '#duvidas', label: 'Dúvidas' },
]

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    function aoRolar() {
      setRolou(window.scrollY > 24)
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || menuAberto
          ? 'border-b border-white/10 bg-[#070B19]/85 shadow-lg shadow-black/30 backdrop-blur-xl'
          : 'border-b border-transparent bg-[#070B19]/50 backdrop-blur-md'
      }`}
    >
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-destaque focus:px-4 focus:py-3 focus:font-bold focus:text-slate-950"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a
          href="#"
          className="group flex items-center gap-2.5 rounded-lg py-1 transition"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-destaque to-energia text-slate-950 shadow-[0_0_18px_rgba(250,204,21,0.4)] transition-transform duration-300 group-hover:scale-105">
            <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-black tracking-tight text-white italic sm:text-lg">
            {evento.nome.replace(' OC', '')}{' '}
            <span className="text-destaque">OC</span>
          </span>
        </a>

        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-destaque"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#inscricao"
            className="hidden items-center gap-1.5 rounded-xl bg-destaque px-4 py-2.5 text-sm font-extrabold text-slate-950 shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_0_26px_rgba(250,204,21,0.55)] sm:inline-flex"
          >
            Inscrever-se
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuAberto((atual) => !atual)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
          >
            {menuAberto ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuAberto && (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-[#070B19]/95 px-4 pt-3 pb-5 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className="flex min-h-11 items-center rounded-xl px-4 font-medium text-slate-200 transition hover:bg-white/5 hover:text-destaque"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setMenuAberto(false)}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-destaque px-4 py-3 font-extrabold text-slate-950 shadow-[0_0_20px_rgba(250,204,21,0.35)]"
            >
              Inscrever-se
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Cabecalho
