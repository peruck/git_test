const calculadora = document.querySelector('#calculadora');
const teclas = calculadora.querySelector('#teclas');

teclas.addEventListener('click', e => {
    console.log(e.target.value);
});