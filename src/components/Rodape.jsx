import { Zap, MapPin, Calendar } from 'lucide-react'
import { evento } from '../data/evento'

const linksRapidos = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#programacao', label: 'Programação' },
  { href: '#percursos', label: 'Percursos' },
  { href: '#kit', label: 'Kit do Atleta' },
  { href: '#lotes', label: 'Status dos Lotes' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#inscricao', label: 'Inscrição' },
]

function Rodape() {
  return (
    <footer className="border-t border-white/10 bg-fundo px-4 pt-14 pb-10 text-slate-300 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-destaque to-energia text-slate-950">
                <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-black text-white italic">
                {evento.nome}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {evento.slogan} Uma noite de esporte, música e solidariedade no coração de Osvaldo Cruz/SP.
            </p>

            <div className="mt-4 space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-destaque" aria-hidden="true" />
                {evento.data}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-energia" aria-hidden="true" />
                {evento.local}
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-xs font-bold tracking-widest text-destaque uppercase">
              Navegação rápida
            </h3>
            <nav
              aria-label="Links do rodapé"
              className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
            >
              {linksRapidos.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-destaque"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>{evento.local}</p>
          <p className="font-medium text-slate-300">
            Evento fictício criado para fins didáticos
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
