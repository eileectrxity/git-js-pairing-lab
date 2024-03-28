// Question 1:
const fiveToOneHundred = () =>{
    for(let i = 5; i<=100; i++){
        console.log(i)
    }
}
// fiveToOneHundred();

//Question 2: Write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3
const multiplesOfThree = () => {
    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
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
multiplesOfThreeOrFive();