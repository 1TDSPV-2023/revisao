
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

    inputTarefa.value = ""
    console.log(listaTarefasArray);

});
