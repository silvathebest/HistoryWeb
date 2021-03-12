const coordinateX = ['43.5%', "40%", "25%"]
const coordinateY = ['57%', "6%", "50%"]
const size = [64, 125, 350]
const opacity = [0.8, 0.85, 0.9]

const fillPictures = () => {
    let pictures = []
    for (let i = 1; i <= 10; i++) {
        pictures.push({
            background: i + '.jpg',
            foreground: i + '.png',
            coordinate: {
                x: coordinateX[i - 1], y: coordinateY[i - 1]
            },
            size: size[i - 1],
            opacity: opacity[i - 1],
        })
    }
    pictures[0].foreground.push('01.png')
    return pictures
}

