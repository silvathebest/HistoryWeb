const foreground = document.getElementById('foreground')
const foreground2 = document.getElementById('foreground2')
let countClick = 1;
let countClick2 = 1;

foreground.addEventListener('click', () => {
    countClick % 2 === 0 ?
        foregroundIMG.classList.remove('isFinded') : foregroundIMG.classList.add('isFinded')
    countClick++
})

foreground2.addEventListener('click', () => {
    countClick2 % 2 === 0 ?
        foregroundIMG2.classList.remove('isFinded') : foregroundIMG2.classList.add('isFinded')
    countClick2++
})