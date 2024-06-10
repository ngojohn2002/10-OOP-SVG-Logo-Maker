# Object-oriented Programming: SVG Logo Maker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The SVG Logo Maker is a Node.js command-line application designed for freelance web developers or anyone who needs a simple yet efficient way to generate logos for their projects without relying on graphic designers. With this tool, users can quickly create custom SVG logos by providing text, choosing colors for the text and shapes, selecting a shape from a predefined list (circle, triangle, or square), and saving the generated logo as an SVG file.

**Key Features:**

1. **User-friendly Interface:** The application utilizes the Inquirer package to provide a user-friendly interface with prompts for text input, color selection, and shape choices.

2. **Custom Text:** Users can enter up to three characters of text to be displayed in the logo, allowing for personalized branding.

3. **Color Customization:** Users can select colors for both the text and the chosen shape either by entering color keywords or hexadecimal numbers, providing flexibility in design.

4. **Shape Selection:** The application offers a list of predefined shapes (circle, triangle, and square) for users to choose from, enabling them to tailor the logo to their preferences.

5. **SVG Output:** Upon entering all necessary input, the application generates an SVG file named `logo.svg`, containing the specified text, colors, and shape, meeting the requirements of scalability and high-quality rendering.

**Technical Details:**

The SVG Logo Maker is built using Node.js and leverages Jest for unit testing to ensure robustness and reliability. The core functionality is implemented through classes such as `Triangle`, `Circle`, and `Square`, with inheritance used to manage common properties and methods efficiently. Additionally, the application follows best practices for file structure, naming conventions, and code quality, promoting maintainability and readability.

**How to Use:**

To use the SVG Logo Maker, simply run the command `node index.js` in the terminal. Follow the prompts to enter text, select colors, and choose a shape. Once all input is provided, the application will generate the SVG file `logo.svg`, confirming its creation in the command line. Users can then open the generated SVG file in a browser to view the logo, ensuring it meets their specifications.

**Conclusion:**

With the SVG Logo Maker, freelance web developers can effortlessly create professional-looking logos tailored to their projects' needs, eliminating the need for expensive graphic design services. By offering a seamless user experience and robust functionality, this application empowers developers to enhance their branding and visual identity with ease.

[Walkthrough Video](#)

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

1. WHEN I am prompted for text
THEN I can enter up to three characters

2. WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

3. WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

4. WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

5. WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

6. WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contribution](#contribution)
- [Credits](#credits)
- [Deliverables](#deliverables)
- [Questions](#questions)
- [License](#license)

## Installation

### Prerequisites

- **Node.js and npm (or yarn):** Ensure Node.js and npm (or yarn) are installed on your system. Verify by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

### Get the Code

- Clone or download the [repository](https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker) containing the SVG Logo Maker code to your local machine.

### Install Dependencies

- Navigate to the project directory in your terminal.
- Run `npm install` (or `yarn install`) to install required dependencies, including Inquirer:

  ```bash
  npm install inquirer

[Back to Table of Contents](#table-of-contents)

## Usage

### Run the Application

To run the SVG Logo Maker app, follow these steps:

1. **Clone the Repository:**
   Clone the GitHub repository containing the SVG Logo Maker code to your local machine. You can do this using the following command in your terminal:

   ```bash
   git clone https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker.git
   ```

2. **Navigate to the Project Directory:**
   Once the repository is cloned, navigate to the project directory using the `cd` command:

   ```bash
   cd 10-OOP-SVG-Logo-Maker
   ```

3. **Install Dependencies:**
   Before running the application, install the required dependencies by running:

   ```bash
   npm install inquirer@8.2.4
   ```

4. **Run the Application:**
   After the dependencies are installed, you can run the application using Node.js. Simply execute the following command:

   ```bash
   node index.js
   ```

5. **Follow the Prompts:**
   Once the application is running, you will be prompted to enter various inputs:
   - Enter the text for the logo (up to three characters).
   - Enter the text color (keyword or hexadecimal).
   - Choose a shape (circle, triangle, or square).
   - Enter the color for the chosen shape (keyword or hexadecimal).

6. **View the Generated Logo:**
   After providing all the necessary inputs, the application will generate an SVG file named `logo.svg` in the project directory. You can open this file using a web browser to view the generated logo.

That's it! You've successfully run the SVG Logo Maker app and created a custom SVG logo for your project.



[Back to Table of Contents](#table-of-contents)

## Tests

### Prerequisites

- Ensure Node.js and npm (or yarn) are installed. Verify with `node -v` and `npm -v` (or `yarn -v`) in your terminal.

### Get the Code



### Install Dependencies

- Navigate to the project directory in your terminal.
- Run `npm install` (or `yarn install`) to install required dependencies, including Inquirer.

### Run the Application

- Execute `node index.js` in your terminal to start the README generator.

### Answer the Prompts



[Back to Table of Contents](#table-of-contents)

## Contribution

We welcome contributions from the community! Here's how you can get involved:

### 1. Fork the Repository

Fork the repository to your GitHub account to create a personal copy.

### 2. Clone Your Fork

Clone your forked repository to your local machine:



### 3. Create a Branch

Create a new branch for your changes with a descriptive name:

```sh
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

Make necessary changes, following project coding standards and best practices.

### 5. Commit Your Changes

Commit changes with a clear, concise message:

```sh
git add .
git commit -m "Add feature/fix description"
```

### 6. Push Your Changes

Push changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

### 7. Open a Pull Request

Go to the original repository on GitHub, open a pull request, and explain your changes:

1. Navigate to the [original repository](https://github.com/ngojohn2002/09-Node-js-Professional-README-Generator).
2. Click "Pull requests."
3. Click "New pull request."
4. Select your branch from the "Compare" dropdown.
5. Click "Create pull request."

### 8. Participate in Code Review

Respond to feedback and questions from maintainers. Make additional changes as needed.

### 9. Wait for Approval and Merge

Once approved, your pull request will be merged into the main branch.

### Contribution Guidelines

- **Code of Conduct:** Follow the [GitHub Community Code of Conduct](https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct).
- **Style Guide:** Adhere to [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
- **Testing:** Write and execute tests for changes, including unit tests where appropriate.
- **Documentation:** Update documentation to reflect changes made.

Thank you for contributing!

[Back to Table of Contents](#table-of-contents)

## Credits

This project was made possible with the help of [ChatGPT](https://chatgpt.com/).

[Back to Table of Contents](#table-of-contents)

## Deliverables

* At least one sample SVG file generated using the application must be submitted.

* Your GitHub repository containing your application code.

* A walkthrough video that demonstrates the functionality of the SVG logo maker and passing tests must be submitted.

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must show all tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated SVG file, showing the file being opened in the browser. The image in the browser must reflect the choices made by the user (text, shape, and colors).



1. [Generaated logo.svg](./logo.svg) using the application.
2. [GitHub repository](https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker) containing the application code.
3. [Walkthrough video](https://drive.google.com/file/d/1PT2Enwkf0uIX3ATyoRZfVLqOeQGAgRgA/view?usp=sharing) demonstrates the functionality of the README generator:
	- link to a walkthrough video that demonstrates its functionality and passes all of the tests

[Back to Table of Contents](#table-of-contents)

## Questions

If you have any questions, feel free to reach out to me:

GitHub: [ngojohn2002](https://github.com/ngojohn2002)

Email: ngojohn2002@yahoo.com

[Back to Table of Contents](#table-of-contents)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

[Back to Table of Contents](#table-of-contents)

---

Copyright &copy; 2024 - All Rights Reserved.