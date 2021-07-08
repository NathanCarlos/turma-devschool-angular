# Bem Vindo ao Curso de Angular e Nodejs!

Para a essas primeiras aulas vamos abordar os seguintes tópicos:
- O que é angular;
- O que é o node;
- O que é o npm;
- Instalação do node e npm;
- O que é git e github;
- Instalação do git;
- Criar conta no github;
- O que é o visual studio code;
- Instalação do visual studio code;
- Instalação do Angular;
- Angular CLI -> Como inicializar um projeto angular com o ng new;
- O que é cada arquivo que está na pasta do angular e a estrutura;
- Exercícios de fixação;

# O Que é Angular?
O **Angular** é um poderoso framework que utiliza HTML e [TypeScript](https://blog.betrybe.com/desenvolvimento-web/typescript/) para criar a interface com o usuário, ou seja, o front-end em aplicações web, desktop e dispositivos móveis. A primeira versão **foi** lançada em 2010 com o nome **Angular JS**, mas foi completamente reescrita e em 2016 passou a ser chamada **Angular 2**.
Atualmente a versão mais recente e estável do angular é a 10, porém a versão 11 já está em fase de testes.

Exemplos de aplicações desenvolvidas com Angular:
- https://www.autocompara.com.br/
- https://www.safrapay.com.br/selectmachine.html?bt=true
- O aplicativo SafraWallet entre outros...

# Porque Utilizar Angular Para Construir Aplicações Front-end?
O Angular otimiza o desenvolvimento das aplicações  _front-end_  de páginas web. O HTML permite a criação de páginas estáticas, porém, para uma aplicação web, é necessário mais do que isso.

O Angular adapta e estende o HTML tradicional para uma experiência otimizada, com conteúdo dinâmico e ligação direta dos dados, conhecida como  _two-way data-binding_, que abre a possibilidade para sincronização automática de modelos e visualizações.

A  **plataforma Angular**  provê recursos para o desenvolvimento de  _Single Page Applications_  (SPA). Ou seja, uma única página web, com o objetivo de fornecer a experiência ao usuário parecida com a de um aplicativo de desktop, onde o código é carregado na página única, de forma dinâmica.

A produtividade também aumenta, permitindo ao desenvolvedor quebrar o código em partes, utilizando componentes, módulos e outras funcionalidades. Essa estrutura torna o ambiente de desenvolvimento mais organizado, e é chamado de  **diagrama de aplicação Angular**.

# O Que é Node?
É um interpretador de código JavaScript que funciona do lado do servidor. Seu objetivo é ajudar programadores na criação de aplicações de alta escalabilidade (como um servidor web), com códigos capazes de manipular dezenas de milhares de conexões simultâneas, numa única máquina física. O Node.js é baseado no interpretador V8 JavaScript Engine (interpretador de JavaScript open source implementado pelo Google em C++ e utilizado pelo Chrome). Foi criado por Ryan Dahl em 2009, e seu desenvolvimento é mantido pela empresa Joyent, onde Dahl trabalha.
## Como ele pode ser definido?
O **Node**. **js** pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o **Node**. **js** é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

# O que é NPM?
[NPM](https://www.npmjs.com/) é o nome reduzido de  _Node Package Manager_  (Gerenciador de Pacotes do Node). A NPM é duas coisas: Primeiro, e mais importante, é um repositório online para publicação de projetos de código aberto para o  `Node.js`; segundo, ele é um utilitário de linha de comando que interage com este repositório online, que ajuda na instalação de pacotes, gerenciamento de versão e gerenciamento de dependências..

A partir da versão  `Node.js`  0.5.x que o NPM passou a ser integrado ao instalador do  `Node.js`  e isso simplificou a vida dos desenvolvedores, pois antes disso existia diversos gerenciadores de pacotes para o  `Node.js`.

Ele também mantém um repositório online NPM que também é mantido pela Joyent, atualmente ele contém mais de 30 mil módulos  _open-source_.

# Instalação do Node e NPM
Como falamos agora pouco, o NPM passou a ser integrado ao instalador do Node.js, então podemos seguir só realizando a instalação do node com um tutorial através desse link: https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux
Você também pode consultar esse link para auxiliar na etapa de instalação:
https://github.com/NathanCarlos/turma-devschool/blob/main/etapas-instalacao-node-js/etapas-instalacao-node.md

# O Que é Git e GitHub?
Lidar com várias versões de código sempre foi um desafio para as pessoas programadoras, já que cada um que atua em uma parte do sistema ou está desenvolvendo uma parte do programa mantém uma versão diferente em sua máquina, **O Git e o Github são duas ferramentas essenciais para isso.**.

**O que é Git?**
>**Git**  é um sistema de controle de versão open-source, ou seja, gratuito. Ele é  **utilizado para a criação de um histórico de alterações em código-fonte de projetos de desenvolvimento de software**. Foi desenvolvido por Linus Torvalds, o criador do sistema operacional Linux.
Por meio de sua utilização, podemos saber quais foram as alterações realizadas, quem fez cada uma das alterações e baixar essas mudanças em nossa máquina. Se necessário, revertê-las para uma versão anterior.

**O que é GitHub?**
>O Github é um  **repositório remoto, criado como um serviço online de hospedagem de repositórios do Git.**
Funciona como um servidor que agrega todas as modificações realizadas por cada uma das pessoas envolvidas em um projeto, unificando as diferentes versões de código e seus históricos, permitindo compartilhamento entre as equipes.
Além disso, o GitHub também conta com várias integrações com outros serviços online, permitindo o deploy automático de aplicação. Assim, garante a integração contínua e facilita o desenvolvimento.
Nos últimos anos, o GitHub se tornou a principal rede social para o desenvolvimento de software, sendo que existem vários projetos open source hospedados na plataforma, que aceitam a colaboração de qualquer profissional.
Outro ponto interessante é a sua utilização como currículo. Muitas empresas pedem na  [entrevista](https://blog.betrybe.com/carreira/como-se-preparar-para-uma-entrevista/)  o link do GitHub para verificar seus projetos e entender suas capacidades de  [programação](https://blog.betrybe.com/carreira/programacao-para-iniciantes/).
Caso você esteja começando sua carreira na  [área de TI](https://blog.betrybe.com/carreira/principais-areas-de-ti/)  agora, criar um perfil nessa plataforma pode ajudar a dar visibilidade para o seu trabalho no mercado.

# Instalação do Git
Para realizar a instalação do Git podemos seguir este tutorial da hostinger que mostra de forma bem simples como baixar e instalar esse sistema poderoso:
https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao

# O que é o visual studio code?
O Visual Studio Code (VS Code) é um editor de código, de código aberto desenvolvido pela Microsoft.

A saber, ele está disponível para Windows, Mac e Linux. É criado com  [Electron](https://www.treinaweb.com.br/blog/o-que-e-electron/ "Electron"), ferramenta criada pelo  [GitHub](https://www.treinaweb.com.br/blog/git-e-github-quais-as-diferencas "GitHub")  que permite a criação de softwares Desktop com  [HTML, CSS](https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-html-e-css/ "HTML, CSS")  e  [JavaScript](https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-javascript "JavaScript").
## Não confunda com o Visual Studio

O  [Visual Studio](https://www.treinaweb.com.br/blog/principais-ides-para-desenvolvimento-c/ "Visual Studio")  é uma  [IDE](https://www.treinaweb.com.br/blog/o-que-e-uma-ide-ambiente-de-desenvolvimento-integrado/ "IDE")  desenvolvida pela Microsoft, dedicada ao  [.NET Framework](https://www.treinaweb.com.br/blog/processo-de-execucao-de-um-codigo-no-net-framework/ ".NET Framework")  e a linguagens como C, C++,  [C#](https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-c-sharp/ "C#")  e  [F#](https://www.treinaweb.com.br/blog/o-que-e-f-f-sharp/ "F#"). Por ser uma solução completa, é uma ferramenta bem mais pesada.

Já o  `Visual Studio Code`  é um Editor de Código, o qual possui as funcionalidades mais simples como:

-   edição de código com suporte a várias linguagens de programação;
-   terminal de comandos integrado;
-   controle de versão;

# Instalação do Visual Studio Code
Instalar o visual studio code é relativamente simples, precisamos acessar este link: https://code.visualstudio.com/ e clicar no botão de download para o seu sistema operacional. Na etapa de instalação se for exibido para escolher a linguagem que deseja configurar, escolha inglês.
Se precisar de um apoio mais visual, tem esse tutorial do devmedia que mostra cada etapa da instalação no windows: https://www.devmedia.com.br/introducao-ao-visual-studio-code/34418
Caso ainda tenha dúvidas consulte o professor que ele te auxiliará na instalação.

# Instalação do Angular
Agora que temos o nodejs e o npm já configurados, a instalação do angular fica bem mais fácil, abra um terminal no seu sistema operacional, se for windows é só apertar a combinação de teclas "windows" + "r", digitar cmd e apertar enter, caso seja outro sistema operacional pergunte ao professor para que ele possa te dar uma direção.

Assim que o terminal abrir, digite o comando **npm  install  -g  @angular/cli** e pressione enter.

O parâmetro  `-g`  significa que o Angular Cli será instalado globalmente no seu sistema operacional.

O processo de instalação pode demorar alguns minutos, devido a várias verificações e o download de todas as dependências.

Assim que a instalação for concluída rode o comando **ng --version** e ele te mostrará qual versão do Angular Cli está instalada na sua máquina.

## Lista de exercícios
Exercício 1) Crie um projeto utilizando o cli do angular e que utiliza o padrão sass para estilização.


# Fontes e Referências

* https://blog.betrybe.com/framework-de-programacao/angular/
* https://www.totvs.com/blog/developers/angular/
* https://pt.stackoverflow.com/questions/161560/diferen%C3%A7a-de-angular-js-para-nodejs/161575
* https://www.opus-software.com.br/node-js/
* https://pt.stackoverflow.com/questions/157034/o-que-%C3%A9-o-npm-e-o-node
* https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux
* https://blog.betrybe.com/tecnologia/git-e-github/
* https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao
* https://www.treinaweb.com.br/blog/vs-code-o-que-e-e-por-que-voce-deve-usar
https://www.devmedia.com.br/introducao-ao-visual-studio-code/34418
