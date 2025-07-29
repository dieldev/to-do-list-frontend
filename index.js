import { criarItemDaLista } from './scripts/criarItemDaLista.js';
import verificarListaVazia from './scripts/verificarListaVazia.js';

const inputItem = document.getElementById('input-item');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaDeTarefas = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(inputItem.value);
    verificarListaVazia(listaDeTarefas);
    inputItem.value = '';
});

verificarListaVazia(listaDeTarefas);