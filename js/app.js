function alterarStatus(id) {

let botãoclicado = document.getElementById(`botão-${id}`);
let imagem = botãoclicado.querySelector('.dashboard__item__img');
let botão = botãoclicado.querySelector('.dashboard__item__button');

if (imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented')
    botão.classList.remove('dashboard__item__button--return')
    botão.textContent = 'Alugar';
} else {
    imagem.classList.add('dashboard__item__img--rented')
    botão.textContent = 'Devolver';
    botão.classList.add('dashboard__item__button--return')

}
}