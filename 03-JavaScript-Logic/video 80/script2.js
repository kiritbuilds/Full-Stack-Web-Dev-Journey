// Step 1: Pehle question waali 'Complex' class banayein
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Step 2: 'add' method banayein jo ek aur complex number (other) ko input lega
  add(other) {
    // Naya real part = (this.real + other.real)
    let newReal = this.real + other.real;
    
    // Naya imaginary part = (this.imaginary + other.imaginary)
    let newImaginary = this.imaginary + other.imaginary;

    // Naye result ko ek naye Complex object ke roop mein return karein
    return new Complex(newReal, newImaginary);
  }
}

// Step 3: Do naye complex numbers banayein
let c1 = new Complex(3, 7); // Represents 3 + 7i
let c2 = new Complex(1, 2); // Represents 1 + 2i

// Step 4: 'add' method ko call karein
let sum = c1.add(c2);

// Step 5: Result check karein
console.log(sum); // Output: Complex { real: 4, imaginary: 9 }
console.log(`The sum is: ${sum.real} + ${sum.imaginary}i`); // Output: The sum is: 4 + 9i