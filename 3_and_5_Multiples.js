//solved using a basic for loop
var findSumMultiples3And5 = function () {
    var totalMult = 0;
    for (var i = 0; i < 1000; i++)
    {
        if ((i % 3 == 0) || (i % 5 == 0))
            totalMult += i;
    }
    console.log(totalMult);
};

findSumMultiples3And5();

//OR

//solved using the O(N) algorithmic method
var highThree = Math.floor(999 / 3);
    highFive = Math.floor(999 / 5);
    highFifteen = Math.floor(999 / 15);
    sumThree = Math.floor(3 * highThree * (1 + highThree) / 2);
    sumFive = Math.floor(5 * highFive * (1 + highFive) / 2);
    sumFifteen = Math.floor(15 * highFifteen * (1 + highFifteen) / 2);
    totalSum = Math.floor(sumThree + sumFive - sumFifteen);

console.log(totalSum);


