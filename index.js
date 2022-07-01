const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const TeamHtml = require("./utils/html-template");
const team = [];
const fs = require('fs');

function start() {
  inquirer
    .prompt([
      {
        message: "What is your manager's name?",
        name: "mgrName",
        type: "input",
      },
      {
        message: "What is your manager's id?",
        name: "mgrId",
        type: "input",
      },
      {
        message: "What is your manager's email?",
        name: "mgrEmail",
        type: "input",
      },
      {
        message: "What is your manager's office number?",
        name: "mgrNum",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
      const newMgr = new Manager(
        answer.mgrName,
        answer.mgrId,
        answer.mgrEmail,
        answer.mgrNum
      );
      team.push(newMgr);
      console.log(team);
      mainMenu();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        message: "What is your intern's name?",
        name: "internName",
        type: "input",
      },
      {
        message: "What is your intern's id?",
        name: "internId",
        type: "input",
      },
      {
        message: "What is your intern's email?",
        name: "internEmail",
        type: "input",
      },
      {
        message: "What school is your intern attending",
        name: "internSchool",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
      const newIntern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool
      );
      team.push(newIntern);
      console.log(team);
      mainMenu();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        message: "What is your Engineer's name?",
        name: "engineerName",
        type: "input",
      },
      {
        message: "What is your Engineer's id?",
        name: "engineerId",
        type: "input",
      },
      {
        message: "What is your Engineer's email?",
        name: "engineerEmail",
        type: "input",
      },
      {
        message: "What is your engineers github account?",
        name: "engineerGithub",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
      const newEngineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGithub
      );
      team.push(newEngineer);
      console.log(team);
      mainMenu();
    });
}

// function addEmployee() {
//   inquirer
//     .prompt([
//       {
//         message: "What is your Employee's name?",
//         name: "EmployeeName",
//         type: "input",
//       },
//       {
//         message: "What is your Employee's id?",
//         name: "EmployeeId",
//         type: "input",
//       },
//       {
//         message: "What is your Employee's email?",
//         name: "EmployeeEmail",
//         type: "input",
//       },
//     ])
//     .then((answer) => {
//       console.log(answer);
//       const newEmployee = new LockEmployee(
//         answer.name,
//         answer.id,
//         answer.email,
//         "Employee"
//       );
//       team.push(newEmployee);
//       console.log(team);
//       mainMenu();
//     });
// }

function mainMenu() {
  inquirer
    .prompt([
      {
        message: "Which would you like to add?",
        name: "inputChoice",
        type: "list",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((answer) => {
      switch (answer.inputChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildHtml();
      }
    });
}

function buildHtml() {
    console.log("build Team", team)
    // Use fs (file system) to write html file by passing our team array through TeamHtml
    fs.writeFile('./dist/index.html', TeamHtml(team), err => {
      if (err) {
        console.log(err);
      }
    }
)}

start();
