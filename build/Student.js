import crypto from 'crypto';
class Student {
    name;
    age;
    ID;
    courses;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.ID = crypto.randomBytes(5).toString('hex');
        this.courses = [];
    }
}
export default Student;
