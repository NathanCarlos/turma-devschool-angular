
# Aula de Event Binding Angular!

Para a essas aula vamos abordar os seguintes tópicos:
- O Que é Event Binding;
- Exercícios de fixação;

# O Que é Event Binding 

Com o event-binding enviamos valores vindos do template HTML para o componente(TypeScript), este tipo de binding é importantíssimo por ser utilizado para manipular os eventos e interações com o template e enviados para o componente.

E como o próprio nome diz, event binding, utilizamos de eventos para que possamos disparar os métodos ou expressões para atualizarmos a model(TS) a partir de um elemento Html presente no template.

Por exemplo, em um input field, podemos disparar um evento enquanto o campo está sendo preenchido:

><input (input)="model.skype=$event.target.value" type="text"/>

Em angular definimos o event binding utilizando os parenteses "(nomeevento)",  
ex.:para o evento "_OnChange_" utilizamos (change), para o "_OnClick_" temos (click) no caso (input) representa um evento que é capturado quando uma tecla é pressionada. desta forma podemos definir uma expressão para setar a model

> ex.:(input)="model.skype=$event.target.value"

ou podemos também chamar um método

> ex.:(input)="metodoHandler($event)"

e também transferir o valor do template para o componente através do objeto $event

## Lista de exercícios
Para conseguir realizar a lista de exercícios aguarde a aula para um entendimento melhor, porém se quiser se desafiar a fazer tudo bem :)

1) Com o projeto do exercício anterior crie um componente para colaborador, e atualize seu componente de lista de colaboradores para fazer um ngFor e listar com o componente de colaborador.

2) Com o projeto do exercício anterior, crie um botão chamado "remover" no componente de colaborador, que quando for clicado chame uma função que exiba um alerta com a mensagem: "Colaborador excluído com sucesso!"

Exercício 3) Crie um projeto angular para gestão de tarefas do dia a dia. Esse projeto deverá conter a seguinte estrutura: 1 header, 1 footer, 1 componente para listagem das tarefas, 1 componente de cada tarefa. Considere o array de objetos abaixo para exibir as tarefas na tela.

> tasks = [
    {
        id: 1,
        description: 'Criar um projeto básico',
        completed: false
    },
    {
        id: 2,
        description: 'Colocar o lixo para fora até as 19h',
        completed: true
    },
    {
        id: 3,
        description: 'Fazer o jantar até as 22h',
        completed: true
    },
    {
        id: 4,
        description: 'Reunião de alinhamento dia 18/07 as 14h',
        completed: true
    },
    {
        id: 5,
        description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h',
        completed: false
    },
    {
        id: 6,
        description: 'Criar conteúdo da aula',
        completed: false
    }
]

Obs: Utilize as boas práticas ensinadas em aula para criar o projeto!

Exerício 4) Com base no projeto do exercício 3, ao clicar no campo "completed" da tarefa, ele deverá alterar para true/false.

Exercício 5) Com base no projeto do exercício 3, crie um input para busca de tarefas por nome.

# Fontes e Referências
http://blog.almeidapedro.com.br/post/2017/12/13/bindings-em-angular
