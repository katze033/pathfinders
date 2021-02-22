//ARTBLOCKS SET UP
let tokenData = {
    "hash": "0xb049be6ffbf1e3b28f26d6a1ad6cb110bf60ccc939a2bb18d989404888859817",
    "tokenId": "7000118"
}
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

function setup() {
    const dim = Math.min(windowWidth, windowHeight);
    cnv = createCanvas(dim, dim);
    cnv.mouseClicked(controls);
    multiplier = width / 2400;
    frameRate(60)
    background(primary)
    //drawGrid()
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
    }
}

function setGrid() {
    let n = random(0, 100)
    let rMax, cMax
    if (n >= 25 && n < 50) {
        gridArea = 60
        rMax = 40
        cMax = 40
        strokeWeight(2 * multiplier)
    } else if (n >= 50 && n < 75) {
        gridArea = 240
        strokeWeight(3 * multiplier)
        rMax = 10
        cMax = 10
    } else if (n >= 75 && n < 100) {
        gridArea = 600
        strokeWeight(3 * multiplier)
        rMax = 4
        cMax = 4
    } else {
        gridArea = 1200
        strokeWeight(3 * multiplier)
        rMax = 2
        cMax = 2
    }
    return [gridArea, rMax, cMax]
}

function getGridOutputs() {
    let gridOutputs = setGrid()
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
            let n = random(0, 3)
            if (n < 1.5) {
                x1 = 0 + (c * gridArea) * multiplier
                y1 = 0 + (r * gridArea) * multiplier
                x2 = gridArea * multiplier + (c * gridArea) * multiplier
                y2 = gridArea * multiplier + (r * gridArea) * multiplier
                line(
                    x1, y1, x2, y2)
            } else if (n > 2) {
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
    let n = Math.floor(Math.random() * 99) + 1;
    let primary, secondary, travelerStroke, travelerFill

    if (n <= 2) {
        //LIGHT PALETTE
        primary = "#eeeeee"
        secondary = "#111111"
        travelerStroke = "#111111"
        travelerFill = "#eeeeee"
        console.log("Light Palette (2% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 2 && n < 17) {
        //DARK PALETTE
        primary = "#111111"
        secondary = "#eeeeee"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Dark Palette (15% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 17 && n <= 23) {
        //EMERALD PALETTE
        primary = "#127475"
        secondary = "#F5DFBB"
        travelerStroke = "#111111"
        travelerFill = "#127457"
        console.log("Emerald Palette (6% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 23 && n <= 38) {
        //CREAM PALETTE
        primary = "#8447FF"
        secondary = "#c4c0ba"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Cream Palette (15% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 38 && n <= 50) {
        //SKY PALETTE
        primary = "#eeeeee"
        secondary = "#86BBD8"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Sky Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 50 && n <= 62) {
        //ROSE PALETTE
        primary = "#eeeeee"
        secondary = "#b27077"
        travelerStroke = "#eeeeee"
        travelerFill = "#eeeeee"
        console.log("Rose Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 62 && n <= 74) {
        //CLOUD PALETTE
        primary = "#B8C7C4"
        secondary = "#435060"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Cloud Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 74 && n <= 86) {
        //STEEL PALETTE
        primary = "#435060"
        secondary = "#CDD1C4"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Steel Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 86 && n <= 98) {
        //JASMINE PALETTE
        primary = "#001427"
        secondary = "#F4D58D"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Jasmine Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else {
        //TERMINAL PALETTE
        primary = "#111111"
        secondary = "#41FF00"
        travelerStroke = "#41FF00"
        travelerFill = "#41FF00"
        console.log("Terminal Palette (2% Probability of Occurrence Among 10 Available Palettes)")
    }

    let palette = [primary, secondary, travelerStroke, travelerFill]
    return palette
}

let palette = setPalette()
primary = palette[0]
secondary = palette[1]
travelerStroke = palette[2]
travelerFill = palette[3]

function drawAvatar() {
    let x1, y1, x2, y2

    function drawAvatarShapes() {
        for (let i = 0; i < random(2, 16); i++) {
            n = random(0, 99)
            if (n < 50) {
                blendMode(DIFFERENCE)
            } else {
                blendMode(SOFT_LIGHT)
            }
            rectMode(CENTER)
            strokeWeight(random(1, 12) * multiplier)
            stroke(travelerStroke)
            fill(travelerFill)
            x1 = random(1920 * multiplier, 2225 * multiplier)
            y1 = random(height - 300 * multiplier, height - 480 * multiplier)
            x2 = random(25 * multiplier, 75 * multiplier)
            y2 = random(25 * multiplier, 75 * multiplier)
            let c = random(0 * multiplier, 25 * multiplier)
            rect(x1, y1, x2, y2, c)
            rect(4080 * multiplier - x1, y1, x2, y2, c)
        }
    }

    function drawAvatarLines() {
        for (let i = 0; i < random(1, 10); i++) { //1,10
            strokeWeight(random(1, 3) * multiplier)

            let x1 = random(1820 * multiplier, 2040 * multiplier)
            let y1 = random(1880 * multiplier, 2040 * multiplier)
            let x2 = x1
            let y2 = 2040 * multiplier
            line(x1, y1, x2, y2)
            line(4080 * multiplier - x1, y1, 4080 * multiplier - x2, y2)
            line(x1, 4080 * multiplier - y1, x2, y2)
            line(4080 * multiplier - x1, 4080 * multiplier - y1, 4080 * multiplier - x2, y2)
            x1 = random(1840 * multiplier, 2040 * multiplier) //1820*multiplier;
            y1 = random(1840 * multiplier, 2040 * multiplier)
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
    n = random(0, 99)
    if (n < 40) {
        stroke(secondary)
    } else {
        stroke(primary)
    }
    drawAvatarLines()
}

let t
t = 0

function drawImage() {

    var x1 = width * (noise(t + 100 * multiplier));
    var x2 = width * (noise(t + 200 * multiplier));
    var x3 = width * (noise(t + 300 * multiplier));
    var x4 = width * (noise(t + 400 * multiplier));
    var y1 = height * (noise(t + 500 * multiplier));
    var y2 = height * (noise(t + 600 * multiplier));
    var y3 = height * (noise(t + 700 * multiplier));
    var y4 = height * (noise(t + 800 * multiplier));
    let baseSize, waveTypeSpeed, waveSize, motionBlur

    function brush0() {
        for (let i = 0; i < 15; i++) {
            baseSize = 200 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (200 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            baseSize = 0
            waveTypeSpeed = Math.tan(millis() * 0.001)
            waveSize = 0
            motionBlur = ((i * 1) * multiplier)
            ellipse(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur
            )
        }
        
    }

    function brush1() {
        strokeWeight(0.01 * multiplier * pixelDensity())
        for (let i = 0; i < 40; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.001)
            waveSize = (400 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            baseSize = 0
            waveTypeSpeed = Math.tan(millis() * 0.01)
            waveSize = 10 * multiplier
            motionBlur = ((i * 1) * multiplier)
            ellipse(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur
            )
        }
    }

    function brush2() {
        for (let i = 0; i < 20; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.0005)
            waveSize = (400 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)

        }
    }

    function brush3() {
        for (let i = 0; i < 10; i++) {
            baseSize = 10 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.001)
            waveSize = (1500 * multiplier) + Math.tan(millis() * 0.0001)
            motionBlur = ((i * 5)) * multiplier

            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur
            )
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.cos(millis() * 0.005)
            waveSize = (50 * multiplier) + Math.tan(millis() * 0.005)
            motionBlur = ((i * 1)) * multiplier

            square(
                x2,
                y2,
                baseSize + waveTypeSpeed * waveSize + motionBlur
            )

        }
    }

    function brush4() {
        for (let i = 0; i < 20; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.sin(millis() * 0.1)
            waveSize = (1000 * multiplier) / waveTypeSpeed
            motionBlur = ((i * 1.1)) * multiplier

            triangle(
                x1 + motionBlur,
                y1 + motionBlur,
                x2 + motionBlur, y2 + motionBlur, x3 + motionBlur, y3 + motionBlur,
                baseSize + waveTypeSpeed * waveSize + motionBlur
            )

        }
    }

    function brush5() {

        for (let i = 0; i < 10; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.sin(millis() * 0.001)
            waveSize = (20 * multiplier)
            motionBlur = ((i * 8)) * multiplier
            bezier(
                x1, y1,
                x2, y2,
                x3, y3,
                x1, y1 + waveTypeSpeed * waveSize + motionBlur
            )
        }
    }

    function brush6() {
        for (let i = 0; i < 15; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.sin(millis() * 0.0005)
            waveSize = (800 * multiplier)
            motionBlur = ((i * 1)) * multiplier
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
        }
    }

    function brush7() {
        for (let i = 0; i < 15; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.0005)
            waveSize = (400 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            square(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            circle(
                x1,
                y1,
                (baseSize + waveTypeSpeed * waveSize + motionBlur) / 2
            )

        }

    }

    function brush8() {
        for (let i = 0; i < 15; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.0005)
            waveSize = (200 * multiplier) - waveTypeSpeed
            motionBlur = ((i * 1.1)) * multiplier + waveTypeSpeed
            circle(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
        }

    }

    function brush9() {
        for (let i = 0; i < 10; i++) {
            baseSize = 0 * multiplier
            waveTypeSpeed = Math.tan(millis() * 0.01)
            waveSize = (19 * multiplier)
            motionBlur = ((i * 1.1)) * multiplier
            square(
                x1,
                y1,
                baseSize + waveTypeSpeed * waveSize + motionBlur)
            line(
                x1,
                y1,
                x4,
                y4
            )

        }

    }

    function brush10() {
        brush4()
        brush1()
    }

    function brush11() {

        brush3()
        brush1()
    }

    function brush12() {

        brush7()
        brush6()
    }

    function brush13() {

        brush7()
        brush5()
    }

    function brush14() {

        brush0()
        brush2()
    }

    let brushID = 1//Math.floor(random() * 14);
    let brushStroke = [
        brush0,
        brush1,
        brush2,
        brush3,
        brush4,
        brush5,
        brush6,
        brush7,
        brush8,
        brush9,
        brush10,
        brush11,
        brush12,
        brush13,
        brush14,
    ]

    //edit 8 & 9 & maybe 14

    stroke(secondary)
    noFill()
    brushStroke[brushID]()
    t += random(0.001, 0.005);
}

let avatarSeed = Math.floor(Math.random() * 999) + 1;

function draw() {
    noFill()
    resetMatrix()
    stroke(secondary)
    strokeWeight(360 * multiplier)
    rect(width / 2, height / 2, width, height)
    fill(secondary)
    stroke(primary)
    strokeWeight(10 * multiplier)

    circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)

    if (frameCount < 1) {
        setShadowContext()
        noFill()
        noStroke()

        stroke(primary)
        fill(secondary)
        circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)
    }
    if (frameCount > 1) {
        drawImage() 
    }
    revertShadowContext()
    randomSeed(avatarSeed)
    drawAvatar()

}

function drawGrid() {
    noFill()
    for (let r = 0; r < 20; r++)
        for (let c = 0; c < 20; c++) {
            rect(
                (gridArea * c) * multiplier,
                (gridArea * r) * multiplier,
                gridArea * multiplier,
                gridArea * multiplier)
        }
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
/* 
- 10 more color palettes
- make art blocks compatible
- push traits to feature array
- brush ideas: blinking tan wave one from earlier draft, rect/tri/circ combined
*/