
// BOTAO DOS CARD DE HAB

const btnPessoais = document.querySelector('#btnPessoais');
const btnProfissionais = document.querySelector('#btnProfissionais');
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

// EFEITO DA DIGITAÇÃO
document.addEventListener("DOMContentLoaded", () => {
    const text = "< Olá! Eu sou Laira Lyriel />";
    const typingElement = document.getElementById("typing-effect");
    typingElement.textContent = "";

    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(typeText, 150); //tempo
        }
    }

    typeText();
});