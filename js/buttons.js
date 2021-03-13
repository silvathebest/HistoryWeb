const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')
const backgroundIMG = document.getElementById('backgroundIMG')
const foregroundIMG = document.getElementById('foregroundIMG')
const foregroundIMG2 = document.getElementById('foregroundIMG2')
const numberAllPic = 3;

let currentPic = 1;

btnNext.addEventListener('click', () => {
    if (currentPic >= numberAllPic) return

    currentPic++
    rerenderPic()
})

btnPrev.addEventListener('click', () => {
    if (currentPic <= 1) return

    currentPic--
    rerenderPic()
})

const rerenderPic = () => {
    foregroundIMG.style.visibility = 'hidden'
    foregroundIMG2.style.visibility = 'hidden'
    backgroundIMG.style.visibility = 'hidden'

    changePicProperty(currentPic)

    setTimeout(() => {
        foregroundIMG.style.visibility = 'visible'
        foregroundIMG2.style.visibility = 'visible'
        backgroundIMG.style.visibility = 'visible'
    }, 50)
}

const changePicProperty = (current) => {

    if (foregroundIMG.classList.contains('isFinded')) {
        foregroundIMG.classList.remove('isFinded')
        countClick++
    }

    foreground.style.left = pictures[current - 1].coordinate.x
    foreground.style.top = pictures[current - 1].coordinate.y
    foreground.style.opacity = pictures[current - 1].opacity
    foregroundIMG.style.width = pictures[current - 1].size + 'px'

    backgroundIMG.src = './img/' + current + '.jpg'
    foregroundIMG.src = './img/' + current + '.png'
}

