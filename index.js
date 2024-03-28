// Question 1: a function that logs all numbers from 5 to 100
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    };
};

// fiveToOneHundred();

// Question 2: a function that logs all positive numbers to 100 that is a multiple of 3
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        };
    };
};

// multiplesOfThree();

// Question 3: Question 3: a function that logs all positive numbers to 100 if that number is either a multiple of 3 or a multiple of 5
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        };
    };
};
// multiplesOfThreeOrFive();

// Question 4: a function that takes in an integer parameter and logs all numbers from 1 to that number
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    };
};

// untilNum(30)
// untilNum(5)    //prints out numbers 1 through 5
// untilNum(9)    //prints out numbers 1 through 9
// untilNum(42)   //prints out numbers 1 through 42

// Question 5: a function that takes in two number parameters and returns their product
const multiply = (num1, num2) => {
    return num1 * num2;
};

// console.log(multiply(2, 4))     //returns 8
// console.log(multiply(10, -5))  //returns -50
// console.log(multiply(3, 7.5))   //returns 22.5

console.log(multiply(2, 4))     //returns 8
console.log(multiply(10, -5))  //returns -50
console.log(multiply(3, 7.5))   //returns 22.5

// Question 6: a function add that takes in two number parameters and returns their sum; if the two values are the same, return triple their sum
const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    };
};

// console.log(add(2, 4))   //returns 6
// console.log(add(10, -5)) //returns 5
// console.log(add(3, 7.5)) //returns 10.5
// console.log(add(5, 5))   //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
// console.log(add(6, 6))   //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that

// Question 7:
const isNegative = (num) => {
    if (num<0){
        return true;
    }else{
        return false;
    }
}
// console.log(isNegative(3))         //returns false
// console.log(isNegative(-2))        //returns true
// console.log(isNegative(Math.PI))   //returns false

// Question 8: a function that takes in the height and base of a triangle and returns the area of the triangle
const triangleArea = (height, base) => {
    return height * base / 2;
}

// console.log(triangleArea(5, 7)) //returns 17.5
// console.log(triangleArea(6, 8)) //returns 24

// Quesion 9
const betweenTwentyAndFourty = (num) => {
    return (num > 20 && num < 40) ? true: false;
};

console.log(betweenTwentyAndFourty(20))   //return false
console.log(betweenTwentyAndFourty(21))   //return true
console.log(betweenTwentyAndFourty(39))   //return true
console.log(betweenTwentyAndFourty(40))   //return false

// Question 10: a function that takes in three number parameters and returns the largest of the values
const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        return num1;
    };
};

// console.log(largest(4, 6, 8))     //returns 8
// console.log(largest(30, 22, 17))  //returns 30
// console.log(largest(41, 108, 86)) //returns 108
// console.log(largest(2, 2, 2))     //returns 2