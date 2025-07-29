export function removerItemDaLista(itemId) {
    const itemDaLista = document.getElementById(itemId);
    if (itemDaLista) {
        itemDaLista.remove();
    } else {
        console.error(`Item com ID ${itemId} não encontrado.`);
    }
}

export default removerItemDaLista;