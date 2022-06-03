export const findAllPrimeFactors = (number) => {
    const output = [];
    while(number % 2 === 0) {
        output.push(2);
        number = number / 2;
    }

    for(let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            output.push(i);
            number = number / i;
        }
    }

    if (number > 2) {
        output.push(number);
    }

    return output;
}

