var fiboSum = 0;

function isEven (i) {
    return (i % 2 == 0)
};

function evenFiboSum() {
    for (var i = 0, j = 1, temp = 0; j < 4000000; temp = j + i, i = j, j = temp) {
        if (isEven(j))
            fiboSum += j;
    };
    console.log(`\n\nEven numbers added in the fibonacci sequence 
    below 4 million:\n\n ${fiboSum}\n\n`);
};

evenFiboSum();