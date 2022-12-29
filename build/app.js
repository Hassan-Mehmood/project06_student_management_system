#! /usr/bin/env node
import inquirer from 'inquirer';
import Student from './Student.js';
// import Course from './Course.js';
const MENU_CHOICES = [
    'Add new student',
    'View students',
    'View courses',
    'Enroll student in course',
    'View balance',
    'Pay tuition fee',
    'Show status',
    'Exit',
];
const studentsArr = [];
async function main() {
    while (true) {
        const { menuOption } = await inquirer.prompt({
            message: 'Choose an option',
            name: 'menuOption',
            type: 'rawlist',
            choices: MENU_CHOICES,
        });
        if (menuOption === MENU_CHOICES[0])
            await addNewStudent();
        if (menuOption === MENU_CHOICES[1])
            viewAllStudents();
        if (menuOption === MENU_CHOICES[7])
            break;
    }
}
async function addNewStudent() {
    const { name, age } = await inquirer.prompt([
        {
            message: 'Student Name: ',
            name: 'name',
            type: 'input',
            validate: (input) => {
                if (input.trim() === '') {
                    return 'Please enter a name';
                }
                else {
                    return true;
                }
            },
        },
        {
            message: 'Enter age',
            name: 'age',
            type: 'input',
            validate: (input) => {
                if (isNaN(input) || !input) {
                    return 'Please enter age';
                }
                else {
                    return true;
                }
            },
        },
    ]);
    const student = new Student(name, age);
    studentsArr.push(student);
}
function viewAllStudents() {
    console.log(studentsArr);
}
main();
