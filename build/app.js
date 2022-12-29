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
const coursesArr = [
    {
        name: 'Metavere Developer',
        instructor: 'Dr Zia Khan',
    },
    {
        name: 'Data Structures and Algorithms',
        instructor: 'Professor Smith',
    },
    {
        name: 'Object Oriented Programming',
        instructor: 'Professor Someone',
    },
];
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
            console.log(studentsArr);
        if (menuOption === MENU_CHOICES[2])
            console.log(coursesArr);
        if (menuOption === MENU_CHOICES[3])
            await enrollStudent();
        if (menuOption === MENU_CHOICES[5])
            await payFee();
        if (menuOption === MENU_CHOICES[6])
            await showStatus();
        if (menuOption === MENU_CHOICES[7])
            break;
    }
}
async function showStatus() {
    const { id } = await inquirer.prompt({
        message: 'Enter student ID',
        name: 'id',
        type: 'input',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter an ID';
            }
            else {
                return true;
            }
        },
    });
    for (let i = 0; i < studentsArr.length; i++) {
        const student = studentsArr[i];
        if (student.getID === id) {
            console.log(student);
            return;
        }
    }
}
async function payFee() {
    const { id } = await inquirer.prompt({
        message: 'Enter student ID',
        name: 'id',
        type: 'input',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter an ID';
            }
            else {
                return true;
            }
        },
    });
    for (let i = 0; i < studentsArr.length; i++) {
        const student = studentsArr[i];
        if (student.getID === id) {
            student.setFeePaid = true;
            return;
        }
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
async function enrollStudent() {
    if (studentsArr.length === 0) {
        console.log('Add students first');
        return;
    }
    const { course, id } = await inquirer.prompt([
        {
            message: 'Select a course',
            name: 'course',
            type: 'rawlist',
            choices: coursesArr,
        },
        {
            message: 'Enter student id',
            name: 'id',
            type: 'input',
            validate: (input) => {
                if (input.trim() === '') {
                    return 'Please enter an id';
                }
                else {
                    return true;
                }
            },
        },
    ]);
    for (let i = 0; i < studentsArr.length; i++) {
        if (id === studentsArr[i].getID) {
            studentsArr[i].setCourses = course;
        }
    }
}
main();
