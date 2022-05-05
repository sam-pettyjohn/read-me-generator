 ![MIT](https://img.shields.io/badge/License-MIT-blue)
# Professional README Generator

## Description

A README generator so quickly create a professional README for a new project.

Please use this [video](instert-link) for a walkthough tutorial of the README generator.

## Table of Contents

- [Professional README Generator](#professional-readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
    - [Additional Criteria](#additional-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Built With](#built-with)
  - [Questions](#questions)
  - [License](#license)

## User Story
~~~
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
~~~

## Acceptance Criteria

GIVEN a command-line application that accepts user input
- [x] WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- [x] WHEN I enter my project title
THEN this is displayed as the title of the README
- [x] WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- [x] WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- [x] WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- [x] WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- [x] WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

### Additional Criteria

**Deliverables**

- [x] A sample README generated using the application must be submitted
- [x] Your GitHub repository containing your application code

**Walkthrough Video**

- [] A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file
- [] The walkthrough video must demonstrate how a user would invoke the application from the command line
- [] The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
- [] The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

**Technical Acceptance**

- [x] Satisfies all of the above acceptance criteria plus the following:
- [x] Uses the [inquierer package](https://www.npmjs.com/package/inquirer)

**Repository Quality%**

- [x] Repository has a unique name
- [x] Repository follows best practices for file structure and naming conventions
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages
- [x] Repository contains quality README.md with description and a link to walkthrough video

## Installation

User will need to download or clone the repository from GitHub and use CLI (command-line interface) within VSCode (or similar text-editor).

## Usage

User will initiate the README generator by typing "node index" within the CLI and will be requested to answer provided questions. Please do not leave any blanks. If you do not have an answer, please type "NONE" or similar verbiage.

## Contributing

For any ideas or feedback, please see my contact information [below](#questions).

## Tests

Using the CLI, type "node index" and follow questions.

## Questions

For any questions, please reach out to me through the following resources:

Name: Samuel Pettyjohn <br>
Title: Aspiring Developer <br>
Email: <sammpj47@gmail.com> <br>
GitHub: <https://github.com/sam-pettyjohn/> <br>

## License

MIT License

Copyright (c) 2022 Samuel Pettyjohn
            
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
            
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
            
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 