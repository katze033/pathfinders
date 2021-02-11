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


  frameRate(10)
  noLoop()

}

let bg = "#111111"
let primary = "#111111"
let secondary = "#eeeeee"
let complimentary = "blue"

function setShadowContext() {
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 60 * multiplier;
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
        (120 * c) * multiplier,
        (120 * r) * multiplier,
        120 * multiplier,
        120 * multiplier)
    }
}

function setBgColor() {
  let nColor = random(0, 100)
  stroke(secondary)
  if (nColor < 80) {
    fill(primary)
  } else if (nColor > 80 && nColor < 99) {
    fill(secondary)
  } else {
    fill(complimentary)
  }
}


function drawSquarePattern(squareX, squareY) {
  strokeWeight(2.5 * multiplier)
  let s = 20
  let n = random(0, 100)
  revertShadowContext()
  if (n < 50) {
    for (let c = 0; c < 10; c++) {
      for (let r = 0; r < 10; r++) {

        square(
          squareX + 10 * multiplier + c * (s * multiplier + s / 10 * multiplier),
          squareY + 10 * multiplier + r * (s * multiplier + s / 10 * multiplier),
          s * multiplier)
      }
    }
  }
  strokeWeight(10 * multiplier)
  setShadowContext()
}


function drawCirclePattern(circX, circY) {
  strokeWeight(5 * multiplier)
  let s = 40
  let n = random(0, 100)
  revertShadowContext()
  if (n < 50) {
    for (let c = 0; c < 10; c++) {
      for (let r = 0; r < 10; r++) {

        let n = random(0, 100)
        if (n < 20) {
          fill(secondary)
        } else if (n > 20 && n < random(90, 100)) {
          fill(primary)
        } else {
          fill(complimentary)
        }

        circle(
          circX + s * multiplier + c * (s * multiplier + s / 10 * multiplier),
          circY + s * multiplier + r * (s * multiplier + s / 10 * multiplier),
          s * multiplier)
      }
    }
  }
  strokeWeight(10 * multiplier)
  setShadowContext()
  fill(primary)
}



function drawLinePattern(lineX, lineY) {
  strokeWeight(5 * multiplier)
  revertShadowContext()

  let s = 40
  for (let c = 0; c < 23; c++) {
    for (let r = 0; r < 23; r++) {
      line(
        lineX + c * (20 * multiplier),
        lineY + r * (20 * multiplier),
        lineX + (s * multiplier) + c * (20 * multiplier),
        lineY + (s * multiplier) + r * (20 * multiplier))
    }
  }
  strokeWeight(10 * multiplier)
  setShadowContext()
}

function drawVortex(circX, circY) {
  revertShadowContext()
  strokeWeight(5 * multiplier)
  let s = 460

  for (let i = 0; i < 10; i++) {
    circle(circX + width / 10, circY + height / 10, s * multiplier - i * (50 * multiplier))
  }
  strokeWeight(10 * multiplier)
  setShadowContext()
}

function drawAllPatterns(x3, y3) {
  let n = random(0, 100)
  stroke(secondary)
  if (fill(primary) || fill(complimentary)) {
    stroke(secondary)
  } else if (fill(secondary)) {
    stroke(primary)
  }
  if (n < 50) {
    drawCirclePattern(x3, y3)
  } else if (n > 50 && n < 60) {
    drawLinePattern(x3, y3)
  } else if (n > 60 && n < 95) {
    drawVortex(x3, y3)
  } else if (n > 95) {
    drawSquarePattern(x3, y3)
  }
  stroke(secondary)
}

function drawQuadrant(x1, y1, x2, y2) {
  strokeWeight(10 * multiplier)
  let n = random(0, 100)
  let x3, y3, x4, y4
  stroke(secondary)
  setBgColor()
  if (n < 25) {
    // FULL SQUARE QUADRANT
    rect(x1, y1, x2 * 2.25, y2 * 2.25, random(0, 1000) * multiplier)
  } else if (n > 25 && n < 50) {
    //LONG HORIZONTAL
    for (let c = 0; c < random(0, 2); c++) {
      for (let r = 0; r < 1; r++) {
        x3 = x1 + c * (600 * multiplier)
        y3 = y1 + r * (600 * multiplier)
        x4 = x2
        y4 = y2
        rect(x3, y3, x4, y4)

        drawAllPatterns(x3, y3, x4, y4)

        if (r == 0) {
          x3 = x1
          y3 = (y1 + height / 4) + r * (600 * multiplier)
          x4 = x2 * 2.25
          y4 = y2

          setBgColor()
          rect(x3, y3, x4, y4)
        }
      }
    }
  } else if (n > 50 && n < 60) { //(n > 50 && n < 60)
    // LONG VERTICAL
    for (let c = 0; c < 1; c++) {
      for (let r = 0; r < random(0, 2); r++) {
        x3 = x1 + c * (600 * multiplier)
        y3 = y1 + r * (600 * multiplier)
        x4 = x2
        y4 = y2
        rect(x3, y3, x4, y4)
        drawAllPatterns(x3, y3, x4, y4)

        if (c == 0) {
          x3 = (x1 + width / 4) + c * (600 * multiplier)
          y3 = y1
          x4 = x2
          y4 = y2 * 2.25

          setBgColor()
          rect(x3, y3, x4, y4)
        }
      }
    }
  } else if (n > 60) {
    // 4x4 RANDOMIZER
    for (let c = 0; c < random(0, 2); c++) {
      for (let r = 0; r < random(0, 2); r++) {
        x3 = x1 + c * (600 * multiplier)
        y3 = y1 + r * (600 * multiplier)
        x4 = x2
        y4 = y2
        setBgColor()
        
        rect(x3, y3, x4, y4)

        drawAllPatterns(x3, y3, x4, y4)
      }
    }
  }
  
}

function drawBase() {

  let x1, y1, x2, y2
  let quadPlacement = 21
  x1 = 60 * multiplier
  y1 = 60 * multiplier
  x2 = 480 * multiplier
  y2 = 480 * multiplier
  drawQuadrant(x1, y1, x2, y2)
  x1 = (60 * multiplier) * quadPlacement

  drawQuadrant(x1, y1, x2, y2)
  x1 = 60 * multiplier
  y1 = (60 * multiplier) * quadPlacement
  drawQuadrant(x1, y1, x2, y2)
  x1 = (60 * multiplier) * quadPlacement
  drawQuadrant(x1, y1, x2, y2)

}



function draw() {
  background(primary)
  strokeWeight(5 * multiplier)
  scale(1)
stroke(secondary)
fill(secondary)
  //drawGrid()

  for (let i = 0; i < 2000; i++) {
    circle(random(0, width), random(0, height), random(5, 30) * multiplier)
  }
  resetMatrix()
  strokeWeight(10 * multiplier)
  setShadowContext()
  drawBase()
  //line(width / 2, 0, width / 2, height)
  revertShadowContext()
}



function rnd() {
  seed ^= seed << 13;
  seed ^= seed >> 17;
  seed ^= seed << 5;
  return (((seed < 0) ? ~seed + 1 : seed) % 1000000) / 1000000;
}