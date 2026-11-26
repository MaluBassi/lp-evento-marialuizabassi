# Relatório de acessibilidade

## Antes --> Mandei o de antes hoje 
- Nota do Lighthouse (mobile):
- Problemas apontados pelo Lighthouse: 
- Problemas apontados pelo axe: 
- Problemas encontrados no teste do teclado: Não havia link para pular o menu de navegação e faltava destaque de foco personalizado (:focus-visible) nos campos e links.

# Depois
- Nota do Lighthouse: 98 (Desempenho) / 100 (Acessibilidade)
- O que foi corrigido:
  - Adicionado link "Pular para o conteúdo" visível ao focar via teclado;
  - Criada regra :focus-visible no index.css para destacar links, botões e campos;
  - Adicionada media query prefers-reduced-motion para respeitar preferências de movimento;
  - Incluídos atributos autoComplete="name" e autoComplete="email" no formulário;
  - Criada a seção de Perguntas Frequentes com botões semânticos, aria-expanded, aria-controls e atributo hidden.
- O que ainda não está bom (e por quê): Na acessibilidade, nenhum bloqueio foi encontrado nos testes automatizados e todos os critérios aplicáveis foram atendidos (100/100), restando apenas a validação manual de navegação por teclado, ordem de foco e leitores de tela. No desempenho (98/100), o carregamento do Google Fonts bloqueia a renderização inicial (FCP/LCP em 1,8 s) e a imagem externa do Unsplash (312 KiB) pode ser mais compactada.

## Um problema que a ferramenta NÃO apontou e eu encontrei
Antes da correção, não existia um link "Pular para o conteúdo" no topo da página nem suporte a `prefers-reduced-motion`. O Lighthouse e o axe não marcam isso como erro automático, mas quem navega apenas pelo teclado precisava passar por todos os links do cabeçalho a cada carregamento, e usuários com sensibilidade a movimento sofriam com a rolagem suave forçada.
