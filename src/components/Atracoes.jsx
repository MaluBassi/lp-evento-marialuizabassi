import { percursos } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'
import Reveal from './Reveal'

function Atracoes({ onSelecionarPercurso }) {
  return (
    <section id="percursos" className="relative overflow-hidden bg-superficie px-4 py-20 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-destaque/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold tracking-widest text-destaque uppercase">
                Modalidades
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white italic sm:text-4xl">
                Escolha o seu Percurso
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Do desafio dos 10 km à categoria Kids: clique em qualquer modalidade para ir direto para a inscrição já preenchida.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {percursos.map((percurso, idx) => (
            <Reveal key={percurso.nome} delay={idx * 80}>
              <CartaoAtracao
                nome={percurso.nome}
                nivel={percurso.nivel}
                altimetria={percurso.altimetria}
                itens={percurso.itens}
                preco={percurso.preco}
                ingresso={percurso.ingresso}
                descricao={percurso.descricao}
                destaque={percurso.destaque}
                onSelecionar={onSelecionarPercurso}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Atracoes
