const hamburgar = document.querySelector('.hamburgar')
const navbar = document.querySelector('.navbar');

hamburgar.addEventListener('click', () => {
    navbar.classList.toggle('show');
})