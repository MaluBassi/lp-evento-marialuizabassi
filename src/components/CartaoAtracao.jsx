import { Mountain, Medal, Shirt, ArrowDownRight } from 'lucide-react'

function CartaoAtracao({
  nome,
  nivel,
  altimetria,
  itens,
  preco,
  ingresso,
  descricao,
  destaque,
  onSelecionar,
}) {
  return (
    <article
      className={`group relative flex h-full flex-col justify-between rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${
        destaque
          ? 'border-destaque/45 bg-gradient-to-b from-destaque/10 via-white/[0.05] to-white/[0.02] shadow-[0_8px_32px_rgba(250,204,21,0.12)] hover:shadow-[0_14px_40px_rgba(250,204,21,0.2)]'
          : 'border-white/10 bg-white/[0.04] hover:border-energia/40 hover:bg-white/[0.07] hover:shadow-[0_12px_32px_rgba(249,115,22,0.12)]'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold tracking-wide uppercase ${
              destaque
                ? 'bg-destaque text-slate-950'
                : 'border border-white/15 bg-white/10 text-destaque'
            }`}
          >
            {nivel}
          </span>
          <span className="font-display text-lg font-black text-white">
            {preco}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-black text-white italic">
          {nome}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{descricao}</p>

        <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Mountain className="h-4 w-4 shrink-0 text-energia" aria-hidden="true" />
            <span>{altimetria}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0 items-center gap-1 text-destaque" aria-hidden="true">
              <Shirt className="h-3.5 w-3.5" />
              <Medal className="h-3.5 w-3.5" />
            </div>
            <span>{itens}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onSelecionar(ingresso)}
        className={`mt-6 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
          destaque
            ? 'bg-destaque text-slate-950 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:bg-yellow-300'
            : 'border border-white/15 bg-white/5 text-white hover:border-destaque hover:bg-destaque hover:text-slate-950'
        }`}
      >
        Selecionar percurso
        <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
      </button>
    </article>
  )
}

export default CartaoAtracao
