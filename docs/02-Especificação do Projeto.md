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
|-------------------|-----------------------------------------|----|
|`RF-01`| Permitir que o usuário registre suas **despesas fixas** (aluguel, streaming, seguro, internet, etc.). | `ALTA` | 
|`RF-02`| Permitir que o usuário registre suas **despesas esporádicas** (corte de cabelo, jantar em restaurante, passeio no parque de diversões, etc.).  | `ALTA` |
|`RF-03`| Permitir que o usuário registre suas **despesas com “prazo de validade”** (compras parceladas, financiamentos, etc). | `ALTA` | 
|`RF-04`| Permitir que o usuário registre uma **meta de gastos** (seja ela semanal, mensal ou anual).   | `ALTA` |
|`RF-05`| Permitir que o usuário registre suas **receitas fixas.** (salário, mesada, etc.). | `ALTA` | 
|`RF-06`| Permitir que o usuário registre suas **receitas esporádicas** (dividendos, rendimentos, participação nos lucros, etc.).   | `ALTA` |
|`RF-07`| Permitir que o usuário registre suas **receitas com “prazo de validade”** (vendas parceladas, etc.). | `ALTA` | 
|`RF-08`| Permitir que o usuário registre seus **investimentos** (Títulos de renda fixa, títulos de renda variável, etc.).   | `ALTA` |
|`RF-09`| Permitir que o usuário faça um **cadastro com login e senha**. | `ALTA` | 
|`RF-10`| Permitir que o usuário registre **despesas imprevistas** (veterinário, hospital, medicamentos, etc.).   | `MÉDIA` |
|`RF-11`| Permitir que o usuário especifique em seu cadastro qual o **motivo** pelo qual ele está utilizando a aplicação. (gerenciamento financeiro, dívidas, controle de investimentos, etc.). | `MÉDIA` | 
|`RF-12`| Exibir **notificações (pop-ups)** com dicas para uma vida financeira mais saudável.   | `MÉDIA` |
|`RF-13`| Permitir que o usuário opte pelo **“DarkMode”** | `BAIXA` | 
|`RF-14`| Permitir que a página de registros seja **customizável** conforme as necessidades do usuário.   | `BAIXA` |
|`RF-15`| Exibir **notificações** nos aparelhos móveis. | `BAIXA` | 
|`RF-16`| Permitir que o usuário faça a **importação do seu extrato na extensão .csv**   | `BAIXA` |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|`RNF-01`| A aplicação deve manter o padrão de desempenho mínimo — definido pela equipe — em qualquer sistema de acesso: Browser, Smartphone ou Tablet.| `MÉDIA` |
|`RNF-02`| O sistema deve permanecer disponível X% do tempo, a fim de que esteja disponível sempre que o usuário necessitar. | `MÉDIA` | 
|`RNF-03`| O sistema deve ser acessível e de fácil usabilidade pelo usuário. | `BAIXA` | 
|`RNF-04`| O sistema deve ser responsivo em qualquer sistema de acesso: Browser, Smartphone ou Tablet | `ALTA` | 
|`RNF-05`| O sistema deve ser de fácil manutenibilidade | `MÉDIA` | 

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
