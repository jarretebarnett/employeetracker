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

const addDepartment = () => {

}

const addRole = () => {
    
}

const addEmployee = () => {
    
}

const showDepartments = () => {

}

const showRoles = () => {
    
}

const showEmployees = () => {
    
}

const editRole = () => {
    
}