// Importing shape classes
const { Triangle, Circle, Square } = require("./shapes");

// Function to generate SVG content based on user input
function generateSVG(text, textColor, shape, shapeColor) {
  // Creating new shape instance based on user's choice
  let selectedShape;
  switch (shape) {
    case "circle":
      selectedShape = new Circle();
      break;
    case "triangle":
      selectedShape = new Triangle();
      break;
    case "square":
      selectedShape = new Square();
      break;
    default:
      selectedShape = new Circle(); // Default shape is circle
  }
  // Setting colors for shape and text
  selectedShape.setColor(shapeColor);

  // Constructing the SVG content
  const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <!-- Shape -->
      ${selectedShape.render()}
      
      <!-- Text -->
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent;
}

// Exporting function for use in other modules
module.exports = { generateSVG };
