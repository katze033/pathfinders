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


let gridArea = 120
let primary = '#111111'
let secondary = "#eeeeee"

function setup() {
    const dim = Math.min(windowWidth, windowHeight);
    cnv = createCanvas(dim, dim);
    multiplier = width / 2400;
    frameRate(100)
    //noLoop()
    background(primary)
    stroke(secondary)

    strokeWeight(10)
    //drawGrid()
    drawBeziers()
    fill(secondary)
    rectMode(CENTER)

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
        secondary = "#00FF00"
        travelerStroke = "#111111"
        travelerFill = "#00FF00"
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

function drawTraveler() {
    /*, *LIGHTEST, **DIFFERENCE, 
    **EXCLUSION, *SCREEN, **HARD_LIGHT, 
    **SOFT_LIGHT, **DODGE*/
    let x1, y1, x2, y2
    let r = random(0, 99)

    for (let i = 0; i < random(2, 16); i++) {
        if (r < 50) {
            blendMode(DIFFERENCE)
        } else {
            blendMode(SOFT_LIGHT)
        }

        // DIFFERENCE or SOFT_LIGHT
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

    blendMode(BLEND)

    n = random(0, 99)

    if (n < 40) {
        stroke(secondary)
    } else {
        stroke(primary)
    }
    for (let i = 0; i < random(1, 10); i++) { //1,10
        strokeWeight(random(1, 3) * multiplier)

        /*
                width 1800, 2280 max?
                let x1 = 1850*multiplier
                let y1 = 2040*multiplier
                let x2 = 2230*multiplier
                let y2 = y1
                line(x1,y1,x2,y2)
          */
        let x1 = random(1820 * multiplier, 2040 * multiplier)
        let y1 = random(1880 * multiplier, 2040 * multiplier)
        let x2 = x1
        let y2 = 2040 * multiplier
        line(x1, y1, x2, y2)
        line(4080 * multiplier - x1, y1, 4080 * multiplier - x2, y2)
        line(x1, 4080 * multiplier - y1, x2, y2)
        line(4080 * multiplier - x1, 4080 * multiplier - y1, 4080 * multiplier - x2, y2)
        x1 = random(1840 * multiplier, 2040 * multiplier)//1820*multiplier;
        y1 = random(1840 * multiplier, 2040 * multiplier)
        x2 = 2040 * multiplier
        y2 = y1
        line(x1, y1, x2, y2)
        line(4080 * multiplier - x1, y1, 4080 * multiplier - x2, y2)
        line(x1, 4080 * multiplier - y1, x2, 4080 * multiplier - y2)
        line(4080 * multiplier - x1, 4080 * multiplier - y1, 4080 * multiplier - x2, 4080 * multiplier - y2)

    }

}

let t
t = 0

function drawBeziers() {
    stroke(secondary)
    strokeWeight(0.01 * multiplier)
    noFill()

    var x1 = width * noise(t + 100);
    var x2 = width * noise(t + 200);
    var x3 = width * noise(t + 300);
    var x4 = width * noise(t + 400);
    var y1 = height * noise(t + 500);
    var y2 = height * noise(t + 600);
    var y3 = height * noise(t + 700);
    var y4 = height * noise(t + 800);

    for (let i = 0; i < 10; i++) {
        /*BRUSH1
        ellipse(x1 + i * 2, y1 + i * 2, -x3 / 100 )
        circle(x1,y1 - Math.tan(millis() * 0.01) * 20,-y4 * Math.cos(millis() * 0.001)  + (i * 2))
        */

        /*BRUSH2
        circle(x1,y1,-y4 * Math.cos(millis() * 0.0005)  + (i * 2))
        ellipse(x1 + i * 2, y1 + i * 2, -x3 / 100 )
        */
        /*BRUSH3 
        circle(x1,y1 - Math.sin(millis() * 0.01) * 100,-y4 * Math.cos(millis() * 0.0001)  + (i * 2))
        square(x1,y1,Math.sin(millis() * 0.001) * 40)
        */

        /*BRUSH 4
        circle(x1,y1,-y4 * Math.tan(millis() * 0.0005) / 20 + (i * 2) ) // and 0.005 for t
        square(x4,y4,Math.sin(millis() * 0.005) * 20)
        */
        /*BRUSH 5
        square(x1,y1,t* i * 20, x3)
       circle(x1,y1,-y4 * Math.cos(millis() * 0.001) / 200 + (i * 2) )
        */

        /*BRUSH 6 (RARE?)
        triangle(x1 / Math.cos(millis(0.1)),y1,x2 - Math.tan(millis() * 0.0001) + i * 10,y2,x3,y3 - Math.tan(millis() * 0.0002) + (i * 2))
        square(x1 + i * 2,y1,height/24 - Math.tan(millis() * 0.0001) * 200)
        */

        /*BRUSH 7 (RARE>)
        for (let i = 0; i<10; i++) {
            ellipse(x1 + i * 10, x2 + i * 10, Math.tan(millis() * 0.001) * 20 )
        }
        */

        /*BRUSH 8 (RARE?)
       for (let i = 0; i<20; i++) {
        ellipse(x1 + i * 1, x2 + i * 1, Math.tan(millis() * 0.009) * 20 )
        } 
         
        /*
             for (let i = 0; i < 5; i++) {
                line(x1 + i * 20, y1 + i * 200, x2 - i, y2)
            }
        */
        
    }
    t += 0.001;

    //t =+ 0.001, circle
}

function drawAvatar() {

}

function draw() {
    drawBeziers()
    resetMatrix()
    stroke(secondary)
    strokeWeight(360 * multiplier)
    rect(width / 2, height / 2, width, height)
    fill(secondary)
    stroke(primary)
    strokeWeight(10 * multiplier)

    circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)

    if (frameCount < 2) {

        setShadowContext()
        noFill()
        stroke(secondary)
        square(width / 2, height / 2, width / 1.182)
        fill(primary)
        circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)


        /*
         stroke("lightteal")
        strokeWeight(0.01 * multiplier)
        randomSeed(20)
                for (let i = 0; i < 5000; i++) {
                    line(random(0, width), random(0, height), random(0, width), random(0, height))
                }
        */

    }
    randomSeed(2)
    revertShadowContext()
    drawTraveler()

}



// shadow context on brush is fucking bonkers
// change terminal and purple palettes
// now combine brushes (start with 6 & 8)
