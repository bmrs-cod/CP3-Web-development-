# Uso de Inteligência Artificial

## Ferramentas consultadas

Durante o desenvolvimento da atividade foram consultadas três ferramentas de inteligência artificial com o objetivo de comparar abordagens de implementação e organização do projeto:

* ChatGPT
* Claude (Anthropic)
* Google Gemini

## Prompt utilizado

Prompt inicial:

"Desenvolver uma aplicação web utilizando HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas. A aplicação deve possuir uma tela de login inicialmente visível e uma área de CRUD inicialmente oculta.

O login deve validar usuário 'aluno' e senha 'fiap2025', exibindo mensagens de erro na própria interface em caso de campos vazios ou credenciais incorretas.

Após autenticação correta, o usuário deve acessar uma lista dinâmica com CRUD completo utilizando um array de strings contendo pelo menos três itens iniciais.

A aplicação deve permitir adicionar itens no início e no final da lista, visualizar os itens dinamicamente, editar itens individualmente e removê-los pela posição no array.

As seguintes validações devem ser respeitadas: login não pode ser enviado vazio, itens não podem ser cadastrados vazios e, ao editar, caso o usuário cancele ou deixe vazio, o item original deve permanecer sem alteração.

Toda modificação realizada deve atualizar automaticamente a interface e a lógica deve permanecer organizada em funções nomeadas, utilizando apenas recursos compatíveis com JavaScript introdutório."

Refinamento realizado:

Após as primeiras respostas, o prompt recebeu pequenos ajustes relacionados à organização da interface, validações obrigatórias e adequação ao tema escolhido para a aplicação, denominado "Jogos Favoritos".

## Observações sobre as respostas

As respostas apresentaram propostas semelhantes em relação à estrutura geral do sistema, porém com diferenças no nível de detalhamento e no atendimento dos requisitos.

O Claude apresentou uma boa organização do código e explicações claras sobre a lógica utilizada.

O Gemini trouxe uma implementação funcional, porém exigindo adaptações relacionadas a validações e organização das funções.

O ChatGPT apresentou uma solução mais próxima dos requisitos propostos, com melhor separação das funcionalidades e maior aderência às regras da atividade.

## Escolha da solução base

A solução utilizada como referência principal foi a proposta apresentada pelo ChatGPT.

A escolha ocorreu pela organização da lógica em funções nomeadas, uso adequado do array de strings e implementação mais alinhada às exigências da atividade.

Durante o desenvolvimento, foram realizados ajustes e personalizações relacionadas ao tema "Jogos Favoritos", organização visual e adequação do comportamento das funcionalidades para garantir o atendimento completo dos requisitos.
