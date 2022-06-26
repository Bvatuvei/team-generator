const inquirer = require("inquirer");
const team = [];

function start() {
    inquirer.prompt([
        {
            message: "What is your manager's name?",
            name: "mgrName",
            type: "input"
        },
        {
            message: "What is your manager's id?",
            name: "mgrId",
            type: "input"
        },
        {
            message: "What is your manager's email?",
            name: "mgrEmail",
            type: "input"
        },
        {
            message: "What is your manager's office number?",
            name: "mgrNum",
            type: "input"
        },
    ]).then(answer => {
        console.log(answer)
        const newMgr = new LockManager(answer.name, answer.id, answer.email, answer.number);
        team.push(newMgr);
        console.log(team);
        mainMenu()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is your intern's name?",
            name: "internName",
            type: "input"
        },
        {
            message: "What is your intern's id?",
            name: "internId",
            type: "input"
        },
        {
            message: "What is your intern's email?",
            name: "internEmail",
            type: "input"
        },
        {
            message: "What school is your intern attending",
            name: "internSchool",
            type: "input"
        },
    ]).then(answer => {
        console.log(answer)
        const newIntern = new LockIntern(answer.name, answer.id, answer.email, answer.school);
        team.push(newIntern);
        console.log(team);
        mainMenu()
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is your Engineer's name?",
            name: "EngineerName",
            type: "input"
        },
        {
            message: "What is your Engineer's id?",
            name: "EngineerId",
            type: "input"
        },
        {
            message: "What is your Engineer's email?",
            name: "EngineerEmail",
            type: "input"
        },
        {
            message: "What is your engineers github account?",
            name: "EngineerGithub",
            type: "input"
        },
    ]).then(answer => {
        console.log(answer)
        const newEngineer = new LockEngineer(answer.name, answer.id, answer.email, answer.github);
        team.push(newEngineer);
        console.log(team);
        mainMenu()
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            message: "What is your Employee's name?",
            name: "EmployeeName",
            type: "input"
        },
        {
            message: "What is your Employee's id?",
            name: "EmployeeId",
            type: "input"
        },
        {
            message: "What is your Employee's email?",
            name: "EmployeeEmail",
            type: "input"
        },
    ]).then(answer => {
        console.log(answer)
        const newEmployee = new LockEmployee(answer.name, answer.id, answer.email, "Employee");
        team.push(newEmployee);
        console.log(team);
        mainMenu()
    })
}

function mainMenu() {
    
}

start()
