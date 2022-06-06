import {findAllPrimeFactors, scoreBowlingGame} from './testsFirst'

// unit tests for findAllPrimeFactors
it('should return [2]', () => {
    const actual = findAllPrimeFactors(2);
    expect(actual).toEqual([2]);
})

it('should return [2, 2]', () => {
    const actual = findAllPrimeFactors(4);
    expect(actual).toEqual([2, 2]);
})

it('should return [2, 2, 2]', () => {
    const actual = findAllPrimeFactors(8)
    expect(actual).toEqual([2, 2, 2])
})

it('should return [2, 3]', () => {
    const actual = findAllPrimeFactors(6)
    expect(actual).toEqual([2, 3])
})

it('should return [3, 3]', () => {
    const actual = findAllPrimeFactors(9)
    expect(actual).toEqual([3, 3])
})

it('should return [2, 2, 2, 137]', () => {
    const actual = findAllPrimeFactors(1096)
    expect(actual).toEqual([2, 2, 2, 137])
})

// unit tests for scoreBowlingGame
it('should return a score of 0', () => {
    const actual = scoreBowlingGame([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(0)
})

it('should return a score of 1', () => {
    const actual = scoreBowlingGame([[1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(1);
})

it('should return a score of 2', () => {
    const actual = scoreBowlingGame([[1, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(2);
})

it('should return a score of 3', () => {
    const actual = scoreBowlingGame([[1, 1], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(3);
})

it('should return a score of 4', () => {
    const actual = scoreBowlingGame([[1, 1], [1, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(4);
})

it('should return a score of 12', () => {
    const actual = scoreBowlingGame([[5, 5], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(12);
})

it('should return a score of 11', () => {
    const actual = scoreBowlingGame([[5, 5], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(11);
})

it('should return a score of 14', () => {
    const actual = scoreBowlingGame([[10, 0], [1, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(14);
})

it('should return a score of 33', () => {
    const actual = scoreBowlingGame([[10, 0], [10, 0], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
    expect(actual).toEqual(33);
})

it('should return a score of 300 for a perfect game', () => {
    const actual = scoreBowlingGame([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0]])
    expect(actual).toEqual(300);
})