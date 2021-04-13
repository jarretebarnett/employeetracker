const mysql = require("mysql");
const express = require("express");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: employeetracker_db
});

const listDepartments = () => {

}

const listRoles = () => {
    
}

const listEmployees = () => {
    
}

const addDepartment = () => {

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