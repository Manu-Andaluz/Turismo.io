//NavBar
const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click',() => {
    burger.classList.toggle('toggle');
    links.classList.toggle('nav-active');
})