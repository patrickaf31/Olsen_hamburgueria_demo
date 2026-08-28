# Direção visual — Olsen Cafeteria

## Referência de ground truth
O arquivo `DESIGN.md` enviado pelo usuário é a referência visual principal. A implementação deve preservar sua gramática de brasserie noturna: canvas escuro em preto oliva, verde floresta como tinta tipográfica, creme quente para as áreas de respiro e amarelo-limão como único acento funcional. A composição deve ser editorial, assimétrica e centrada em fotografia gastronômica, com chrome plano, cantos praticamente retos e tipografia com tracking amplo. O conteúdo e a marca serão adaptados de Limón para Olsen, sem replicar o nome ou qualquer elemento proprietário da referência.

## Design Movement
Brasserie editorial contemporânea com influência de identidade gastronômica europeia e direção de arte de campanha noturna. A marca deve parecer uma casa local com repertório, não uma rede genérica.

## Core Principles
A fotografia de comida é o herói e deve ocupar grandes áreas sem molduras. O contraste entre o canvas escuro, o creme quente e o amarelo-limão cria a hierarquia no lugar de sombras e gradientes. A tipografia usa escala e tracking generoso para funcionar como sinalização. A navegação e os CTAs são diretos, com poucos elementos e bordas quase retas.

## Color Philosophy
O preto oliva cria intimidade e faz o amarelo-limão parecer luz de letreiro. O verde floresta injeta uma camada botânica e artesanal na identidade, evitando um visual corporativo. O creme quente funciona como papel e pausa visual para o conteúdo de cardápio. O amarelo-limão é deliberadamente raro: aparece em ações, destaques e pequenos sinais de orientação, nunca como decoração espalhada.

## Layout Paradigm
One-page editorial com narrativa vertical e alternância de superfícies. O hero trabalha com texto à esquerda e fotografia deslocada à direita; o menu usa uma matriz de cards fotográficos sem chrome; a seção de experiência usa texto e imagem em desequilíbrio controlado; a localização fecha o percurso em um painel de informação com CTA. O conteúdo não deve ficar preso em uma sequência de blocos centralizados idênticos.

## Signature Elements
O símbolo da Olsen é uma chama/chapa combinada com um grão de café, usado no header e no favicon. Uma linha de navegação fina com pequenos rótulos em caixa alta costura as seções. O amarelo-limão surge em botões, sublinhados e um selo de horário como se fosse iluminação refletida na fotografia.

## Interaction Philosophy
As interações devem ser rápidas e objetivas. Links deslizam poucos pixels ou ganham sublinhado, botões comprimem levemente no clique e imagens ampliam com suavidade sem mudar o layout. O menu mobile abre como painel lateral escuro, mantendo o mesmo vocabulário de navegação e oferecendo foco claro para teclado.

## Animation
As entradas de seção usam opacidade e deslocamento vertical curto, com stagger discreto em cards do cardápio. O hero pode receber uma deriva quase imperceptível na imagem, como câmera editorial, mas sem competir com a leitura. Transições ficam abaixo de 300 ms e respeitam `prefers-reduced-motion`.

## Typography System
Usar `DM Sans` para UI e corpo, com pesos 400, 500, 600 e 700; usar `Space Grotesk` para display e wordmark textual de apoio, mantendo tracking positivo. Display entre 64 e 86 px em desktop, 48 e 58 px em mobile, sempre com line-height compacto e letter-spacing amplo. Labels e CTAs em 12–14 px, caixa alta e tracking entre 0.12em e 0.18em. O texto corrido permanece entre 16 e 19 px com largura de leitura controlada.

## Brand Essence
A Olsen é uma pausa urbana para quem quer café bem feito, hambúrguer de verdade e uma atmosfera que convida a ficar. Personalidade: **noturna, artesanal, confiante**.

## Brand Voice
Headlines são curtas, sensoriais e sem clichês. CTAs são verbos claros, com a energia de quem conhece o produto. Microcopy fala como uma casa segura do que serve, sem prometer exageros.

Exemplos: “Chapa quente. Café passado. Fome resolvida.” e “Entra pelo aroma. Fica pelo primeiro mordisco.”

## Wordmark & Logo
O wordmark textual “OLSEN” aparece em caixa alta com tracking amplo e peso médio, mas o reconhecimento principal vem de um símbolo próprio: uma chama estilizada que também sugere grão de café. O símbolo deve ser monocromático em amarelo-limão e funcionar em fundo transparente, com presença visível no header e no favicon.

## Signature Brand Color
**Olsen Lemon — `#f7ea48`**. É o amarelo da chapa acesa e do primeiro gole de café ao fim do dia; deve ser usado como sinal de ação e energia, não como preenchimento decorativo.

## Conteúdo inicial
A página inclui navegação âncora para Início, Cardápio, A casa e Contato; hero com CTA para pedir; cards de destaques com hambúrguer, café e batatas; bloco editorial sobre a experiência Olsen; faixa visual de ambiente; contato com horário, localização e Instagram; e CTA final para abrir o pedido em canal externo quando o usuário substituir o link de exemplo.

## Nota sobre os assets do usuário
Os links públicos fornecidos foram consultados. O álbum do iCloud permaneceu em carregamento na sessão automatizada e o Instagram redirecionou para login, portanto não foi possível extrair os arquivos originais. Para não bloquear o desenvolvimento, foram preparados assets editoriais próprios coerentes com o design anexado; os links originais permanecem registrados para substituição futura caso o usuário queira apontar para os arquivos reais.


## Reformulação aprovada — Enxaimel de Afeto

A nova direção substitui o clima de brasserie noturna. A Olsen passa a ser apresentada como uma casa de café acolhedora em Pomerode, com estética enxaimel contemporânea, texturas de madeira, terracota, linho e papel de receita. A foto real enviada pelo usuário é o único asset fotográfico da página; não serão inventadas fotos adicionais.

### Princípios atuais
A casa enxaimel é o elemento protagonista e deve aparecer em escala ampla. A narrativa da família vem antes de qualquer catálogo de produtos. O layout deve parecer uma página editorial de uma hospedaria/café local: mais calor, mais respiro, mais textura e menos linguagem de template. Bordas podem alternar entre cantos suaves em botões e recortes retos em painéis para equilibrar acolhimento e autenticidade.

### Paleta e materialidade
Usar creme de papel `#f6f0e5` como base, marrom café `#2e241d` para texto, verde musgo `#40533b`, terracota `#b86645` e mostarda `#dcae52` em detalhes. A cor de destaque deve lembrar luz de janela e madeira aquecida, nunca neon. Texturas discretas de papel e linhas de enxaimel podem ser construídas via CSS, sem imagens inventadas.

### Composição e narrativa
A página começa com a fotografia real da casa, texto curto e dois CTAs. Depois apresenta a Olsen com uma faixa de dados/manifesto, a história de Eduardo e Thayana em linha do tempo e um painel “Pequena Alemanha, grande afeto”. O fechamento traz o endereço/horário como informação a confirmar, Instagram e WhatsApp direto. O cardápio foi removido por decisão explícita do usuário.

### Movimento
Rolagem suave entre âncoras, revelação leve de blocos ao entrarem na viewport, pequenos deslocamentos no padrão enxaimel e hover sutil nos botões. Nenhuma animação deve parecer tecnológica, brilhante ou excessivamente automatizada; tudo deve lembrar papel, madeira e passagem de tempo. Todas as entradas respeitam `prefers-reduced-motion`.

### Voz
A escrita deve soar local, humana e afetiva, sem slogans genéricos. Frases aprovadas: “Uma casa enxaimel, um café passado e uma história para contar.” e “Do recomeço de dois para a pausa de muitos.”

### WhatsApp
O botão deve apontar para um link direto no formato `https://wa.me/55SEUNUMERO`, com o número oficial a ser substituído quando fornecido. Como ainda não há número informado, usar um valor facilmente localizável no código e sinalizar a necessidade de troca antes da publicação.
