// TODO: Include packages needed for this application
const fs = require('fs');

(async () => {
    const { default: inquirer } = await import('inquirer');
  
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'liveLink',
    message: 'Provide the live link to your application:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'features',
    message: 'Provide a list of application features:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'collaborators',
    message: 'Provide the names and github profiles of any collaborators:',
  },
  {
    type: 'input',
    name: 'thirdPartyAssets',
    message: 'Provide the names of any third-party assets that require attribution and list creators:',
  },
  {
    type: 'input',
    name: 'tutorials',
    message: 'Provide the links to any tutorials used:',
  },
  {
    type: 'input',
    name: 'sourceCode',
    message: 'Provide the location of any source code:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const {
      title,
      liveLink,
      description,
      features,
      installation,
      usage,
      contribution,
      tests,
      collaborators,
      thirdPartyAssets,
      tutorials,
      sourceCode,
      license,
      github,
      email,
    } = responses;

    let licenseBadge = '';

      if (license !== 'None') {
        licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)\n\n`;
      }

      const content = `# ${title}\n\n${licenseBadge}


## Live Link: ${liveLink}

## Description
${description}

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Features
${features}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${tests}

## Credits
Collaborators: ${collaborators}
Third-party Assets: ${thirdPartyAssets}
Tutorials: ${tutorials}
Source-code: ${sourceCode}


## License
This project is licensed under the ${license} license. See the LICENSE file for more information.


## Questions
For any questions or concerns, please reach out to me on GitHub or via email:
- GitHub: [${github}](https://github.com/${github})
- Email: ${email}`;

    writeToFile('README.md', content);
  });
}

// Function call to initialize app
init();
})();
