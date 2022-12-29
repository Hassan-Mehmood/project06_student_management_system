import crypto from 'crypto';
class Student {
    name;
    age;
    ID;
    feePaid;
    courses;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.ID = crypto.randomBytes(5).toString('hex');
        this.feePaid = false;
        this.courses = [];
    }
    get getCourses() {
        return this.courses;
    }
    set setCourses(course) {
        this.courses.push(course);
    }
    get getID() {
        return this.ID;
    }
    set setFeePaid(paid) {
        this.feePaid = paid;
    }
}
export default Student;
