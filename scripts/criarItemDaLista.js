let contador = 0;

export function criarItemDaLista(evento) {

    if (evento === "") {
        alert("Por favor, digite uma tarefa.");
        return
    }
    console.log(evento);

    const itemDaLista = document.createElement('li');
    itemDaLista.classList.add('tarefa__item', 'card__nova_tarefa');
    itemDaLista.id = `tarefa-${contador}`;
    contador++;
    const inputItem = document.createElement('input');
    inputItem.classList.add('checkbox');
    inputItem.type = 'checkbox';
    const labelItem = document.createElement('span');
    labelItem.classList.add('tarefa__texto');
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('tarefa__botao-remover');
    botaoRemover.id = 'botao-remover'
    botaoRemover.innerText = 'Remover';

    labelItem.innerText = evento;

    itemDaLista.appendChild(inputItem);
    itemDaLista.appendChild(labelItem);
    itemDaLista.appendChild(botaoRemover);

    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.appendChild(itemDaLista);


    inputItem.addEventListener('click', () => {
        if (inputItem.checked) {
            labelItem.style.textDecoration = 'line-through';
        } else {
            labelItem.style.textDecoration = 'none';
        }
    });

    botaoRemover.addEventListener('click', () => {
        itemDaLista.remove();
    });

}

export default criarItemDaLista;