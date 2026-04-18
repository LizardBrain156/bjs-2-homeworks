function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Alex", "male", 23);
let student2 = new Student("Bob", "male", 26);
let student3 = new Student("Jessica", "female", 20);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    } else {
        return 0;
    }
};

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }

    let marksSum = this.marks.reduce((a, b) => a + b, 0);
    return marksSum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};