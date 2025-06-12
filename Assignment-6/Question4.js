class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return this.firstName + this.lastName;
  }
  averageAge(obj) {
    let sum = 0;
    let len = obj.length;
    for (let x of obj) {
      sum = sum + x.age;
    }
    return sum / len;
  }
}
obj1 = new Person("parth", "yadav", 24);
obj2 = new Person("Akhil", "Dhawan", 21);
arr = [obj1, obj2];
obj = new Person();
let ans = obj.averageAge(arr);
console.log(ans);
