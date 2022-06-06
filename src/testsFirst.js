export const findAllPrimeFactors = (number) => {
    const output = []
    while(number % 2 === 0) {
        output.push(2)
        number = number / 2
    }

    for(let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            output.push(i);
            number = number / i
        }
    }

    if (number > 2) {
        output.push(number)
    }

    return output
}

export const scoreBowlingGame = (gameFrames) => {
    let score = 0

    for (let i = 0; i < 10; i++) {
        score += gameFrames[i][0] + gameFrames[i][1];
        if (gameFrames[i][0] === 10) {
            score += gameFrames[i + 1][0]
            if (gameFrames[i + 1][0] === 10) {
                score += gameFrames[i + 2][0]
            } else {
                score += gameFrames[i + 1][1]
            }
        } else if (gameFrames[i][0] + gameFrames[i][1] === 10) {
            score += gameFrames[i + 1][0]
        }
    }

    return score;
}

