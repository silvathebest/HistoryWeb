const foreground = document.getElementById('foreground')
const foreground2 = document.getElementById('foreground2')
const scoreText = document.getElementById('score')

let countClick = 1
let countClick2 = 1

let findedItems = 0
let isFinded = false
let isFinded2 = false

foreground.addEventListener('click', () => {
    countClick % 2 === 0 ?
        foregroundIMG.classList.remove('isFinded') : foregroundIMG.classList.add('isFinded')

    updateItemsCount(countClick, isFinded)
    isFinded = true
    countClick++
})

foreground2.addEventListener('click', () => {
    countClick2 % 2 === 0 ?
        foregroundIMG2.classList.remove('isFinded') : foregroundIMG2.classList.add('isFinded')

    updateItemsCount(countClick2, isFinded2)
    isFinded2 = true
    countClick2++
})

const updateItemsCount = (countClick, finded) => {
    const imagesCount = pictures[currentPic - 1].imagesCount

    if (findedItems < imagesCount && countClick % 2 !== 0 && !finded) {
        findedItems++
        scoreText.innerText = `Найдено лишних предметов ${findedItems} из ${imagesCount}`
    }
}