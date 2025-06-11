class Person
{
    constructor(name,age,gender,interest)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.interest=interest;
    }
     greeting()
    {
        console.log(`hello guys  my name is ${this.name} and my age is ${this.age}`);

    }
    farewell()
    {
        console.log("Bye guys we will meet again ");

    }
}
class Student extends Person
{
    constructor(name,age,gender,interest,studies)
    {
        super(name,age,gender,interest);
        this.studies=studies;
    }
    greeting()
    {
        console.log(`hello guys my name is ${this.name} and my age is ${this.age} and i enjoy studying ${this.studies} and my hobbies are ${this.interest}`)

    }
}
class Teacher extends Person
{
    constructor(name,age,gender,interest,subjectTaught)
    {
        super(name,age,gender,interest);
        this.subjectTaught=subjectTaught;
    }
    farewell()
    {
        console.log(`Bye students loved teaching you${this.subjectTaught}`);
    }
}
const person = new Person("Parth", 24, "male", ["workout", "football"]);
console.log(person.greeting()); 
console.log(person.farewell()); 

const student = new Student("Akhil", 21, "male", ["stock marketing", "drinking"], "Computer Science");
console.log(student.greeting());
console.log(student.farewell()); 

const teacher = new Teacher("Ramu", 45, "Male", "reading books",["Math", "Physics"]);
console.log(teacher.greeting()); 
console.log(teacher.farewell()); 