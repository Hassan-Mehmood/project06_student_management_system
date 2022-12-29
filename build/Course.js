class Course {
    name;
    creditHours;
    instructor;
    tuitionFee;
    constructor(name, instructor, credits, fee) {
        this.name = name;
        this.instructor = instructor;
        this.creditHours = credits;
        this.tuitionFee = fee;
    }
}
export default Course;
