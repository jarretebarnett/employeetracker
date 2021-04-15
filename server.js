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
        const query = 'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)';
        connection.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.managerId], (err, res) => {
            if (err) throw err;
            listEmployees();
            init();
        })
    })
}

const clearDepartment = () => {
    const queryi = 'SELECT * FROM department'
    connection.query(queryi, (err, res) => {
      if (err) throw err;
      inquirer.prompt([{
        type: "list",
        name: "pickDepartment",
        message: "Select a role to remove",
        choices: res.map(department => {
          return { name: `${department.name}`, value: department.id }
        })
      }]).then(answer => {
          const queryii = 'DELETE FROM department WHERE ?'
          connection.query(queryii, [{ id: answer.pickDepartment }], (err, res) => {
            if (err) throw err;
            console.log("Department successfully removed");
            listDepartments();
            init();
          })
        })
    })
}

const clearRole = () => {
    const queryi = 'SELECT * FROM role'
    connection.query(queryi, (err, res) => {
      if (err) throw err;
      inquirer.prompt([{
        type: "list",
        name: "pickRole",
        message: "Select a role to remove",
        choices: res.map(role => {
          return { name: `${role.title}`, value: role.id }
        })
      }]).then(answer => {
          const queryii = 'DELETE FROM role WHERE ?'
          connection.query(queryii, [{ id: answer.pickRole }], (err, res) => {
            if (err) throw err;
            console.log("Role successfully removed");
            listRoles();
            init();
          })
        })
    })
}

const clearEmployee = () => {
    const queryi = 'SELECT * FROM employee'
    connection.query(queryi, (err, res) => {
    if (err) throw err;
    inquirer.prompt([{
      type: "list",
      name: "pickEmployee",
      message: "Select an employee to remove",
      choices: res.map(employee => {
        return { name: `${employee.first_name} ${employee.last_name}`, value: employee.id }
      })
    }]).then(answer => {
        const queryii = 'DELETE FROM employee WHERE ?'
        connection.query(queryii, [{ id: answer.pickEmployee }], (err, res) => {
          if (err) throw err;
          console.log("Employee successfully removed");
          listEmployees();
          init();
        })
      })
  })
}

const ejectApp = () => {
    console.log("Application and connection ejected");
    connection.end;
}

const init = () => {
    inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select from the choices below",
        choices: [
            "View company departments",
            "View company roles",
            "View employee roster",
            "Add department",
            "Add role",
            "Add employee to roster",
            "Remove an undesired or expired department",
            "Remove an undesired or expired role",
            "Remove an employee from roster",
            "Exit Application"
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
        } else if (answer.select === "Remove an undesired or expired department") {
            clearDepartment();
        } else if (answer.select === "Remove an undesired or expired role") {
            clearRole();
        } else if (answer.select === "Remove an employee from roster") {
            clearEmployee();
        } else if (answer.select === "Exit Application") {
            ejectApp();
        }
    })
}