import crypto from 'crypto';

class Student {
  private name: string;
  private age: number;
  private ID: string;
  private feePaid: boolean;
  private courses: { name: string; instructor: string }[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.ID = crypto.randomBytes(5).toString('hex');
    this.feePaid = false;
    this.courses = [];
  }

  get getCourses() {
    return this.courses;
  }
  set setCourses(course: { name: string; instructor: string }) {
    this.courses.push(course);
  }

  get getID() {
    return this.ID;
  }

  set setFeePaid(paid: boolean) {
    this.feePaid = paid;
  }
}
export default Student;
