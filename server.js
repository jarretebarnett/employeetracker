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
        const query = 'INSERT INTO department(name) VALUE (?)';
        connection.query(query, answer.department, (err, res) => {
            if (err) throw err;
            listDepartments();
            init();
        });
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Supply a desired title for the new role"
        },
        {
            type: "input",
            name: "salary",
            message: "What salary is attributed to this title? Please give a number no more than 7 digits"
        },
        {
            type: "input",
            name: "departmentId",
            message: "What is the department ID number?"
        }
    ]).then((answer) => {
        const query = 'INSERT INTO role(title, salary, department_id) VALUE (?, ?, ?)';
        connection.query(query, [answer.title, answer.salary, answer.departmentId], (err, res) => {
            if (err) throw err;
            listRoles();
            init();
        })
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the new employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the new employee's last name?"
        },
        {
            type: "input",
            name: "roleId",
            message: "Supply a number for their role ID"
        },
        {
            type: "input",
            name: "managerId",
            message: "Supply a number for the manager ID, or 'null' if there is no applicable manager"
        }
    ]).then((answer) => {
        const query = 'INSERT INTO role(title, salary, department_id) VALUE (?, ?, ?)';
        connection.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.managerId], (err, res) => {
            if (err) throw err;
            listEmployees();
            init();
        })
    })
}

const editRole = () => {

}

const ejectApp = () => {
    console.log("Goodbye.");
    connection.end;
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