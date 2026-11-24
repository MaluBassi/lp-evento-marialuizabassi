import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Lote 1", valor: 120 },
  { rotulo: "Lote 2", valor: 80 },
  { rotulo: "VIP", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    // Limpa o canvas antes de desenhar (bom para o desafio de atualizar valores)
    ctx.clearRect(0, 0, 380, 170);
    ctx.font = "14px sans-serif";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220;
      const y = 20 + i * 50;

      // 1. Cor da barra
      ctx.fillStyle = "#1d4ed8";
      // 2. Desenha a barra (x=110, y, largura, altura=30)
      ctx.fillRect(110, y, largura, 30);

      // 3. Cor escura para o texto e escreve o rótulo à esquerda
      ctx.fillStyle = "#111827";
      ctx.fillText(item.rotulo, 10, y + 20);

      // 4. Escreve o valor logo depois do fim da barra
      ctx.fillText(item.valor, 110 + largura + 8, y + 20);
    });
  }, []);

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold">Ingressos Vendidos</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras mostrando ingressos vendidos: Lote 1 com 120, Lote 2 com 80 e VIP com 45."
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;
