let backgroundIsLoaded = false
let foregroundIsLoaded = false

window.onload = () => {
    fetch('data.json').then(res => res.json()).then(json => {
        pictures = json;
        countScenes = json.length
        rerenderPic()
        resetProgress()
    })
}

backgroundIMG.onload = () => {
    backgroundIsLoaded = true
    onLoadImg()
}

foregroundIMG.onload = () => {
    foregroundIsLoaded = true
    onLoadImg()
}

const onLoadImg = () => {
    if (foregroundIsLoaded && backgroundIsLoaded) {
        backgroundIsLoaded = false
        foregroundIsLoaded = false
        loading('hidden')
        enableDisablePic('visible')
    }
}