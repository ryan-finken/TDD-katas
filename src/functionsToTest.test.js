import {iMakeSums} from './functionsToTest'

    it('iMakeSums sums values correctly with positive numbers', () => {
        // Arrange
        const arrayOfValuesToSum = [1, 2, 3];

        // Act
        const actual = iMakeSums(arrayOfValuesToSum);

        // Assert
        expect(actual).toEqual(6);
    })
    