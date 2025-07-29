import { criarItemDaLista } from './scripts/criarItemDaLista.js';

const inputItem = document.getElementById('input-item');
const botaoAdicionar = document.getElementById('botao-adicionar');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(inputItem.value);
});

