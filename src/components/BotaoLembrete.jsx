import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    const permissao = await Notification.requestPermission();

    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    const registro = await navigator.serviceWorker.ready;

    registro.showNotification("Nome do seu evento", {
      body: "Falta pouco! Não se esqueça do nosso evento.",
      icon: "/icone-192.png",
    });

    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={ativarLembrete}
        className="rounded-lg bg-[#ff4726] px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-sm font-medium">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
