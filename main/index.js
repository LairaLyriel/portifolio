
// BOTAO DOS CARD DE HAB

const btnLogin = document.querySelector('#btnPessoais');
const btnCadastrar = document.querySelector('#btnProfissionais');
const pessoaisCard = document.querySelector('#pessoal');
const profissionaisCard = document.querySelector('#profissional');
const btnColor = document.querySelector('.btn-color');

btnPessoais.addEventListener('click', () => {
    pessoaisCard.classList.add('active');
    profissionaisCard.classList.remove('active');
    btnColor.style.left = "0";

});

btnProfissionais.addEventListener('click', () => {
    pessoaisCard.classList.remove('active');
    profissionaisCard.classList.add('active');
    btnColor.style.left = "50%";
});
