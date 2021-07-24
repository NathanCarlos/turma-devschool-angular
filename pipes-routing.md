# Aula de Pipes e Routing Básico Angular!

Nesse tópico vocês poderão utilizar ótimos artigos como reforço e ter uma base melhor sobre os assuntos de pipes e routing que serão abordados pelo professor em aula.

# O Que São Pipes no Angular?

Pipes são uma maneira elegante de realizarmos transformações em nosso front-end. Com ela nos podemos criar funções ou filtros (como é chamado no inglês), que podem ser utilizadas em qualquer parte do template do nosso projeto.

Para um entendimento melhor com exemplos, e mais profundidade sobre pipes, você pode ler este [artigo](https://www.devmedia.com.br/angular-filter-e-pipes/40798) do devmedia que aborda com mais profundidade o tema.

# Para Que Serve o Módulo de Routing do Angular?
O Angular nos fornece um esquema de rotas e navegação completo, simples e fácil de utilizar, incluindo um esquema de guardas de rotas para implementar segurança em nossos Apps.

Para um entendimento melhor com exemplos, e mais profundidade sobre rotas, você pode ler este [artigo](https://balta.io/blog/angular-rotas-guardas-navegacao) do balta.io que aborda com mais profundidade o tema.

# Exercícios

Exercício 1) Utilize o projeto de tarefas criado nas aulas passadas e ajuste a estrutura da sua aplicação angular para funcionar com rotas.
Obs: Para isso crie uma página chamada task e gere o módulo de rota.

Exercício 2) Utilize o projeto de tarefas criado nas aulas, considere o array abaixo de tarefas e  exiba na tela a data com o formato br utilizando pipe.

>tasks = [
{ id:  1, description:  'Criar um projeto básico', completed:  false, inclusionDate:  '2021-07-21' },
{ id:  2, description:  'Colocar o lixo para fora até as 19h', completed:  true, inclusionDate:  '2021-07-22' },
{ id:  3, description:  'Fazer o jantar até as 22h', completed:  true, inclusionDate:  '2021-07-20' },
{ id:  4, description:  'Reunião de alinhamento dia 18/07 as 14h', completed:  true, inclusionDate:  '2021-07-21' },
{ id:  5, description:  'Reunião de alinhamento projeto bradesco 18/07 as 16h', completed:  false, inclusionDate:  '2021-07-19' },
{ id:  6, description:  'Criar conteúdo da aula', completed:  false, inclusionDate:  '2021-07-18' }
];

Exercício 3) Crie um sistema de gerenciamento de acadêmia, crie algumas massas(array com objetos) de alunos com os seguintes dados: id, nome, valor da mensalidade, data último pagamento, data de inclusão no sistema.
Para criar o sistema, utilize boas práticas e o sistema de roteamento ensinado em aula.
No sistema você deverá listar na página principal alguns alunos que você mesmo irá gerar a massa com base nas informações passadas acima.
Crie uma rota e página de login de usuário, uma rota e página de cadastro de usuários, uma rota e página de cadastro de alunos da academia.


Obs: Para ter uma listagem na página principal você deverá ter uma rota também...

Exemplo de massa de alunos que você precisará gerar:
>[
    {
      id: 1,
      nome: 'Nathan Carlos',
      valorMensalidade: 100,
      dataUltimoPgto: '2021-07-23',
      dataInclusaoSistema: '2021-07-01'
    }
]

# Fontes e Referências

https://imasters.com.br/desenvolvimento/angular-criacao-de-pipes#:~:text=Introdu%C3%A7%C3%A3o,do%20template%20do%20nosso%20projeto.

https://www.devmedia.com.br/angular-filter-e-pipes/40798

https://balta.io/blog/angular-rotas-guardas-navegacao

