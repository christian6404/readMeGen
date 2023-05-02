// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Give a explanation if there are any installation instructions, if none leave empty',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How can your project be used?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license would you like to include?',
        choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License 3.0'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'List any contributiors here |First, Last, github|',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test that you used for your application? ',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'List any questions you can answer here. |Question: Answer|',
        name: 'questions'
    },
];

inquirer.prompt(questions)
  .then((userInput) => {
    const markdownContent = generateMarkdown(userInput);
    writeToFile('README.md', markdownContent); // write generated markdown to file
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Successfully wrote ${fileName}`);
      }
    });
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions)
      .then((userInput) => {
        console.log(userInput);
        const markdownContent = generateMarkdown(userInput);
        writeToFile('README.md', markdownContent);
      });
  }
  
  // Function call to initialize app
  init();




// ## Title

// ## Description

// ## Table of Contents

// ## Installation instructions

// ## Usage

// ## License

// ## Contributors

// ## Tests 

// ## Questions