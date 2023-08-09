
//Criar uma lista de Tarefas vazia
let listaTarefasArray = [];

//Recuperando o botao de adicionar tarefas.
const botaoAddTarefa = document.getElementById("btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    evt.preventDefault();

    //Recuperando o input de tarefas.
    const inputTarefa = document.getElementById("idTarefa");

    //Inserindo a tarefa digitada no array.
    listaTarefasArray.push(inputTarefa.value);

    //Criando elementos li
    let li = document.createElement("li");

    //Adicionado o item digitado no elemento criado.
    li.textContent = inputTarefa.value;

    //Recuperando a lista UL
    const listaTarefasUL = document.getElementById("lista-tarefas");

    //Inserindo o elemento li criando em cativeiro.
    listaTarefasUL.appendChild(li);

    //Criando um botão para excluir as tarefas.
    let botaoExcluir = document.createElement("button");

    //Adicionando texto ao botão de exclusão de tarefa
    botaoExcluir.textContent = " x ";

    //Adicionando o botão de excluir tarefas ao elemento li.
    li.appendChild(botaoExcluir);

    //Adicionando um listener de evento para o botão excluir
    botaoExcluir.addEventListener("click",(evt)=>{

        let conteudoDeTextoDoLiArray = evt.target.parentNode.textContent.split(" ");
        let indice = listaTarefasArray.indexOf(conteudoDeTextoDoLiArray[0]);
        
        listaTarefasArray.forEach(tarefa=>{

            if(conteudoDeTextoDoLiArray[0] == tarefa){
                listaTarefasArray.splice(indice,1);
            }
        });

        evt.target.parentNode.remove();
    });

    inputTarefa.value = ""
    console.log(listaTarefasArray);

});



// let frase = "Eu amo, o meu, lindo PROFESSOR, ele, sempre, tenta, dar o seu melhor!";
// console.log(frase);
// let arrayGerado = frase.split("a");
// console.log(arrayGerado);


