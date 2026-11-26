export const evento = {
  nome: 'Corrida Noturna OC',
  slogan: 'Corra sob as luzes da cidade.',
  data: '17 de abril de 2027 (sábado) · largada às 19h30',
  dataISO: '2027-04-17T19:30:00-03:00',
  local: 'Praça Central — Osvaldo Cruz/SP',
  sobre:
    'Percursos de 5 km e 10 km pelas avenidas iluminadas do centro, mais uma caminhada de 3 km para quem quer participar sem correr. Todos os inscritos recebem camiseta refletiva e medalha. Parte do valor das inscrições é doada para a compra de equipamentos do hospital da cidade.',
  impactoSocial:
    'Parte do valor de cada inscrição é revertida diretamente para a compra de novos equipamentos do hospital de Osvaldo Cruz.',
  heroImagem:
    'https://images.unsplash.com/photo-1771166388723-7b418d91e734?auto=format&fit=crop&w=1920&q=80',
}

export const numeros = [
  { id: 'percursos', valor: '3', descricao: 'percursos', detalhe: '10 km, 5 km e Caminhada + Kids' },
  { id: 'participantes', valor: '1.500', descricao: 'participantes', detalhe: 'Atletas iluminando a cidade' },
  { id: 'hidratacao', valor: '6', descricao: 'pontos de hidratação', detalhe: 'Água gelada durante todo o trajeto' },
]

export const programacao = [
  { horario: '16h', atividade: 'Retirada dos kits', detalhe: 'Tenda oficial na Praça Central com apresentação de documento.', icone: 'kit' },
  { horario: '18h30', atividade: 'Aquecimento coletivo', detalhe: 'Alongamento guiado, DJ ao vivo e ativação pré-largada.', icone: 'aquecimento' },
  { horario: '19h30', atividade: 'Largada dos 10 km', detalhe: 'Bateria principal com cronometragem eletrônica por chip.', icone: 'largada10' },
  { horario: '19h40', atividade: 'Largada dos 5 km', detalhe: 'Percurso rápido e plano pelas principais avenidas.', icone: 'largada5' },
  { horario: '19h50', atividade: 'Saída da caminhada', detalhe: 'Ritmo leve de 3 km para famílias, amigos e iniciantes.', icone: 'caminhada' },
  { horario: '21h', atividade: 'Premiação e show ao vivo', detalhe: 'Troféus, celebração e música na arena de chegada.', icone: 'show' },
]

export const percursos = [
  {
    id: '10km',
    nome: '10 km',
    nivel: 'Avançado',
    altimetria: '2 subidas moderadas',
    itens: 'Camiseta + Medalha + Chip',
    preco: 'R$ 80',
    ingresso: '10 km — R$ 80',
    descricao: 'Para quem já corre com frequência; percurso com duas subidas.',
    destaque: true,
  },
  {
    id: '5km',
    nome: '5 km',
    nivel: 'Iniciante',
    altimetria: 'Terreno 100% plano',
    itens: 'Camiseta + Medalha + Chip',
    preco: 'R$ 70',
    ingresso: '5 km — R$ 70',
    descricao: 'Ideal para a primeira prova, todo em terreno plano.',
    destaque: false,
  },
  {
    id: '3km',
    nome: 'Caminhada 3 km',
    nivel: 'Livre',
    altimetria: 'Percurso leve',
    itens: 'Camiseta + Medalha',
    preco: 'R$ 40',
    ingresso: 'Caminhada — R$ 40',
    descricao: 'Sem cronometragem, para fazer em família ou com os amigos.',
    destaque: false,
  },
  {
    id: 'kids',
    nome: 'Kids 500 m',
    nivel: 'Infantil',
    altimetria: 'Circuito fechado às 18h',
    itens: 'Camiseta + Medalha especial',
    preco: 'R$ 25',
    ingresso: 'Kids — R$ 25',
    descricao: 'Para crianças de 6 a 12 anos, às 18h, com medalha especial.',
    destaque: false,
  },
]

export const kitItens = [
  {
    id: 'camiseta',
    titulo: 'Camiseta Refletiva',
    descricao: 'Tecido dry-fit respirável com estampa neon refletiva para máxima visibilidade noturna.',
    tag: 'Alta visibilidade',
  },
  {
    id: 'medalha',
    titulo: 'Medalha Finisher',
    descricao: 'Medalha metálica exclusiva em alto-relevo entregue a todos que cruzarem a chegada.',
    tag: 'Colecionável',
  },
  {
    id: 'chip',
    titulo: 'Número de Peito com Chip',
    descricao: 'Identificação oficial com chip eletrônico de cronometragem para os 5 km e 10 km.',
    tag: 'Tempo oficial',
  },
  {
    id: 'hidratacao',
    titulo: 'Hidratação Completa',
    descricao: '6 pontos estratégicos de água gelada pelo trajeto e reposição na arena de chegada.',
    tag: '6 postos',
  },
]

export const lotes = [
  {
    id: 'lote-1',
    rotulo: 'Lote 1',
    vendidos: 120,
    capacidade: 120,
    preco: 'R$ 60',
    status: 'Esgotado',
    disponivel: false,
    descricao: 'Lote promocional de lançamento encerrado.',
  },
  {
    id: 'lote-2',
    rotulo: 'Lote 2',
    vendidos: 80,
    capacidade: 120,
    preco: 'R$ 70 – R$ 80',
    status: 'Disponível',
    disponivel: true,
    descricao: 'Lote atual com kit completo do atleta garantido.',
  },
  {
    id: 'vip',
    rotulo: 'VIP',
    vendidos: 45,
    capacidade: 60,
    preco: 'R$ 130',
    status: 'Disponível',
    disponivel: true,
    descricao: 'Inclui área exclusiva, massagem pós-prova e kit premium.',
  },
]

export const ingressos = [
  '10 km — R$ 80',
  '5 km — R$ 70',
  'Caminhada — R$ 40',
  'Kids — R$ 25',
]

export const perguntas = [
  {
    id: 'faq-1',
    pergunta: 'Preciso de atestado médico?',
    resposta: 'Não é obrigatório, mas é recomendado.',
  },
  {
    id: 'faq-2',
    pergunta: 'Tem guarda-volumes?',
    resposta: 'Sim, na tenda da organização, ao lado da largada.',
  },
  {
    id: 'faq-3',
    pergunta: 'Posso correr com fone de ouvido?',
    resposta: 'Pode, com volume baixo, para ouvir os avisos.',
  },
]
