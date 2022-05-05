// Packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");
const genMD = require("./utils/generateMarkdown");


// questions pertaining to user:
const aboutUser = () => {
    console.log(`
 [USER INPUT]   
    `)
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your NAME:",
            validate: userName => {
                if (userName) {
                    return true;
                } else {
                    console.log("User's name must be provided.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "profession",
            message: "Please enter your TITLE:",
            validate: userProf => {
                if (userProf) {
                    return true;
                } else {
                    console.log("User's profession must be provided.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your EMAIL address:",
            validate: userEmail => {
                if (userEmail) {
                    return true;
                } else {
                    console.log("User's email must be provided.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GITHUB USERNAME:",
            validate: userGitHub => {
                if (userGitHub) {
                    return true;
                } else {
                    console.log("User's GitHub username must be provided.");
                    return false;
                }
            }
        }
    ]);      
};

// questions pertaining to project:
const aboutProject = inputData => {
    console.log(`
 [PROJECT INPUT]
    `)

    return inquirer.prompt([
        {
            type: "list",
            name: "license",
            message: "Please select a LICENSE from the following list:",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0"],
        },
        {
            type: "input",
            name: "title",
            message: "Please enter a TITLE for your project:",
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log("Project must include a title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a DESCRIPTION for your project:",
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log("Project must include a description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter any required INSTALLATIONS instructions for this project. If there are none, enter 'NONE':",
            validate: projectInstall => {
                if (projectInstall) {
                    return true;
                } else {
                    console.log("Please provide text entry. If there are none, enter 'NONE'");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide USAGE information for the project:",
            validate: projectUsage => {
                if (projectUsage) {
                    return true;
                } else {
                    console.log("Please provide a USAGE example for the project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "Please include project CONTRIBUTION GUIDELINES for other users:",
            validate: projectContribution => {
                if (projectContribution) {
                    return true;
                } else {
                    console.log("Please include project contribution guidelines for others.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide TEST INSTRUCTIONS for this project:",
            validate: projectTests => {
                if (projectTests) {
                    return true;
                } else {
                    console.log("Please provide test instructions for this project.");
                    return false;
                }
            }
        },
    ])
    .then((readmeData) => {
        const compData = Object.assign(inputData, readmeData);
        console.log(compData);
        return compData;
    });
};

aboutUser()
    .then(aboutProject)
    .then(inputData => {
        const pushInputData = genMD(inputData);
        fs.writeFile("./01.gen-file/README.md", pushInputData, (err) => {
            if (err) throw new Error(err);
        });
    });