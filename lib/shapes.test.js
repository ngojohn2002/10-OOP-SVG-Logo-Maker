// Importing necessary modules for testing
const { Triangle, Circle, Square } = require("./shapes");

// Test cases for each shape class
describe("Triangle", () => {
  test("render method should return SVG for triangle shape with specified color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  test("render method should return SVG for circle shape with specified color", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});

describe("Square", () => {
  test("render method should return SVG for square shape with specified color", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="green" />'
    );
  });
});
