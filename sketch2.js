let tokenData = { "hash": "0xb049be6ffbf1e3b28f26d6a1ad6cb110bf60ccc939a2bb18d989404888859817", "tokenId": "7000118" }
let hashPairs = [];
for (let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}
let seed = parseInt(tokenData.hash.slice(48, 64), 16);
let decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
});

let multiplier;
let cnv

function setup() {
    const dim = Math.min(windowWidth, windowHeight);
    cnv = createCanvas(dim, dim);
    multiplier = width / 2400;


    frameRate(5)
    noLoop()
    smooth()

}

function setPalette() {
    let n = Math.floor(Math.random() * 99) + 1;
    let primary, secondary, travelerStroke, travelerFill
    if (n <= 2) {
        //DARK PALETTE
        primary = "#111111"
        secondary = "#eeeeee"
        travelerStroke = "#111111"
        travelerFill = "#eeeeee"
        console.log("Dark Palette (2% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 2 && n < 17) {
        //LIGHT PALETTE
        primary = "#eeeeee"
        secondary = "#111111"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Light Palette (15% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 17 && n <= 23) {
        //EMERALD PALETTE
        primary = "#127475"
        secondary = "#F5DFBB"
        travelerStroke = "#111111"
        travelerFill = "#127457"
        console.log("Emerald Palette (6% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 23 && n <= 38) {
        //CREAM PALETTE
        primary = "#c4c0ba"
        secondary = "#8447FF"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Cream Palette (15% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 38 && n <= 50) {
        //SKY PALETTE
        primary = "#86BBD8"
        secondary = "#eeeeee"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Sky Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else if (n > 50 && n <= 62) {
        //ROSE PALETTE
        primary = "#b27077"
        secondary = "#eeeeee"
        travelerStroke = "#111111"
        travelerFill = "#111111"
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
        primary = "#F4D58D"
        secondary = "#001427"
        travelerStroke = "#111111"
        travelerFill = "#111111"
        console.log("Jasmine Palette (12% Probability of Occurrence Among 10 Available Palettes)")
    } else {
        //TERMINAL PALETTE
        primary = "#111111"
        secondary = "green"
        travelerStroke = "#111111"
        travelerFill = "green"
        console.log("Terminal Palette (2% Probability of Occurrence Among 10 Available Palettes)")
    }

    let color = [primary, secondary, travelerStroke, travelerFill]
    return color
}
let color = setPalette()
primary = color[0]
secondary = color[1]
travelerStroke = color[2]
travelerFill = color[3]

function setShadowContext() {
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 40 * multiplier;
    drawingContext.shadowColor = secondary;
}
function revertShadowContext() {
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
}
function drawGrid() {
    noFill()
    for (let r = 0; r < 128; r++)
        for (let c = 0; c < 96; c++) {
            rect(
                (gridArea * c) * multiplier,
                (gridArea * r) * multiplier,
                gridArea * multiplier,
                gridArea * multiplier)
        }
}
function drawTraveler() {
    /*, *LIGHTEST, **DIFFERENCE, 
    **EXCLUSION, *SCREEN, **HARD_LIGHT, 
    **SOFT_LIGHT, **DODGE*/
    let x1, y1, x2, y2
    for (let i = 0; i < random(2, 10); i++) {
        let n = random(0, 99)
        blendMode(DIFFERENCE)
        rectMode(CENTER)
        strokeWeight(random(1, random(10, 40)) * multiplier)
        stroke(travelerStroke)
        fill(travelerFill)
        x1 = random(width / 2.75, width / 2)
        y1 = random(height / 1.75, height / 2.5)
        x2 = random(200 * multiplier, 300 * multiplier)
        y2 = random(200 * multiplier, 300 * multiplier)
        let c = random(0 * multiplier, 100 * multiplier)
        rect(x1, y1, x2, y2, c)
        rect(width - x1, y1, x2, y2, c)

        
    }

    blendMode(BLEND)
    n = random(0,99)
    
    if (n < 40) {
        stroke(secondary)
    } else {
        stroke(primary)
    }
    for (let i = 0; i < random(1,10); i++) {
        strokeWeight(random(1,3) * multiplier)
        let x1 = width / random(2, 3)
        let y1 = height / random(2, 3)
        let x2 = x1
        let y2 = height / 2
        line(x1, y1, x2, y2)
        line(width - x1, y1, width - x2, y2)
        line(x1, height - y1, x2, y2)
        line(width - x1, height - y1, width - x2, y2)
        x1 = width/random(2,3);
        y1 = height/random(2,3)
        x2 = width/2
        y2 = y1
        line(x1,y1,x2,y2)
        line(width - x1,y1,width - x2,y2)
        line(x1,height - y1,x2,height - y2)
        line(width - x1,height - y1,width - x2,height - y2)
    }
}
function setGrid() {
    let n = random(0, 100)
    let gridArea, rMax, cMax
    if (n <= 10) {
        gridArea = 30;
        rMax = 80;
        cMax = 80
        strokeWeight(2 * multiplier)
        console.log('Small Grid (10% Probability of Occurrence Among 3 Available Grid Sizes)')

    } else if (n > 10 && n <= 70) {
        gridArea = 60
        rMax = 40
        cMax = 40
        strokeWeight(2 * multiplier)
        console.log('Medium Grid (70% Probability of Occurrence Among 3 Available Grid Sizes)')
    } else {
        gridArea = 600
        strokeWeight(5 * multiplier)
        rMax = 4
        cMax = 4
        console.log('Large Grid (20% Probability of Occurrence Among 3 Available Grid Sizes)')
    }
    return [gridArea, rMax, cMax]
}
function getGridOutputs() {
    gridOutput = setGrid()
    gridArea = gridOutput[0]
    rMax = gridOutput[1]
    cMax = gridOutput[2]
}
function drawTriGrid() {
    getGridOutputs()
    stroke(secondary)
    fill(primary)
    for (let r = 0; r < rMax; r++) {
        for (let c = 0; c < cMax; c++) {
            let x1, y1, x2, y2, x3, y3
            let n = random(0, 2)
            if (n < 1) {
                x1 = 0 * multiplier + (c * gridArea) * multiplier
                y1 = 0 * multiplier + (r * gridArea) * multiplier
                x2 = gridArea * multiplier + (c * gridArea) * multiplier
                y2 = 0 * multiplier + (r * gridArea) * multiplier
                x3 = 0 * multiplier + (c * gridArea) * multiplier
                y3 = gridArea * multiplier + (r * gridArea) * multiplier
                triangle(
                    x1, y1, x2, y2, x3, y3)

                x1 = gridArea * multiplier + (c * gridArea) * multiplier
                y1 = 0 * multiplier + (r * gridArea) * multiplier
                x2 = 0 * multiplier + (c * gridArea) * multiplier
                y2 = gridArea * multiplier + (r * gridArea) * multiplier
                x3 = gridArea * multiplier + (c * gridArea) * multiplier
                y3 = gridArea * multiplier + (r * gridArea) * multiplier
                triangle(
                    x1, y1, x2, y2, x3, y3)
                resetMatrix()
            } else if (n > 1) {
                x1 = gridArea * multiplier /*0*/ + (c * gridArea) * multiplier
                y1 = gridArea * multiplier + (r * gridArea) * multiplier
                x2 = 0 /*gridArea*/ * multiplier + (c * gridArea) * multiplier
                y2 = 0 * multiplier /*0*/ + (r * gridArea) * multiplier
                line(x1, y1, x2, y2)
            }
        }
    }
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
function drawStarGrid() {
    getGridOutputs()
    stroke(secondary)
    fill(secondary)
    let density, diameter
    if (gridArea == 60) {
        density = 1600
        diameter = 20
    } else if (gridArea == 600) {
        density = 600
        diameter = 70
    } else if (gridArea == 30) {
        density = 4800
        diameter = 4
    }
    for (let i = 0; i < density; i++) {
        circle(random(0, width), random(0, height), diameter * multiplier - random(10, 20) * multiplier)
    }
}
function draw() {
    background(primary)
    setShadowContext()
    let n = random(0, 100)


    if (n < 50) {
        drawCircuitGrid()
        console.log('Circuit Grid (50% Probability of Occurrence Among 3 Grid Patterns)')
    } else if (n > 60) {
        drawTriGrid()
        console.log('Triangle Grid (40% Probability of Occurrence Among 3 Available Grid Patterns)')
    } else {
        drawStarGrid()
        console.log('Star Grid (10% Probability of Occurrence Among 3 Available Grid Patterns)')

    }


    strokeWeight(5 * multiplier)
    stroke(secondary)
    fill(primary)
    circle(width / 2, height / 2, width / 2)
    revertShadowContext()
    drawTraveler()

    
    stroke(secondary)
    strokeWeight(5)
    gridArea = 140 * multiplier
    //drawGrid()
    strokeWeight(10 * multiplier)
    setShadowContext()
    //line(width / 2, 0, width / 2, height)
    revertShadowContext()
    stroke("lightteal")
    strokeWeight(0.05 * multiplier)
    for (let i = 0; i < 1000; i++) {
        line(random(0, width), random(0, height), random(0, width), random(0, height))
    }
}



function rnd() {
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    return (((seed < 0) ? ~seed + 1 : seed) % 1000000) / 1000000;
}

/*
NEXT:
- Add additional color palettes (10 total) (make sky palette rare)
- 4 or less shapes?
    - Add a second layer on top that's blend mode:
    secondary stroke, primary fill

Name ideas: harbor, port, voyager, vessel, craft
*/