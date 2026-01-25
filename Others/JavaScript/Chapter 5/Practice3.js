const givenArray = [10, 25, 30, 47, 50, 99, 100, 120];
console.log(givenArray);

const divisibleByTen = givenArray.filter(number => {
    return number % 10 == 0;
});
console.log("Numbers divisible by 10:", divisibleByTen);