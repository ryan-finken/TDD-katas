
// Exercise 1

export const iMakeSums = values => values.reduce((a,b) => a + b, 0)

export const iFilterThings = values => values.filter(value => value >= 6)

export const iAddSomethingToEachItem = (values, whatToAdd) => values.map(value => value + whatToAdd)

export const iFindThings = values => values.find(value => value >= 25)

export const iWillTellYouIfItIsHere = (values, checkIfIncluded) => values.includes(checkIfIncluded);


