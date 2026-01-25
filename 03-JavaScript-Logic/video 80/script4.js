// 1. Parent class (Human) banayein
class Human {
  constructor(name) {
    this.name = name;
  }
}

// 2. Child class (Student) banayein jo Human se extends kare
class Student extends Human {
  constructor(name, studentId) {
    super(name); // Parent ke constructor ko call karein
    this.studentId = studentId;
  }
}

// 3. Dono classes ke objects (instances) banayein
let student1 = new Student("Kirit", "S123");
let human1 = new Human("Sagar");

// 4. 'instanceof' operator ka istemal karke check karein
console.log("Kya student1, Student ka instance hai?");
console.log(student1 instanceof Student); // Output: true

console.log("Kya student1, Human ka instance hai?");
console.log(student1 instanceof Human); // Output: true (kyunki Student, Human ka child hai)

console.log("---");

console.log("Kya human1, Human ka instance hai?");
console.log(human1 instanceof Human); // Output: true

console.log("Kya human1, Student ka instance hai?");
console.log(human1 instanceof Student); // Output: false (kyunki har Human, Student nahi hota)