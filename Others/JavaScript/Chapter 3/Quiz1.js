// Ek sample object banayein
const student = {
  name: "Rohan Das",
  course: "Computer Engineering",
  age: 20,
  isEnrolled: true
};

// for...in loop ka istemal karke object ki har property ko access karein
console.log("Student Details:");

for (let key in student) {
  // 'key' variable mein property ka naam aayega (e.g., "name", "course")
  // 'student[key]' se uss property ki value aayegi (e.g., student["name"] = "Rohan Das")
  console.log(key ,":",student[key]);
//   console.log(`${key}: ${student[key]}`);
}