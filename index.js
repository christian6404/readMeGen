const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questionsAndAnswers = [{
      type: 'input',
      message: 'What is the Title of your project?',
      name: 'title',
   },
   {
      type: 'input',
      message: 'Give a description of your project',
      name: 'description',
   },
   {
      type: 'input',
      message: 'Give a explanation if there are any installation instructions, if none N/A',
      name: 'install',
   },
   {
      type: 'input',
      message: 'How can your project be used?',
      name: 'usage',
   },
   {
      type: 'list',
      message: 'Which license would you like to include?',
      choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License 3.0', 'None'],
      name: 'license',
   },
   {
      type: 'input',
      message: 'List any contributors here |First, Last, github|',
      name: 'contribution',
   },
   {
      type: 'input',
      message: 'What are the test that you used for your application? If none N/A',
      name: 'tests',
   },
   {
      type: 'input',
      message: 'List any questions you can answer here. |Question: Answer|',
      name: 'questions',
   },
];

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
      if (err) {
         console.error(err);
      } else {
         console.log(`Successfully wrote ${fileName}`);
      }
   });
}

function init() {
   inquirer.prompt(questionsAndAnswers)
      .then((input) => {
         console.log(input);
         const markdownContent = generateMarkdown(input);
         writeToFile('README.md', markdownContent); // uses function above to take data provided and write to the markdown file
      });
}
init();