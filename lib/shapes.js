// Parent Shape class
class Shape {
  constructor() {
    // Default color for shape
    this.color = "black";
  }

  // Setter method for shape color
  setColor(color) {
    this.color = color;
  }
}

// Triangle class extends Shape
class Triangle extends Shape {
  // Method to render SVG for triangle shape
  render() {
    // SVG string for triangle with dynamic color
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Circle class extends Shape
class Circle extends Shape {
  // Method to render SVG for circle shape
  render() {
    // SVG string for circle with dynamic color
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Square class extends Shape
class Square extends Shape {
  // Method to render SVG for square shape
  render() {
    // SVG string for square with dynamic color
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// Exporting classes for use in other modules
module.exports = { Triangle, Circle, Square };
