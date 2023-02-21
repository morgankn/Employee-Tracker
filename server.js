const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

const employeeData = [
    {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'first_name',
      },
      {
        type: 'input',
        message: 'What is the employees last name?',
        name: 'last_name',
      },
      {
        type: 'input',
        message: 'What is the employees id?',
        name: 'employeeID',
      },
      {
        type: 'input',
        message: 'What is the employees managers id?',
        name: 'managerID',
      },
      {
        type: 'input',
        message: 'What is the employees role?',
        name: 'role',
      },
];
const roleData = [
    {
        type: 'input',
        message: 'What is the title of the role?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary',
      },
      {
        type: 'input',
        message: 'What is the department this role is in?',
        name: 'department_id',
      },
];
const departmentData = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary',
      },
      {
        type: 'input',
        message: 'What is the department this role is in?',
        name: 'department_id',
      },
]

const manageEmployees = [
    {
        type:'list',
        message:'What would you like to do?',
        name:'choices',
        choices:[
            'View all Departments',
            'View all Roles',
            'View all Employees',
            ,
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Delete Department',
        ]
    },
];
function init(){
    inquirer .prompt(manageEmployees).then(data =>{ 
        console.log(data);
        if(data.choices === 'View all Departments'){
            db.query('SELECT * FROM department',(err, results) => {
                if(err) throw err
                console.table(results);
                init()
            })
        } else if (data.choices === 'Add Department'){
            inquirer.prompt(departmentData).then(data => {
                db.query('INSERT INTO department SET ?', data, (err, results) => {
                    console.table(results);
                    init()
                })
            })
        } else if (data.choices === 'View all Roles'){
            inquirer.prompt()
            
        }
    } )
};

init();