// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GNU General Public License 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GNU General Public License 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the ${license} - see the [LICENSE.md](${renderLicenseLink(license)}) file for details.
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

${data.questions}
`;
}

module.exports = generateMarkdown;






// ## Title

// ## Description

// ## Table of Contents

// ## Installation instructions

// ## Usage

// ## License

// ## Contributors

// ## Tests 

// ## Questions
