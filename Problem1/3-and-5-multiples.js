//solved using a basic for loop
var findSumMultiples3And5 = function () {
    var totalMult = 0;
    for (var i = 0; i < 1000; i++)
    {
        if ((i % 3 == 0) || (i % 5 == 0))
            totalMult += i;
    }
    console.log(`\n\nThese are multiples 3 to 5 below 1000 added using
    a for loop:\n\n    ${totalMult}\n`);
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

console.log(`\n\nThese are multiples 3 to 5 below 1000 added using
the O(N) algorithm or sum of multiples up to N:\n\n    ${totalSum}\n\n`);

console.log("\nSame output!\n");


