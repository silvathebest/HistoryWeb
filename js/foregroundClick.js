const foreground = document.getElementById('foreground')
let countClick = 1;

foreground.addEventListener('click', () => {
    countClick % 2 === 0 ?
        foregroundIMG.classList.remove('isFinded') : foregroundIMG.classList.add('isFinded')
    countClick++
})