DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE DATABASE employeetracker_db;

CREATE TABLE department(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role(
	id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(30) NOT NULL,
    salary DECIMAL(7,0) NOT NULL,
    department_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employee(
	id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);
