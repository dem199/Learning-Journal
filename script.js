const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 



const openClick = document.getElementById('open-click');
const openContainer = document.getElementById('open-container')

openClick.addEventListener("click", () => {
    openContainer.style.display = "block"
})