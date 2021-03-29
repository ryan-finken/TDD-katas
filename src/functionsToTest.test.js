import {iMakeSums, iFilterThings, iAddSomethingToEachItem, iFindThings, iWillTellYouIfItIsHere} from './functionsToTest'

describe('test functions in exercise 1', () => {
    it('iMakeSums sums values correctly with positive numbers', () => {
        // Arrange
        const arrayOfValuesToSum = [1, 2, 3];

        // Act
        const actual = iMakeSums(arrayOfValuesToSum);

        // Assert
        expect(actual).toEqual(6);
    })
    it('iMakeSums sums values correctly with negative numbers', () => {
        // Arrange
        const arrayOfValuesToSum = [-1, -2, 3];

        // Act
        const actual = iMakeSums(arrayOfValuesToSum);

        // Assert
        expect(actual).toEqual(0);
    })
    it('iFilterThings filters values correctly', () => {
        // Arrange
        const arrayOfValuesToFilter = [2, 4, 5, 6, 7, 8];

        // Act
        const actual = iFilterThings(arrayOfValuesToFilter);

        // Assert
        expect(actual).toEqual([6, 7, 8]);
    })
    it('iAddSomethingToEachItem adds specified amount to each item in the array', () => {
        // Arrange
        const arrayOfValues = [2, 4, 5];
        const whatToAdd = 3;

        // Act
        const actual = iAddSomethingToEachItem(arrayOfValues, whatToAdd);

        // Assert
        expect(actual).toEqual([5, 7, 8]);
    })
    it('iAddSomethingToEachItem adds nothing if specified amount is zero', () => {
        // Arrange
        const arrayOfValues = [2, 4, 5];
        const whatToAdd = 0;

        // Act
        const actual = iAddSomethingToEachItem(arrayOfValues, whatToAdd);

        // Assert
        expect(actual).toEqual(arrayOfValues);
    })
    it('iFindThings finds the first element that matches the condition', () => {
        // Arrange
        const arrayOfValues = [2, 5, 30, 22, 45, 16];

        // Act
        const actual = iFindThings(arrayOfValues);

        // Assert
        expect(actual).toEqual(30);
    })
    it('iFindThings returns undefined when a value that matches the condition is not present', () => {
        // Arrange
        const arrayOfValues = [2, 5, 24];

        // Act
        const actual = iFindThings(arrayOfValues);

        // Assert
        expect(actual).toEqual(undefined);
    })
    it('iWillTellYouIfItIsIncluded returns true if provided value is in the array', () => {
        // Arrange
        const arrayOfValues = [2, 5, 24];
        const checkIfIncluded = 5;

        // Act
        const actual = iWillTellYouIfItIsHere(arrayOfValues, checkIfIncluded);

        // Assert
        expect(actual).toBe(true);
    })
    it('iWillTellYouIfItIsIncluded returns false if provided value is not in the array', () => {
        // Arrange
        const arrayOfValues = [2, 5, 24];
        const checkIfIncluded = 36;

        // Act
        const actual = iWillTellYouIfItIsHere(arrayOfValues, checkIfIncluded);

        // Assert
        expect(actual).toBe(false);
    })
})