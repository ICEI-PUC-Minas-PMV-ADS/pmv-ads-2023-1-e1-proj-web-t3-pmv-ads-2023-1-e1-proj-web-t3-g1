# Arquitetura da Solução

Nesta seção serão especificados os detalhes técnicos da aplicação, apresentando os componentes e tecnologias utilizadas pela equipe.

## Diagrama de componentes

O diagrama a seguir (*Figura 09*) mostra a modelagem física do relacionamento entre os componentes da solução.

![arquitetura_solucao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t3-pmv-ads-2023-1-e1-proj-web-t3-g1/assets/122227953/5fd9b7f7-e386-4383-ad81-b8c42ada7dd6)

<sub>*Figura 09 - Arquitetura da solução.*</sub>

A solução implementada conta com os seguintes módulos:

- Navegador - Interface básica do sistema.
- Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
- Local Storage - Armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON.
- Hospedagem - Local na Internet onde as páginas são mantidas e acessadas pelo navegador.


Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

- Linguagens utilizadas para desenvolver o projeto: HTML, CSS, JavaScript
- IDEs de desenvolvimento: Visual Studio Code
- Plataforma para hospedagem do site: Heroku
- Plataforma para hospedagem dos arquivos: GitHub
- Ferramenta de versionamento: Git
- Ferramenta para a criação da identidade visual: Canva
- Ferramenta para criação de template e wireframes: Figma


## Hospedagem

Conforme orientação, a plataforma Heroku foi selecionada para a hospedagem da aplicação. A publicação é feita a partir de comandos Git para o repositório.
