const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')

const backgroundIMG = document.getElementById('backgroundIMG')
const foregroundIMG = document.getElementById('foregroundIMG')
const foregroundIMG2 = document.getElementById('foregroundIMG2')

const backgroundDescription = document.getElementById('backgroundDescription')
const currentSlide = document.getElementById('currentSlide')

let numberAllPic = 0;

let currentPic = 1;
let pictures = []

fetch('data.json').then(res => res.json()).then(json => {
    pictures = json;
    numberAllPic = json.length
})


btnNext.addEventListener('click', () => {
    if (currentPic >= numberAllPic) return
    if (findedItems < pictures[currentPic - 1].imagesCount) return

    currentPic++
    resetProgress()
    rerenderPic()
})

btnPrev.addEventListener('click', () => {
    if (currentPic <= 1) return

    currentPic--
    resetProgress()
    rerenderPic()
})

const rerenderPic = () => {
    enableDisablePic('hidden')

    changePicProperty(currentPic)

    setTimeout(() => {
        enableDisablePic('visible')
    }, 100)
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

    backgroundIMG.src = './img/' + current + '.jpg'
    backgroundDescription.textContent = currentItem.description

    foreground.style.left = currentItem.foreground.coordinate.x
    foreground.style.top = currentItem.foreground.coordinate.y
    foreground.style.opacity = currentItem.foreground.opacity
    foregroundIMG.style.width = currentItem.foreground.size + 'px'
    foregroundIMG.src = './img/' + current + '.png'


    if (currentItem.foreground2) {
        foreground2.style.left = currentItem.foreground2.coordinate.x
        foreground2.style.top = currentItem.foreground2.coordinate.y
        foreground2.style.opacity = currentItem.foreground2.opacity
        foregroundIMG2.style.width = currentItem.foreground2.size + 'px'

        foregroundIMG2.src = './img/' + currentItem.foreground2.src
    } else {
        foregroundIMG2.src = ''
    }
}

const resetProgress = () => {
    isFinded2 = false
    isFinded = false
    findedItems = 0
    scoreText.innerText = `Найдено лишних предметов ${findedItems} из ${pictures[currentPic - 1].imagesCount}`
    currentSlide.innerText = `Текущий слайд: ${currentPic}`
}