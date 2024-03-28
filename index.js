// Question 1: a function that logs all numbers from 5 to 100
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    };
};

fiveToOneHundred()

//Question 2: a function that logs all positive numbers to 100 that is a multiple of 3
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        };
    };
};

multiplesOfThree();

// Question 4: a function that takes in an integer parameter and logs all numbers from 1 to that number
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    };
};

untilNum(30)