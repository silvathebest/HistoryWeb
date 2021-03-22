const loader = document.getElementById('loader')

const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')

const backgroundIMG = document.getElementById('backgroundIMG')
const foregroundIMG = document.getElementById('foregroundIMG')
const foregroundIMG2 = document.getElementById('foregroundIMG2')

const backgroundDescription = document.getElementById('backgroundDescription')
const currentSlide = document.getElementById('currentSlide')

let countScenes = 0;

let currentPic = 1;
let pictures = []

const btnNextHandler = () => {
    if (currentPic >= countScenes) window.location.href = 'final.html'
    if (findedItems < pictures[currentPic - 1].imagesCount) return

    currentPic++
    resetProgress()
    rerenderPic()
}

const btnPrevHandler = () => {
    if (currentPic <= 1) return

    currentPic--
    resetProgress()
    rerenderPic()
}

btnNext.addEventListener('click', btnNextHandler)

btnPrev.addEventListener('click', btnPrevHandler)

const rerenderPic = () => {
    enableDisablePic('hidden')
    loading('visible')
    changePicProperty(currentPic)
}

const enableDisablePic = (visibility) => {
    foregroundIMG.style.visibility = visibility
    foregroundIMG2.style.visibility = visibility
    backgroundIMG.style.visibility = visibility
}

const changePicProperty = (current) => {

    const currentItem = pictures[current - 1]

    if (foregroundIMG.classList.contains('isFinded')) {
        foregroundIMG.classList.remove('isFinded')
        countClick++
    }

    if (foregroundIMG2.classList.contains('isFinded')) {
        foregroundIMG2.classList.remove('isFinded')
        countClick2++
    }

    backgroundIMG.src = './img/backgrounds/' + currentItem.background
    backgroundDescription.textContent = currentItem.description

    foreground.style.left = currentItem.foreground.coordinate.x
    foreground.style.top = currentItem.foreground.coordinate.y
    foreground.style.opacity = currentItem.foreground.opacity
    foregroundIMG.style.width = currentItem.foreground.size + 'px'
    foregroundIMG.src = './img/foregrounds/' + currentItem.foreground.src


    if (currentItem.foreground2) {
        foreground2.style.left = currentItem.foreground2.coordinate.x
        foreground2.style.top = currentItem.foreground2.coordinate.y
        foreground2.style.opacity = currentItem.foreground2.opacity
        foregroundIMG2.style.width = currentItem.foreground2.size + 'px'

        foregroundIMG2.src = './img/foregrounds/' + currentItem.foreground2.src
    } else {
        foregroundIMG2.src = ''
    }
}

const loading = (visibility) => {
    loader.style.visibility = visibility
}

const resetProgress = () => {
    isFinded2 = false
    isFinded = false
    findedItems = 0
    scoreText.innerText = `Найдено лишних предметов ${findedItems} из ${pictures[currentPic - 1].imagesCount}`
    currentSlide.innerText = `Текущий слайд: ${currentPic}`
}