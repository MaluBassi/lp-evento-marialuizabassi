# Relatório de acessibilidade

## Antes --> Mandei o de antes hoje 
- Nota do Lighthouse (mobile):
- Problemas apontados pelo Lighthouse: 
- Problemas apontados pelo axe: 
- Problemas encontrados no teste do teclado: Não havia link para pular o menu de navegação e faltava destaque de foco personalizado (:focus-visible) nos campos e links.

## Depois
- Nota do Lighthouse (mobile): 100
- O que foi corrigido:
  - Adicionado link "Pular para o conteúdo" visível ao focar via teclado;
  - Criada regra :focus-visible no index.css para destacar links, botões e campos;
  - Adicionada media query prefers-reduced-motion para respeitar preferências de movimento;
  - Incluídos atributos autoComplete="name" e autoComplete="email" no formulário;
  - Criada a seção de Perguntas Frequentes com botões semânticos, aria-expanded, aria-controls e atributo hidden.
- O que ainda não está bom (e por quê): Nenhum bloqueio encontrado nos testes automatizados e manuais; todos os critérios do checklist foram atendidos.

## Um problema que a ferramenta NÃO apontou e eu encontrei
Antes da correção, não existia um link "Pular para o conteúdo" no topo da página nem suporte a `prefers-reduced-motion`. O Lighthouse e o axe não marcam isso como erro automático, mas quem navega apenas pelo teclado precisava passar por todos os links do cabeçalho a cada carregamento, e usuários com sensibilidade a movimento sofriam com a rolagem suave forçada.
