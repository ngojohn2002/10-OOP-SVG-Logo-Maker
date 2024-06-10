// Importing necessary modules
const { getText, getColor, getShape } = require("./lib/user-input");
const { generateSVG } = require("./lib/svg-generator");
const { writeSVGToFile } = require("./lib/file-writer");

// Main function to run the SVG Logo Maker
async function runLogoMaker() {
  try {
    // Prompting user for input
    const text = await getText();
    const textColor = await getColor(
      "Enter text color (keyword or hexadecimal): "
    );
    const shape = await getShape();
    const shapeColor = await getColor(
      `Enter ${shape} color (keyword or hexadecimal): `
    );

    // Generating SVG content
    const svgContent = generateSVG(text, textColor, shape, shapeColor);

    // Writing SVG content to file
    writeSVGToFile(svgContent, `./examples/${shape}Logo.svg`);

    // Printing success message
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Invoking the main function
runLogoMaker();
