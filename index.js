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

        //const newMgr = new LockManager(answers.name ...)
        //team.push(newMgr)
        //mainMenu()
    })
}

function mainMenu() {
    //stuff and things ask questions for the next step here
}

start()