import crypto from 'crypto';

class Student {
    name: string;
    age: number;
    ID: string;
    courses: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.ID = crypto.randomBytes(5).toString('hex');
        this.courses = [];
    }
}
export default Student;
