// Question 1:
const fiveToOneHundred = () =>{
    for(let i = 5; i<=100; i++){
        console.log(i)
    }
}
// fiveToOneHundred();

//Question 2: a function that logs all positive numbers to 100 that is a multiple of 3
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        };
    };
};

// multiplesOfThree();

// Question 3:
const multiplesOfThreeOrFive=()=>{
    for(let i=1; i<101; i++){
        if (i%3 == 0 || i%5==0){
            console.log(i)
        }
    }
}
// multiplesOfThreeOrFive();

// Question 4: a function that takes in an integer parameter and logs all numbers from 1 to that number
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    };
};

// untilNum(30)

// Question 5
const multiply = (num1, num2) => {
    return num1*num2
};

console.log(multiply(2, 4))     //returns 8
console.log(multiply(10, -5))  //returns -50
console.log(multiply(3, 7.5))   //returns 22.5



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

// Question 8: a function triangleArea that takes in the height and base of a triangle and returns the area of the triangle.
const triangleArea = (height, base) => {
    return height * base /2
}

// console.log(triangleArea(5, 7))    //returns 17.5
// console.log(triangleArea(6, 8))    //returns 24

// Quesion 9

const betweenTwentyAndFourty = (num) =>{
    return (num>20 && num <40) ? true: false;

}
console.log(betweenTwentyAndFourty(20))      //return false
console.log(betweenTwentyAndFourty(21))     //return true
console.log(betweenTwentyAndFourty(39))     //return true
console.log(betweenTwentyAndFourty(40))    //return false
