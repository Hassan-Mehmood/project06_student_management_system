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
    get getCourses() {
        return this.courses;
    }
    set setCourses(course) {
        this.courses.push(course);
    }
}
export default Student;
