//else if (projectId===25){
let hashPairs = [];

for (let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.slice(2 + (j * 2), 4 + (j * 2)));
}

let decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
});

let ranGrid = decPairs[0].map(0, 255, 0, 100);
let gridSize
if (ranGrid <= 33) {
    gridSize = "small"
} else if (ranGrid > 33 && ranGrid <= 69) {
    gridSize = "medium"
} else if (ranGrid < 69 && ranGrid <= 84) {
    gridSize = "large"
} else {
    gridSize = "large"
}


let ranPalette = decPairs[1].map(0, 255, 1, 100)
let palette
if (ranPalette <= 8) {
    palette = "Light Palette"
} else if (ranPalette > 8 && ranPalette <= 16) {
    palette = "Dark Palette"
} else if (ranPalette > 16 && ranPalette <= 20) {
    palette = "Emerald Palette"
} else if (ranPalette > 20 && ranPalette <= 25) {
    palette = "Cream Palette"
} else if (ranPalette > 25 && ranPalette <= 30) {
    palette = "Sky Palette"
} else if (ranPalette > 30 && ranPalette <= 35) {
    palette = "Rose Palette"
} else if (ranPalette > 35 && ranPalette <= 40) {
    palette = "Overcast Palette"
} else if (ranPalette > 40 && ranPalette <= 45) {
    palette = "Steel Palette"
} else if (ranPalette > 45 && ranPalette <= 50) {
    palette = "Jasmine Palette"
} else if (ranPalette > 50 && ranPalette <= 52) {
    palette = "Terminal Palette"
} else if (ranPalette > 52 && ranPalette <= 57) {
    palette = "Bubblegum Palette"
} else if (ranPalette > 57 && ranPalette <= 62) {
    palette = "Neon Palette"
} else if (ranPalette > 62 && ranPalette <= 67) {
    palette = "Ice Palette"
} else if (ranPalette > 67 && ranPalette <= 72) {
    palette = "Forest Palette"
} else if (ranPalette > 72 && ranPalette <= 76) {
    palette = "Adobe Palette"
} else if (ranPalette > 76 && ranPalette <= 82) {
    palette = "Muted Violet Palette"
} else if (ranPalette > 82 && ranPalette <= 85) {
    palette = "Terminal Blue Palette"
} else if (ranPalette > 85 && ranPalette <= 90) {
    palette = "Unicorn Palette"
} else if (ranPalette > 90 && ranPalette <= 95) {
    palette = "Dusted Orange Palette"
} else {
    palette = "Bumblebee Palette"
}



/* In Pathfinders.js I use my own mapRange function because these variables are declared outside of p5. Like so: 


function mapRange(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

let featurePrimaryBrushStroke = Math.floor(mapRange(decPairs[15], 0, 255, 0, 9))
let featureSecondaryBrushStroke = Math.floor(mapRange(decPairs[16], 0, 255, 0, 3))

//Is your math going to be the same as mine?
*/

let primaryBrushVariant = Math.floor(decPairs[15].map(0, 255, 0, 9))
let secondaryBrushVariant = Math.floor(decPairs[16].map(0, 255, 0, 3))

features = ["Start Screen Grid Size: " + gridSize,
    "Color Palette: " + palette,
    "Primary Brush Variant: " + primaryBrushVariant,
    "Secondary Brush Variant:  " + secondaryBrushVariant
]
featuresReduced = ["Start Screen Grid Size: " + gridSize,
    "Color Palette: " + palette,
    "Primary Brush Variant: " + primaryBrushVariant,
    "Secondary Brush Variant:  " + secondaryBrushVariant
]