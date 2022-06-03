import {findAllPrimeFactors} from './testsFirst'

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