class Course {
    name: string;
    creditHours: number;
    instructor: string;
    tuitionFee: number;

    constructor(name: string, instructor: string, credits: number, fee: number) {
        this.name = name;
        this.instructor = instructor;
        this.creditHours = credits;
        this.tuitionFee = fee;
    }
}

export default Course;
