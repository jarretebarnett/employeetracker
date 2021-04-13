require('dotenv').config()
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    init();
});

const listDepartments = () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const listRoles = () => {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const listEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const addDepartment = () => {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "Name the new department"
    }).then((answer) => {
        const query = 'INSERT INTO department(name) VALUE (?)'
        connection.query(query, answer.department, (err, res) => {
            if (err) throw err;
            listDepartments();
        })
    })
}

const addRole = () => {
    
}

const addEmployee = () => {
    
}

const editRole = () => {

}

const ejectApp = () => {

}

const init = () => {
    inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select from the choices below.",
        choices: [
            "View company departments",
            "View company roles",
            "View employee roster",
            "Add department",
            "Add role",
            "Add employee to roster",
            "Edit roster roles",
            "End"
        ]
    }).then((answer) => {
        if (answer.select === "View company departments") {
            listDepartments();
        } else if (answer.select === "View company roles") {
            listRoles();
        } else if (answer.select === "View employee roster") {
            listEmployees();
        } else if (answer.select === "Add department") {
            addDepartment();
        } else if (answer.select === "Add role") {
            addRole();
        } else if (answer.select === "Add employee to roster") {
            addEmployee();
        } else if (answer.select === "Edit roster roles") {
            editRole();
        } else if (answer.select === "End") {
            ejectApp();
        }
    })
}

init();