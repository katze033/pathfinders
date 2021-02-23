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


 var features = []

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
         setShadowContext()
     }
 }

 function setGridSize() {
     let featuresGridSize
     let n = random(0, 100)
     let rMax, cMax

     if (n <= 33) {
         gridArea = 60
         rMax = 40
         strokeWeight(3*multiplier)
         cMax = 40

         featuresGridSize = "Start Screen Grid: Small"


     } else if (n > 33 && n <= 69) {
         gridArea = 240
         strokeWeight(3 * multiplier)
         rMax = 10
         cMax = 10

         featuresGridSize = "Start Screen Grid: Medium"
     } else if (n < 69 && n <= 84) {
         gridArea = 600
         strokeWeight(3 * multiplier)
         rMax = 4
         cMax = 4

         featuresGridSize = "Start Screen Grid: Large"
     } else {
         gridArea = 1200
         strokeWeight(3 * multiplier)
         rMax = 2
         cMax = 2

         featuresGridSize = "Start Screen Grid: Large"
     }

     features.push(featuresGridSize)
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
     let primary, secondary, travelerStroke, travelerFill, featurePalette

     if (n <= 5) {
         //LIGHT PALETTE
         primary = "#eeeeee"
         secondary = "#111111"
         travelerStroke = "#111111"
         travelerFill = "#eeeeee"

         featurePalette = "Light Palette"

     } else if (n > 5 && n <= 10) {
         //DARK PALETTE
         primary = "#111111"
         secondary = "#eeeeee"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Dark Palette"

     } else if (n > 10 && n <= 15) {
         //EMERALD PALETTE
         primary = "#127475"
         secondary = "#F5DFBB"
         travelerStroke = "#111111"
         travelerFill = "#127457"

         featurePalette = "Emerald Palette"
     } else if (n > 15 && n <= 20) {
         //CREAM PALETTE
         primary = "#8447FF"
         secondary = "#c4c0ba"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Cream Palette"

     } else if (n > 20 && n <= 25) {
         //SKY PALETTE
         primary = "#eeeeee"
         secondary = "#7baac4"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Sky Palette"

     } else if (n > 25 && n <= 30) {
         //ROSE PALETTE
         primary = "#eeeeee"
         secondary = "#b27077"
         travelerStroke = "#eeeeee"
         travelerFill = "#eeeeee"

         featurePalette = "Rose Palette"


     } else if (n > 30 && n <= 35) {
         //CLOUD PALETTE
         primary = "#B8C7C4"
         secondary = "#435060"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Overcast Palette"


     } else if (n > 35 && n <= 40) {
         //STEEL PALETTE
         primary = "#435060"
         secondary = "#CDD1C4"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Steel Palette"

     } else if (n > 40 && n <= 45) {
         //JASMINE PALETTE
         primary = "#001427"
         secondary = "#F4D58D"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Jasmine Palette"

     } else if (n > 45 && n <= 50) {
         //TERMINAL PALETTE
         primary = "#41FF00"
         secondary = "black"
         travelerStroke = "#41FF00"
         travelerFill = "#41FF00"

         featurePalette = "Jasmine Palette"

     } else if (n > 50 && n <= 55) {
         primary = "#ED8B8A"
         secondary = "#0A2044"
         travelerStroke = "#BE00FF"
         travelerFill = "#BE00FF"

         featurePalette = "Bubblegum Palette"

     } else if (n > 55 && n <= 60) {
         primary = "#BE00FF"
         secondary = "#FFFFFF"
         travelerStroke = "#BE00FF"
         travelerFill = "#BE00FF"

         featurePalette = "Neon Palette"

     } else if (n > 60 && n <= 65) {
         primary = "#111111"
         secondary = "#4D8F88"
         travelerStroke = "#111111"
         travelerFill = "#111111"

         featurePalette = "Ice Palette"

     } else if (n > 65 && n <= 70) {
         primary = "#ffebd8"
         secondary = "#7BB800"
         travelerStroke = "#7BB800"
         travelerFill = "#ffebd8"

         featurePalette = "Slime Palette"
     } else if (n > 70 && n <= 75) {
         primary = "#47383B"
         secondary = "#BCAF9F"
         travelerStroke = "#BCAF9F"
         travelerFill = "#BCAF9F"

         featurePalette = "Adobe Palette"

     } else if (n > 75 && n <= 80) {
         primary = "#BCAF9F"
         secondary = "#322E3B"
         travelerStroke = "#322E3B"
         travelerFill = "#322E3B"

         featurePalette = "Muted Violet Palette"


     } else if (n > 80 && n <= 85) {
         primary = "#ffebd8"
         secondary = "#0b2a72"
         travelerStroke = "#41FF00"
         travelerFill = "#41FF00"

         featurePalette = "Terminal Blue Palette"

     } else if (n > 85 && n <= 90) {
         primary = "#111111"
         secondary = "#F2B7C6"
         travelerStroke = "#41FF00"
         travelerFill = "#41FF00"

         featurePalette = "Unicorn Palette"

     } else {
         primary = "#111111"
         secondary = "#FCEA08"
         travelerStroke = "#111111" //"#41FF00"
         travelerFill = "#111111"

         featurePalette = "Bumblebee Palette"

     }

     features.push(featurePalette)

     //#FCEA08


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



 let featureBrushStroke = Math.floor(Math.random() * 14);
 features.push('Brush Texture ' + featureBrushStroke)

 function drawImage() {
     var x1 = width * (noise(t + 100 * multiplier));
     var x2 = width * (noise(t + 200 * multiplier));
     var x3 = width * (noise(t + 300 * multiplier));
     var x4 = width * (noise(t + 400 * multiplier));
     var y1 = height * (noise(t + 900 * multiplier));
     var y2 = height * (noise(t + 1000 * multiplier));
     var y3 = height * (noise(t + 1100 * multiplier));
     var y4 = height * (noise(t + 1200 * multiplier));

     let baseSize, waveTypeSpeed, waveSize, motionBlur

     function setImageStroke() {
         let newSecondary = color(secondary)
         newSecondary.setAlpha(10)
         stroke(newSecondary)
         strokeWeight(1 * multiplier)
     }

     let brushID = featureBrushStroke;

     function brush0() {
         //SMOKY ORB BRUSH
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
         //SMOKY ORB CHAIN BRUSH
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
             baseSize = 0 * multiplier
             waveTypeSpeed = Math.cos(millis() * 0.005)
             waveSize = (40 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             ellipse(
                 x2,
                 y2,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)

         }
     }

     function brush2() {
         //SPARK BRUSH
         setImageStroke()

         for (let i = 0; i < 10; i++) {
             baseSize = 0 * multiplier
             waveTypeSpeed = Math.tan(millis() * 0.01)
             waveSize = (10 * multiplier)
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
             circle(
                 x4,
                 y4,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
         }
     }

     function brush3() {
         //WISP BRUSH
         setImageStroke()

         for (let i = 0; i < 20; i++) {
             baseSize = 0 * multiplier
             waveTypeSpeed = Math.tan(millis() * 0.0005)
             waveSize = (1000 * multiplier)
             motionBlur = ((i * 2)) * multiplier
             circle(
                 x1,
                 y1,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
         }
     }

     function brush4() {
         //CLOUD  with line in Center
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
             waveSize = (2 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             circle(
                 x1, y1, x4
             )
         }
     }

     function brush5() {
         //DOUBLE LINE BRUSH
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
         //circle within square
         setImageStroke()

         for (let i = 0; i < 20; i++) {
             baseSize = 200 * multiplier
             waveTypeSpeed = Math.cos(millis() * 0.001)
             waveSize = (200 * multiplier)
             motionBlur = ((i * 2)) * multiplier
             circle(
                 x1,
                 y1,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             baseSize = 0 * multiplier
             waveTypeSpeed = Math.tan(millis() * 0.001)
             waveSize = (200 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             square(
                 x1, y1, baseSize + waveTypeSpeed * waveSize + motionBlur
             )
         }
     }

     function brush7() {
         //triangle and circle
         setImageStroke()

         for (let i = 0; i < 15; i++) {
             baseSize = 200 * multiplier
             waveTypeSpeed = Math.cos(millis() * 0.001)
             waveSize = (0 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             circle(
                 x1,
                 y1,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)

             baseSize = 0 * multiplier
             waveTypeSpeed = Math.cos(millis() * 0.0001)
             waveSize = (1000 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             triangle(
                 x1,
                 y1,
                 x2,
                 y2,
                 x3,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
         }
     }


     function brush8() {
         //GEM CLOUD AND CHAIN STROKE
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

             baseSize = 0 * multiplier
             waveTypeSpeed = Math.cos(millis() * 0.005)
             waveSize = (40 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             ellipse(
                 x2,
                 y2,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             ellipse(
                 x3,
                 y3,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)


         }

     }

     function brush9() {
         //CLOTH FLAME BRUSH
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

     function brush10() {
         setImageStroke()

         //SKELETON BRUSH - CIRCLE
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

     function brush11() {
         setImageStroke()

         //SKELETON BRUSH - SQUARE
         for (let i = 0; i < 15; i++) {
             baseSize = 0 * multiplier
             waveTypeSpeed = Math.cos(millis() * 0.001)
             waveSize = (250 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             square(
                 x1,
                 y1,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             waveTypeSpeed = Math.cos(millis() * 0.0001)

             square(
                 x2,
                 y2,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             waveTypeSpeed = Math.cos(millis() * 0.0005)

             square(
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

     function brush12() {
         setImageStroke()

         for (let i = 0; i < 10; i++) {
             baseSize = 0 * multiplier
             waveTypeSpeed = Math.tan(millis() * 0.1)
             waveSize = (10 * multiplier)
             motionBlur = ((i * 1)) * multiplier
             square(
                 x1,
                 y1,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             square(
                 x2,
                 y2,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             square(
                 x3,
                 y3,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
             square(
                 x4,
                 y4,
                 baseSize + waveTypeSpeed * waveSize + motionBlur)
         }
     }

     function brush13() {
         brush12()
         brush1()
     }

     function brush14() {
         brush5()
         brush2()
     }

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

     t += random(0.001, 0.005);


     stroke(secondary)
     noFill()
     brushStroke[brushID]()


 }

 let avatarSeed = Math.floor(Math.random() * 999) + 1;

 function draw() {
    if (frameCount<=2) {
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
    //circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)
    

strokeWeight(10*multiplier)
    fill(secondary)
     stroke(primary)
     
     circle(width - 360 * multiplier, height - 360 * multiplier, width / 4)
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

 /* //TODO:
 - make art blocks compatible
 - shadowContext on circle not layered correctly
 */