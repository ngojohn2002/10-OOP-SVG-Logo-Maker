// Importing inquirer for collecting user input
const inquirer = require("inquirer");

// Function to prompt user for text input
async function getText() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text (up to three characters): ",
      validate: function (value) {
        // Validating input to be maximum of three characters
        if (value.length <= 3) {
          return true;
        }
        return "Please enter up to three characters.";
      },
    },
  ]);
  return response.text;
}

// Function to prompt user for color input
async function getColor(message) {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "color",
      message: message,
      // Allowing any input for color (keyword or hexadecimal)
    },
  ]);
  return response.color;
}

// Function to prompt user for shape selection
async function getShape() {
  const response = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
  ]);
  return response.shape;
}

// Exporting functions for use in other modules
module.exports = { getText, getColor, getShape };
