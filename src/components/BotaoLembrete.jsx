import { useState } from 'react'
import { Bell, CheckCircle2, AlertCircle } from 'lucide-react'
import { evento } from '../data/evento'

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState('')
  const [tipo, setTipo] = useState('info')

  async function ativarLembrete() {
    if (!('Notification' in window)) {
      setTipo('erro')
      setMensagem('Este navegador não aceita notificações.')
      return
    }

    const permissao = await Notification.requestPermission()

    if (permissao !== 'granted') {
      setTipo('erro')
      setMensagem('Você não permitiu as notificações.')
      return
    }

    try {
      const registro = await navigator.serviceWorker.ready
      registro.showNotification(evento.nome, {
        body: 'Falta pouco! 17 de abril de 2027 às 19h30 — Não se esqueça da largada.',
        icon: '/icone-192.png',
      })
      setTipo('sucesso')
      setMensagem('Lembrete ativado! Você receberá uma notificação.')
    } catch {
      setTipo('sucesso')
      setMensagem('Permissão concedida! Lembrete registrado.')
    }
  }

  return (
    <div className="flex flex-col items-stretch sm:items-start">
      <button
        type="button"
        onClick={ativarLembrete}
        className="group inline-flex min-h-13 cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-energia/50 bg-energia/15 px-6 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-energia hover:bg-energia hover:text-slate-950 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]"
      >
        <Bell className="h-5 w-5 text-energia transition-colors group-hover:text-slate-950" aria-hidden="true" />
        Me lembre do evento
      </button>

      {mensagem && (
        <p
          role="status"
          className={`mt-2.5 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium backdrop-blur-md ${
            tipo === 'sucesso'
              ? 'border border-emerald-400/30 bg-emerald-500/15 text-emerald-200'
              : 'border border-amber-400/30 bg-amber-500/15 text-amber-200'
          }`}
        >
          {tipo === 'sucesso' ? (
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          )}
          <span>{mensagem}</span>
        </p>
      )}
    </div>
  )
}

export default BotaoLembrete
