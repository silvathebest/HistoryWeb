const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')
const backgroundIMG = document.getElementById('backgroundIMG')
const foregroundIMG = document.getElementById('foregroundIMG')
const countAllPic = 3;

let currentPic = 1;

btnNext.addEventListener('click', () => {
    if (currentPic >= countAllPic) return

    currentPic++
    changePicProperty(currentPic)
})

btnPrev.addEventListener('click', () => {
    if (currentPic <= 1) return

    currentPic--
    changePicProperty(currentPic)
})

const changePicProperty = (current) => {
    const pictures = fillPictures()

    foregroundIMG.classList.remove('isFinded')
    backgroundIMG.src = './img/' + current + '.jpg'
    foregroundIMG.src = './img/' + current + '.png'

    foreground.style.left = pictures[current - 1].coordinate.x
    foreground.style.top = pictures[current - 1].coordinate.y
    foreground.style.opacity = pictures[current - 1].opacity
    foregroundIMG.style.width = pictures[current - 1].size + 'px'
}

