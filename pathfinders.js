/* Sample token data. Uncomment to make script functional.
//let tokenData = {"hash":"0x4af30556a1cff937d812416b04e635ef8b154f251e93589d535e437749a28d70","tokenId":"19000078"}
*/
let hashPairs = [];

for (let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}


let seed = parseInt(tokenData.hash.slice(48, 64), 16);

let decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
});


//GLOBAL VAR
var multiplier;
var cnv
var gridArea = 60
var primary = '#111111'
var secondary = "#eeeeee"


var features = []
var featuresReduced = []

let palette = setPalette()

primary = palette[0]
secondary = palette[1]
let avatarStroke = palette[2]
let avatarFill = palette[3]


function setup() {
    const dim = Math.min(windowWidth, windowHeight);
    cnv = createCanvas(dim, dim);
    cnv.mouseClicked(controls);
    multiplier = width / 2400;
    frameRate(60)

    background(primary)
    rectMode(CENTER)
    drawCircuitGrid()
    noLoop()
}

let state = 'off'

function controls() {
    if (state == 'off') {
        background(primary)
        loop()
        state = 'on'
    } else if (state == 'on') {
        noLoop()
        state = 'paused'

    } else if (state == 'paused') {
        background(primary)
        loop()
        state = 'on'
        setShadowContext()
    }
}

function setGridSize() {
    let featuresGridSize

    let n = map(decPairs[0], 0, 255, 0, 100)
    let rMax, cMax

    if (n <= 33) {
        gridArea = 60
        rMax = 40
        strokeWeight(3 * multiplier)
        cMax = 40

        featuresGridSize = "Start Screen Grid Size: Small"


    } else if (n > 33 && n <= 69) {
        gridArea = 240
        strokeWeight(3 * multiplier)
        rMax = 10
        cMax = 10

        featuresGridSize = "Start Screen Grid Size: Medium"
    } else if (n < 69 && n <= 84) {
        gridArea = 600
        strokeWeight(3 * multiplier)
        rMax = 4
        cMax = 4

        featuresGridSize = "Start Screen Grid Size: Large"
    } else {
        gridArea = 1200
        strokeWeight(3 * multiplier)
        rMax = 2
        cMax = 2

        featuresGridSize = "Start Screen Grid Size: Large"
    }

    features.push(featuresGridSize)
    featuresReduced.push(featuresGridSize)

    return [gridArea, rMax, cMax, featuresGridSize]
}

function getGridOutputs() {
    let gridOutputs = setGridSize()
    gridArea = gridOutputs[0]
    rMax = gridOutputs[1]
    cMax = gridOutputs[2]
}

function drawCircuitGrid() {
    getGridOutputs()
    stroke(secondary)
    fill(primary)
    for (let r = 0; r < rMax; r++) {
        for (let c = 0; c < cMax; c++) {
            let x1, y1, x2, y2, x, y, d
            let n = (map(rnd(), 0, 1, 0, 100))
            if (n < 33) {
                x1 = 0 + (c * gridArea) * multiplier
                y1 = 0 + (r * gridArea) * multiplier
                x2 = gridArea * multiplier + (c * gridArea) * multiplier
                y2 = gridArea * multiplier + (r * gridArea) * multiplier
                line(
                    x1, y1, x2, y2)
            } else if (n > 66) {
                x1 = gridArea * multiplier /*0*/ + (c * gridArea) * multiplier
                y1 = gridArea * multiplier + (r * gridArea) * multiplier
                x2 = gridArea * multiplier + (c * gridArea) * multiplier
                y2 = 0 * multiplier /*0*/ + (r * gridArea) * multiplier
                line(x1, y1, x2, y2)
            } else {
                x = gridArea / 2 * multiplier + c * gridArea * multiplier
                y = gridArea / 2 * multiplier + r * gridArea * multiplier
                d = gridArea / 4 * multiplier
                circle(x, y, d)
            }
        }
    }
}


function setPalette() {
    let n = mapRange(decPairs[1], 0, 255, 1, 100)

    let primary, secondary, avatarStroke, avatarFill, featurePalette

    if (n <= 8) {
        primary = "#eeeeee"
        secondary = "#111111"
        avatarStroke = "#111111"
        avatarFill = "#eeeeee"

        featurePalette = "Light Palette"

    } else if (n > 8 && n <= 16) {
        primary = "#111111"
        secondary = "#eeeeee"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Dark Palette"

    } else if (n > 16 && n <= 20) {
        primary = "#127475"
        secondary = "#F5DFBB"
        avatarStroke = "#111111"
        avatarFill = "#127457"

        featurePalette = "Emerald Palette"
    } else if (n > 20 && n <= 25) {
        primary = "#6f3ddb"
        secondary = "#c4c0ba"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Cream Palette"

    } else if (n > 25 && n <= 30) {
        primary = "#eeeeee"
        secondary = "#3786ad"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Sky Palette"

    } else if (n > 30 && n <= 35) {
        primary = "#eeeeee"
        secondary = "#b27077"
        avatarStroke = "#eeeeee"
        avatarFill = "#eeeeee"

        featurePalette = "Rose Palette"


    } else if (n > 35 && n <= 40) {
        primary = "#B8C7C4"
        secondary = "#435060"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Overcast Palette"


    } else if (n > 40 && n <= 45) {
        primary = "#435060"
        secondary = "#CDD1C4"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Steel Palette"

    } else if (n > 45 && n <= 50) {
        primary = "#001427"
        secondary = "#F4D58D"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Jasmine Palette"

    } else if (n > 50 && n <= 52) {
        primary = "#41FF00"
        secondary = "#111111"
        avatarStroke = "#41FF00"
        avatarFill = "#41FF00"

        featurePalette = "Terminal Palette"

    } else if (n > 52 && n <= 57) {
        primary = "#ED8B8A"
        secondary = "#0A2044"
        avatarStroke = "white"
        avatarFill = "white"

        featurePalette = "Bubblegum Palette"

    } else if (n > 57 && n <= 62) {
        primary = "#BE00FF"
        secondary = "#FFFFFF"
        avatarStroke = "#BE00FF"
        avatarFill = "#BE00FF"

        featurePalette = "Neon Palette"

    } else if (n > 62 && n <= 67) {
        primary = "#111111"
        secondary = "#4D8F88"
        avatarStroke = "#111111"
        avatarFill = "#111111"

        featurePalette = "Ice Palette"

    } else if (n > 67 && n <= 72) {
        primary = "#ffebd8"
        secondary = "#516E5A" //6c9e00
        avatarStroke = "#eeeeee"
        avatarFill = "#eeeeee"

        featurePalette = "Forest Palette"
    } else if (n > 72 && n <= 76) {
        primary = "#47383B"
        secondary = "#BCAF9F"
        avatarStroke = "#BCAF9F"
        avatarFill = "#BCAF9F"

        featurePalette = "Adobe Palette"

    } else if (n > 76 && n <= 82) {


        primary = "#BCAF9F"
        secondary = "#322E3B"
        avatarStroke = "#322E3B"
        avatarFill = "#eeeeee"

        featurePalette = "Muted Violet Palette"


    } else if (n > 82 && n <= 85) {
        primary = "#ffebd8"
        secondary = "#0b2a72"
        avatarStroke = "#41FF00"
        avatarFill = "#41FF00"

        featurePalette = "Terminal Blue Palette"

    } else if (n > 85 && n <= 90) {
        primary = "#111111"
        secondary = "#F2B7C6"
        avatarStroke = "#41FF00"
        avatarFill = "#41FF00"

        featurePalette = "Unicorn Palette"

    } else if (n > 90 && n <= 95) {
        primary = "#FFB697"
        secondary = "#404040"
        avatarStroke = "#eeeeee"
        avatarFill = "#eeeeee"

        featurePalette = "Dusted Orange Palette"


    } else {
        primary = "#111111"
        secondary = "#FCEA08"
        avatarStroke = "#111111"
        avatarFill = "#FCEA08"

        featurePalette = "Bumblebee Palette"

    }

    ////////////6 more

    features.push('Color: ' + featurePalette)
    featuresReduced.push('Color: ' + featurePalette)


    let palette = [primary, secondary, avatarStroke, avatarFill]
    return palette
}



function drawAvatar() {
    let x1, y1, x2, y2

    function drawAvatarShapes() {
        let randomizer = (map(decPairs[2], 0, 255, 1, 16))
        for (let i = 0; i < randomizer; i++) {
            /*
            n = (map(decPairs[3], 0, 255, 0, 99))
            if (n < 50) {
                blendMode(DIFFERENCE)
            } else {
                blendMode(DIFFERENCE)
            }
            */
            blendMode(DIFFERENCE)
            rectMode(CENTER)

            strokeWeight(random(1, 12) * multiplier)
            stroke(avatarStroke)
            fill(avatarFill)

            x1 = (map(decPairs[4 * i] || 0, 0, 255, 1920 * multiplier, 2225 * multiplier))
            y1 = (map(decPairs[5 * i] || 0, 0, 255, height - 300 * multiplier, height - 480 * multiplier))
            x2 = (map(decPairs[6 * i] || 0, 0, 255, 25 * multiplier, 75 * multiplier))
            y2 = (map(decPairs[7 * i] || 0, 0, 255, 25 * multiplier, 75 * multiplier))
            let c = (map(decPairs[8], 0, 255, 0 * multiplier, 25 * multiplier))
            rect(x1, y1, x2, y2, c)
            rect(4080 * multiplier - x1, y1, x2, y2, c)
        }
    }

    function drawAvatarLines() {
        for (let i = 0; i < map(decPairs[8], 0, 255, 1, 10); i++) {
            strokeWeight(map(decPairs[9], 0, 255, 1 * multiplier, 3 * multiplier))

            let x1 = (map(decPairs[10 + i], 0, 255, 1820 * multiplier, 2040 * multiplier))
            let y1 = (map(decPairs[11 + i], 0, 255, 1880 * multiplier, 2040 * multiplier))

            let x2 = x1
            let y2 = 2040 * multiplier
            line(x1, y1, x2, y2)
            line(4080 * multiplier - x1, y1, 4080 * multiplier - x2, y2)
            line(x1, 4080 * multiplier - y1, x2, y2)
            line(4080 * multiplier - x1, 4080 * multiplier - y1, 4080 * multiplier - x2, y2)
            x1 = (map(decPairs[12 + i], 0, 255, 1840 * multiplier, 2040 * multiplier))
            y1 = (map(decPairs[13 + i], 0, 255, 1840 * multiplier, 2040 * multiplier))
            x2 = 2040 * multiplier
            y2 = y1
            line(x1, y1, x2, y2)
            line(4080 * multiplier - x1, y1, 4080 * multiplier - x2, y2)
            line(x1, 4080 * multiplier - y1, x2, 4080 * multiplier - y2)
            line(4080 * multiplier - x1, 4080 * multiplier - y1, 4080 * multiplier - x2, 4080 * multiplier - y2)

        }
    }

    drawAvatarShapes()
    blendMode(BLEND)
    n = (map(decPairs[14], 0, 255, 0, 99))
    if (n < 40) {
        stroke(secondary)
    } else {
        stroke(primary)
    }
    drawAvatarLines()
}

let t
t = 0


function mapRange(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

let featurePrimaryBrushStroke = Math.floor(mapRange(decPairs[15], 0, 255, 0, 9))
let featureSecondaryBrushStroke = Math.floor(mapRange(decPairs[16], 0, 255, 0, 3))
features.push('Primary Brush Variant: ' + featurePrimaryBrushStroke)
featuresReduced.push('Primary Brush Variant: ' + featurePrimaryBrushStroke)

features.push('Secondary Brush Variant: ' + featureSecondaryBrushStroke)
featuresReduced.push('Secondary Brush Variant: ' + featureSecondaryBrushStroke)


function drawImage() {
    var x1 = width * (noise(t + 100 * multiplier));
    var x2 = width * (noise(t + 200 * multiplier));
    var x3 = width * (noise(t + 300 * multiplier));
    var x4 = width * (noise(t + 400 * multiplier));
    var x5 = width * (noise(t + 500 * multiplier));
    var x6 = width * (noise(t + 600 * multiplier));
    var x7 = width * (noise(t + 700 * multiplier));
    var x8 = width * (noise(t + 800 * multiplier));

    var y1 = height * (noise(t + 900 * multiplier));
    var y2 = height * (noise(t + 1000 * multiplier));
    var y3 = height * (noise(t + 1100 * multiplier));
    var y4 = height * (noise(t + 1200 * multiplier));
    var y5 = height * (noise(t + 130 * multiplier));
    var y6 = height * (noise(t + 1400 * multiplier));
    var y7 = height * (noise(t + 1500 * multiplier));
    var y8 = height * (noise(t + 1600 * multiplier));

    let baseSize, waveTypeSpeed, waveSize, motionBlur

    function setImageStroke() {
        let newSecondary = color(secondary)

        newSecondary.setAlpha(10)
        stroke(newSecondary)
        strokeWeight(1 * multiplier)
    }

    let brushID = featurePrimaryBrushStroke;
    let secondaryBrushID = featureSecondaryBrushStroke

    function brush0() {
        setImageStroke()
        for (let i = 0; i < 15; i++) {
            baseSize = 200 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (500 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)

        }
    }

    function brush1() {
        setImageStroke()

        for (let i = 0; i < 15; i++) {
            baseSize = 200 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (500 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            baseSize = 100 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (250 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            square(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)

        }
    }

    function brush2() {
        setImageStroke()

        for (let i = 0; i < 15; i++) {
            baseSize = 100 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.01)
            waveSize = (0 * multiplier)
            motionBlur = ((i * 2)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x2,
                y2,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x3,
                y3,
                baseSize + waveTypeSpeed * waveSize + motionBlur)


            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.005)
            waveSize = (40 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            triangle(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3 + baseSize + waveTypeSpeed * waveSize + motionBlur)
        }

    }

    function brush3() {
        setImageStroke()

        for (let i = 0; i < 15; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (100 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x2,
                y2,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x3,
                y3,
                baseSize + waveTypeSpeed * waveSize + motionBlur)


            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.005)
            waveSize = (40 * multiplier)
            motionBlur = ((i * 2)) * multiplier
            triangle(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3 + baseSize + waveTypeSpeed * waveSize + motionBlur)
        }

    }

    function brush4() {
        setImageStroke()

        for (let i = 0; i < 20; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.0001)
            waveSize = (10 * multiplier)
            motionBlur = ((i * 4)) * multiplier
            line(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3 + baseSize + waveTypeSpeed * waveSize + motionBlur)
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (20 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            circle(
                x1, y1, x4 + baseSize + waveTypeSpeed * waveSize + motionBlur
            )
        }
    }

    function brush5() {
        setImageStroke()

        for (let i = 0; i < 20; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.sin(millis() * 0.0001)
            waveSize = (10 * multiplier)
            motionBlur = ((i * 4)) * multiplier
            line(
                x1,
                y1,
                x2,
                y2 + baseSize + waveTypeSpeed * waveSize + motionBlur)
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (2 * multiplier)
            motionBlur = ((i * 8)) * multiplier
            line(
                x4, y4, x3, y3
            )
        }

    }

    function brush6() {
        setImageStroke()

        for (let i = 0; i < 15; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.01)
            waveSize = (50 * multiplier)
            motionBlur = ((i * 2)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x2,
                y2,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x3,
                y3,
                baseSize + waveTypeSpeed * waveSize + motionBlur)


            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.005)
            waveSize = (40 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            triangle(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3 + baseSize + waveTypeSpeed * waveSize + motionBlur)
        }
    }

    function brush7() {
        setImageStroke()

        for (let i = 0; i < 20; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.0003)
            waveSize = (500 * multiplier)
            motionBlur = ((i * 2)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
        }
    }


    function brush8() {
        setImageStroke()

        for (let i = 0; i < 20; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.sin(millis() * 0.001)
            waveSize = (20 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            line(
                x1,
                y1,
                x2,
                y2 + baseSize + waveTypeSpeed * waveSize + motionBlur)
            line(
                x1,
                y1,
                x3,
                y3 + baseSize + waveTypeSpeed * waveSize + motionBlur)
            line(
                x1,
                y1,
                x4,
                y4 + baseSize + waveTypeSpeed * waveSize + motionBlur)

        }
    }

    function brush9() {
        setImageStroke()

        for (let i = 0; i < 10; i++) {
            baseSize = 100 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.01)
            waveSize = (10 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x2,
                y2,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x3,
                y3,
                baseSize + waveTypeSpeed * waveSize + motionBlur)


            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.005)
            waveSize = (40 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            triangle(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3 + baseSize + waveTypeSpeed * waveSize + motionBlur)

        }
    }

    let primaryBrushStroke = [
        brush0,
        brush1,
        brush2,
        brush3,
        brush4,
        brush5,
        brush6,
        brush7,
        brush8,
        brush9
    ]

    let secondaryBrushStroke = [
        secondaryBrush0,
        secondaryBrush1,
        secondaryBrush2,
        secondaryBrush3
    ]

    t += (map(decPairs[17], 0, 255, 0.001, 0.005))

    stroke(secondary)
    noFill()
    primaryBrushStroke[brushID]()
    secondaryBrushStroke[secondaryBrushID]()

    function secondaryBrush0() {
        setImageStroke()

        for (let i = 0; i < 10; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.01)
            waveSize = (10 * multiplier)
            motionBlur = ((i * 2)) * multiplier
            circle(
                x5,
                y5,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x6,
                y6,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x7,
                y7,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x8,
                y8,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
        }
    }

    function secondaryBrush1() {
        setImageStroke()

        for (let i = 0; i < 15; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.01)
            waveSize = (20 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            ellipse(
                x5,
                y5,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            ellipse(
                x6,
                y6,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            ellipse(
                x7,
                y7,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            ellipse(
                x8,
                y8,
                baseSize + waveTypeSpeed * waveSize + motionBlur)


        }
    }

    function secondaryBrush2() {
        setImageStroke()
        for (let i = 0; i < 15; i++) {
            baseSize = 200 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.0005)
            waveSize = (1000 * multiplier)
            motionBlur = ((i * 100)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize - motionBlur)
        }
    }

    function secondaryBrush3() {
        return 'none'
    }
}

let avatarSeed = Math.floor(decPairs[18], 0, 255, 1, 10000);

function draw() {

    if (frameCount <= 2) {
        setShadowContext()
    }
    noFill()
    resetMatrix()

    if (frameCount > 1) {
        drawImage()
    }
    stroke(secondary)
    strokeWeight(360 * multiplier)

    rect(width / 2, height / 2, width, height)

    stroke(secondary)
    strokeWeight(40 * multiplier)

    strokeWeight(10 * multiplier)
    fill(secondary)
    stroke(primary)

    circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)
    revertShadowContext()



    randomSeed(avatarSeed)
    drawAvatar()
}

function setShadowContext() {
    drawingContext.shadowBlur = 40 * multiplier;
    drawingContext.shadowColor = secondary;
}

function revertShadowContext() {
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
}

function rnd() {


    seed ^= seed << 13;

    seed ^= seed >> 17;

    seed ^= seed << 5;

    return (((seed < 0) ? ~seed + 1 : seed) % 1000000) / 1000000;
}
