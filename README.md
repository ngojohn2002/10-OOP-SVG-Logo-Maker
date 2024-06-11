# Object-oriented Programming: SVG Logo Maker
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The SVG Logo Maker is a Node.js command-line application designed for freelance web developers or anyone who needs a simple yet efficient way to generate logos for their projects without relying on graphic designers. With this tool, users can quickly create custom SVG logos by providing text, choosing colors for the text and shapes, selecting a shape from a predefined list (circle, triangle, or square), and saving the generated logo as an SVG file.

**Key Features:**

- **User-friendly Interface:** The application utilizes the Inquirer package to provide a user-friendly interface with prompts for text input, color selection, and shape choices.

- **Custom Text:** Users can enter up to three characters of text to be displayed in the logo, allowing for personalized branding.

- **Color Customization:** Users can select colors for both the text and the chosen shape either by entering color keywords or hexadecimal numbers, providing flexibility in design.

- **Shape Selection:** The application offers a list of predefined shapes (circle, triangle, and square) for users to choose from, enabling them to tailor the logo to their preferences.

- **SVG Output:** Upon entering all necessary input, the application generates an SVG file named `logo.svg`, containing the specified text, colors, and shape, meeting the requirements of scalability and high-quality rendering.

**Technical Details:**

The SVG Logo Maker is built using Node.js and leverages Jest for unit testing to ensure robustness and reliability. The core functionality is implemented through classes such as `Triangle`, `Circle`, and `Square`, with inheritance used to manage common properties and methods efficiently. Additionally, the application follows best practices for file structure, naming conventions, and code quality, promoting maintainability and readability.

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

### 1. Prerequisites

**Node.js and npm (or yarn):** Ensure Node.js and npm (or yarn) are installed on your system. Verify by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

To install Node.js and npm (Node Package Manager), you can follow these steps:

#### For Windows:

1. **Download Node.js Installer:**
   Go to the official Node.js website at [nodejs.org](https://nodejs.org/), and download the Windows installer (`.msi` file) for the LTS (Long-Term Support) version.

2. **Run the Installer:**
   Once the installer is downloaded, double-click on the downloaded file to run it.

3. **Follow Installation Steps:**
   Follow the prompts in the Node.js Setup Wizard. Accept the license agreement, choose the installation location, and click "Next" to proceed.

4. **Complete Installation:**
   Click "Install" to begin the installation. Once the installation is complete, click "Finish" to close the setup wizard.

5. **Verify Installation:**
   Open Command Prompt or PowerShell and type the following commands to verify that Node.js and npm are installed:
   ```bash
   node -v
   npm -v
   ```
   These commands should display the installed versions of Node.js and npm, respectively.

#### For macOS:

1. **Install Node.js Using Homebrew:**
   If you have Homebrew installed, you can use it to install Node.js and npm by running the following command in Terminal:
   ```bash
   brew install node
   ```

2. **Verify Installation:**
   After the installation is complete, you can verify that Node.js and npm are installed by typing the following commands in Terminal:
   ```bash
   node -v
   npm -v
   ```
   These commands should display the installed versions of Node.js and npm, respectively.

#### For Linux (Ubuntu/Debian):

1. **Install Node.js Using Package Manager:**
   You can install Node.js and npm using the package manager (apt) by running the following commands in Terminal:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **Verify Installation:**
   After the installation is complete, you can verify that Node.js and npm are installed by typing the following commands in Terminal:
   ```bash
   node -v
   npm -v
   ```
   These commands should display the installed versions of Node.js and npm, respectively.

Once Node.js and npm are successfully installed, you can proceed with using them to develop and run your applications.

### 2. Get the Code

Clone or download the [repository](https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker) containing the SVG Logo Maker code to your local machine by navigate to the project directory in your terminal and run:

```bash
git clone https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker.git
   ```

### 3. Install Dependencies

From the project directory in your terminal run:

```bash
npm install inquirer@8.2.4
```

This command installs required dependencies, including Inquirer version 8.2.4.

[Back to Table of Contents](#table-of-contents)

## Usage

To use the SVG Logo Maker app, follow these steps:

1. **Run the Application:**
   ```bash
   node index.js
   ```

2. **Follow the Prompts:**
   Once the application is running, follow the prompts to enter text, select colors, and choose a shape.

3. **View the Generated Logo:**
   After providing all the necessary inputs, the application will generate an SVG file named `${shape}Logo.svg` in the project's `examples` directory. You can open this file using a web browser to view the generated logo.  

[Back to Table of Contents](#table-of-contents)

## Tests

Ensure Node.js and npm (or yarn) are installed. Navigate to the project directory and run:

```bash
npm test
```

This command executes Jest and runs the tests defined in the project.

After running the tests, Jest will display the test results in the terminal. It will indicate which test cases passed, which failed, and any error messages or stack traces for failed tests. Review the test output to ensure that all tests pass successfully and that your code behaves as expected.

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

1. Navigate to the [original repository](https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker).
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

1. Generated sample logos using the application: 
   - [circleLogo.svg](./examples/circleLogo.svg)
   - [squareLogo.svg](./examples/squareLogo.svg)
   - [triangleLogo.svg](./examples/triangleLogo.svg)

2. [GitHub repository](https://github.com/ngojohn2002/10-OOP-SVG-Logo-Maker) containing the application code.
3. [Walkthrough video](https://drive.google.com/file/d/1Xqj7dlci5oRxU3lBvSXeYKAj51xStRHQ/view?usp=sharing) demonstrates the functionality and test of the SVG Loge Maker app.

[Back to Table of Contents](#table-of-contents)

## Questions

If you have any questions, feel free to reach out:

- GitHub: [ngojohn2002](https://github.com/ngojohn2002)
- Email: ngojohn2002@yahoo.com

[Back to Table of Contents](#table-of-contents)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

[Back to Table of Contents](#table-of-contents)

---
© 2024 - All Rights Reserved.

