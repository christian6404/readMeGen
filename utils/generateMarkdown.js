function renderLicenseBadge(license) { //generates the image of the badge
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

function renderLicenseLink(license) { // generates the link for more info
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

function renderLicenseSection(license) {
  if (license = 'Apache License 2.0' || 'MIT license' || 'GNU General Public License 3.0') {
     return `
## License

This project is licensed under the ${license} - see the [LICENSE.md](${renderLicenseLink(license)}) file for details.
`;
  } else if (license === 'None'){
     return '';
  }
}

function generateMD(response) {
  return `# ${response.title} ${renderLicenseBadge(response.license)}

## Description

${response.description}

${renderLicenseSection(response.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.install}

## Usage

${response.usage}

## Contributing

${response.contribution}

## Tests

${response.tests}

## Questions

${response.questions}
`;
}

module.exports = generateMD;
