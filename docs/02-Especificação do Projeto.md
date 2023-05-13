# Especificações do Projeto

A equipe realizou pesquisas e entrevistas com potenciais usuários da aplicação visando traçar quais problemas o software resolverá. A partir disso, os levantamentos foram compilados na forma de _Personas_ e _Histórias de Usuários_, conforme apresentado a seguir.

## Personas


|BEATRIZ CORDEIRO                 |                                                                                                |
| -----------------               | ---                                                                                            |
| Idade: 49 anos                  |	Principais aplicativos: Banking; Streaming; Whatsapp; Instagram; TikTok; YouTube; Twitter.     |
| Ocupação: `Analista Financeiro` | Motivações: Família; Busca por conhecimento.. | Objetivos: Seguir evoluindo profissionalmente. |
| ---                             |	Hobbies: Leitura; Filmes e Séries; Língua Estrangeira; Viagens                                 |


|LEONARDO MACEDO  |     |
| ----------------- | --- |
| Idade: 21 anos    |	Principais aplicativos: Streaming; Whatsapp; Instagram; Telegram; YouTube; Twitter; Discord. |
| Ocupação: `Suporte` `Estudante de SI` | Motivações: Amigos; Tecnologia. | Objetivos: Trabalhar como gestor em tecnologia (gestão de pessoal). |
|     |	Hobbies: Games online; Filmes e Séries. |

|LUCIANO MOTTA  |     |
| ----------------- | --- |
| Idade: 30 anos    |	Principais aplicativos: Streaming; Whatsapp; Instagram; YouTube. |
| Ocupação: `Bombeiro Militar` | Motivações: Atividades Físicas; Família. | Objetivos: Ter controle sobre o próprio tempo. |
|     |	Hobbies: Crossfit; Filmes e Séries; Viagens. |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                     |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------------------------- |----------------------------------------|
|Usuário do sistema  | Cadastrar minhas despesas mensais                      | saber quanto devo poupar dos meus rendimentos mensais para que as despesas sejam satisfeitas. |
|Usuário do sistema  | Cadastrar uma compra futura                            | planejar e saber quanto devo poupar mensalmente. |
|Usuário do sistema  | Cadastrar meus investimentos                           | entender e acompanhar onde, como e quanto do meu patrimônio está investido. |
|Usuário do sistema  | Cadastrar minhas despesas dinâmicas mensais            | entender e classificar qual a média das minhas despesas com combustível, por exemplo. |
|Usuário do sistema  | Cadastrar minha despesas imprevistas                   | prever e planejar possíveis gastos excedentes mensais. |
|Usuário do sistema  | Receber dicas e lembretes de gerenciamento financeiro  | manter uma vida financeira controlada e saudável. |
|Usuário do sistema  | Administrar o dinheiro para garantir aposentadoria     | ter a segurança da aposentadoria privada. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|`RF-001`| Permitir que o usuário registre suas **despesas fixas** (aluguel, streaming, seguro, internet, etc.). | `ALTA` | 
|`RF-002`| Permitir que o usuário registre suas **despesas esporádicas** (corte de cabelo, jantar em restaurante, passeio no parque de diversões, etc.).  | `ALTA` |
|`RF-003`| Permitir que o usuário registre suas **despesas com “prazo de validade”** (compras parceladas, financiamentos, etc). | `ALTA` | 
|`RF-004`| Permitir que o usuário registre uma **meta de gastos** (seja ela semanal, mensal ou anual).   | `ALTA` |
|`RF-005`| Permitir que o usuário cadastre tarefas | `ALTA` | 
|`RF-006`| Emitir um relatório de tarefas no mês   | `ALTA` |
|`RF-007`| Permitir que o usuário cadastre tarefas | `ALTA` | 
|`RF-008`| Emitir um relatório de tarefas no mês   | `ALTA` |
|`RF-009`| Permitir que o usuário cadastre tarefas | `ALTA` | 
|`RF-010`| Emitir um relatório de tarefas no mês   | `MÉDIA` |
|`RF-011`| Permitir que o usuário cadastre tarefas | `MÉDIA` | 
|`RF-012`| Emitir um relatório de tarefas no mês   | `MÉDIA` |
|`RF-013`| Permitir que o usuário cadastre tarefas | `BAIXA` | 
|`RF-014`| Emitir um relatório de tarefas no mês   | `BAIXA` |
|`RF-015`| Permitir que o usuário cadastre tarefas | `BAIXA` | 
|`RF-016`| Emitir um relatório de tarefas no mês   | `BAIXA` |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
