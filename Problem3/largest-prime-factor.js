
function isPrime(i) {
    var nb = i / 2;
    
    if (i <= 1)
        return (0);
    while (nb > 1)
    {
        if (i % nb == 0)
            return (0);
        nb--;
    }
    return(1); 
};

function largestPrimeFactor() {
    var lgNum = 9;
    var nb = lgNum / 2;
    
    while (nb > 1)
    {
        if (isPrime(nb))
            break ;
        nb--;
    }
    console.log(`The largest prime factor is ${nb}`);
};

largestPrimeFactor();