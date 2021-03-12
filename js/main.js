const foreground = document.getElementById('foreground')
const img = document.getElementById('foregroundIMG')
let countClick = 1;

foreground.addEventListener('click', () => {
    countClick % 2 === 0 ? img.classList.remove('isFinded') : img.classList.add('isFinded')
    countClick++
})