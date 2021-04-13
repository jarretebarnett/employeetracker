USE employeetracker_db;

-- DEPARTMENTS

INSERT INTO department(name)
VALUE ("Human Resources & Management");

INSERT INTO department(name)
VALUE ("Production & Engineering");

INSERT INTO department(name)
VALUE ("Research & Development");

INSERT INTO department(name)
VALUE ("Sales & Marketing");

INSERT INTO department(name)
VALUE ("Accounting & Finance");

INSERT INTO department(name)
VALUE ("Legal");

-- ROLES

-- Human Resources & Management

INSERT INTO role(title, salary, department_id)
VALUE ("HR Trainee", 15000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("HR Intern", 22000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("HR Assistant", 35000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("HR Trainer", 40000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("HR Associate", 45000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("Manager", 65000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("Administrator", 75000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("HR Director", 85000, 00);

INSERT INTO role(title, salary, department_id)
VALUE ("Chief Human Resources Officer", 115000, 00);

-- Production & Engineering

INSERT INTO role(title, salary, department_id)
VALUE ("Intern Software Developer", 45000, 01);

INSERT INTO role(title, salary, department_id)
VALUE ("Junior Software Developer", 65000, 01);

INSERT INTO role(title, salary, department_id)
VALUE ("Senior Software Developer", 90000, 01);

INSERT INTO role(title, salary, department_id)
VALUE ("Technical Lead", 125000, 01);

-- Research & Development

INSERT INTO role(title, salary, department_id)
VALUE ("Junior Research Scientist", 70000, 02);

INSERT INTO role(title, salary, department_id)
VALUE ("Senior Research Scientist", 95000, 02);

-- Sales & Marketing

INSERT INTO role(title, salary, department_id)
VALUE ("Customer Service Associate", 45000, 03);

INSERT INTO role(title, salary, department_id)
VALUE ("Commercial Sales", 55000, 03);

INSERT INTO role(title, salary, department_id)
VALUE ("Account Coordinator", 65000, 03);

-- Accounting & Finance

INSERT INTO role(title, salary, department_id)
VALUE ("Clerk", 40000, 04);

INSERT INTO role(title, salary, department_id)
VALUE ("Accountant", 65000, 04);

INSERT INTO role(title, salary, department_id)
VALUE ("Auditor", 80000, 04);

INSERT INTO role(title, salary, department_id)
VALUE ("Chief Financial Officer", 155000, 04);

-- Legal

INSERT INTO role(title, salary, department_id)
VALUE ("Arbitrator", 55000, 05);

INSERT INTO role(title, salary, department_id)
VALUE ("Case Manager", 70000, 05);

INSERT INTO role(title, salary, department_id)
VALUE ("Legal Analyst", 85000, 05);

INSERT INTO role(title, salary, department_id)
VALUE ("Attorney", 165000, 05);

-- EMPLOYEES

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Tavis', 'Walker', 3, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Diana', 'Keegan', 5, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Russell', 'Feinstein', 6, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Adam', 'Wexler', 7, 8);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Corey', 'Evans', 8, 9);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Susan', 'Wiley', 9, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Vanessa', 'Reese', 11, 13);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Alex', 'White', 12, 13);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Ian', 'Lyons', 13, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Felix', 'Odom', 14, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Andrew', 'Edison', 15, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Whitney', 'Riley', 16, 18);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Eugene', 'Williams', 18, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Ian', 'Andrews', 20, 22);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Silas', 'Cole', 21, 22);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Phillip', 'Vanderbilt', 22, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Samuel', 'Wheeler', 23, 26);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Ashley', 'Porter', 24, 26);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Anthony', 'Janikowski', 25, 26);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Liam', 'Foster', 26, null);