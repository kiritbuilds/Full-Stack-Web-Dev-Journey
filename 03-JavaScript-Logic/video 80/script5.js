class Complex {
  // 1. Constructor banaya jo internal properties set karega
  // Humne properties ke aage underscore (_) lagaya hai taaki woh getter/setter ke naam se alag hon
  constructor(real, imaginary) {
    this._real = real;
    this._imaginary = imaginary;
  }

  // 2. 'real' part ke liye GETTER
  // Ise 'a.real' likh kar call kiya jaata hai (bina '()')
  get real() {
    console.log("Getting real part...");
    return this._real;
  }

  // 3. 'real' part ke liye SETTER
  // Ise 'a.real = 10' likh kar call kiya jaata hai
  set real(newValue) {
    console.log("Setting real part to", newValue);
    this._real = newValue;
  }

  // 4. 'imaginary' part ke liye GETTER
  get imaginary() {
    console.log("Getting imaginary part...");
    return this._imaginary;
  }

  // 5. 'imaginary' part ke liye SETTER
  set imaginary(newValue) {
    console.log("Setting imaginary part to", newValue);
    this._imaginary = newValue;
  }
}

// 6. Object banayein
let a = new Complex(5, 7); // Shuruati value 5 + 7i

// 7. Getters ko call karein (property ki tarah)
console.log(a.real);       // Output: Getting real part... 5
console.log(a.imaginary);  // Output: Getting imaginary part... 7

// 8. Setters ko call karein (property ki tarah)
a.real = 10;               // Output: Setting real part to 10
a.imaginary = 20;          // Output: Setting imaginary part to 20

// Nayi values check karein
console.log(a); // Output: Complex { _real: 10, _imaginary: 20 }