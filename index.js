//Git JS Pairing Lab - Even-Questions Branch by Eileen

//Question 2: Write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3
const multiplesOfThree = () => {
    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
};

multiplesOfThree();