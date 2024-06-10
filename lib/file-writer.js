// Importing file system module
const fs = require("fs");

// Function to write SVG content to a file
function writeSVGToFile(svgContent, fileName) {
  // Writing SVG content to specified file
  fs.writeFileSync(fileName, svgContent);
}

// Exporting function for use in other modules
module.exports = { writeSVGToFile };
