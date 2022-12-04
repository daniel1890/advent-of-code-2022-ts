import { readFileSync } from 'fs';

const linesString: string = readFileSync('src/day-3/day_3.txt','utf8');

let input: string[][] = linesString.split("\n").map(
    line => {
        let lineLength = line.length;

        let first: string = line.slice(0, lineLength / 2);
        let second: string = line.slice(lineLength / 2, line.length).trim();

        return [ first, second ];
    }
);

let inputPartTwo: string[] = linesString.split("\n").map(
    line => line.trim()
);

const lowercaseASCII: number = 96;
const upercaseASCII: number = 38;

const isLowerCase = (char: string): boolean => {
    return char == char.toLowerCase() && char != char.toUpperCase();
} 

const compareCharAndGetScore = (charOne: string, charTwo: string): number  => {
    let score = 0;

    if (charOne.substring(0, 1) === charTwo.substring(0, 1)) {
        if(isLowerCase(charOne)) {
            score += (charOne.charCodeAt(0) - lowercaseASCII);
        }
        else {
            score += (charOne.charCodeAt(0) - upercaseASCII);
        }
    }

    return score;
}


const compareTwoStringsAndGetScore = (stringOne: string, stringTwo: string): number => {
    let score: number = 0;
    let lineLength: number = stringOne.length;
    let usedLetters: string = '';

    for(let i = 0; i < lineLength; i++) {
        for(let j = 0; j < lineLength; j++) {
            if(compareCharAndGetScore(stringOne.substring(i, i + 1), stringTwo.substring(j, j + 1)) > 0) {
                if (usedLetters.indexOf(stringOne.substring(i, i + 1)) == -1) {
                    score += compareCharAndGetScore(stringOne.substring(i, i + 1), stringTwo.substring(j, j + 1));
                    usedLetters += stringOne.substring(i, i + 1);
                }
            }
        }
    }

    return score;
}

const compareCharsAndGetScore = (charOne: string, charTwo: string, charThree: string): number  => {
    let score = 0;

    if (charOne.substring(0, 1) === charTwo.substring(0, 1) && charOne.substring(0, 1) === charThree.substring(0, 1)) {
        if(isLowerCase(charOne)) {
            score += (charOne.charCodeAt(0) - lowercaseASCII);
        }
        else {
            score += (charOne.charCodeAt(0) - upercaseASCII);
        }
    }

    return score;
}


const compareThreeStringsAndGetScore = (stringOne: string, stringTwo: string, stringThree: string): number => {
    let score: number = 0;
    let usedLetters: string = '';

    for(let i = 0; i < stringOne.length; i++) {
        for(let j = 0; j < stringTwo.length; j++) {
            for(let k = 0; k < stringThree.length; k++) {
                if(compareCharsAndGetScore(stringOne.substring(i, i + 1), stringTwo.substring(j, j + 1), stringThree.substring(k, k + 1)) > 0) {
                    if (usedLetters.indexOf(stringOne.substring(i, i + 1)) == -1) {
                        score += compareCharsAndGetScore(stringOne.substring(i, i + 1), stringTwo.substring(j, j + 1), stringThree.substring(k, k + 1));
                        usedLetters += stringOne.substring(i, i + 1);
                    }
                }
            }
        }
    }

    console.log(usedLetters);
    return score;
}

const compareTwoDimensionalStringArrays = (stringsArr :string[][]): number => {
    let score: number = 0;

    stringsArr.forEach(
        strings => score += compareTwoStringsAndGetScore(strings[0], strings[1])
    );

    return score;
}

const compareThreeStringsFromArray = (input: string[]) => {
    let score = 0
    for(let i = 0; i < input.length; i += 3) {
        score += compareThreeStringsAndGetScore(input[i], input[i + 1], input[i + 2]);
    }

    return score;
}

// Test strings
const testStringOne: string = 'vJrwpWtwJgWr';
const testStringTwo: string = 'hcsFMMfFFhFp';
const testStringThree: string = 'jqHRNqRjqzjGDLGL';
const testStringFour: string = 'rsFMfFZSrLrFZsSL';
const testStringFive: string = 'PmmdzqPrV';
const testStringSix: string = 'vPwwTWBwg';

const testStringsPartTwoOne: string[] = [ 'vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'PmmdzqPrVvPwwTWBwg' ];
const testStringsPartTwoTwo: string[] = [ 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'ttgJtRGJQctTZtZT', 'CrZsJsPPZsGzwwsLwLmpwMDw'];


//console.log(compareTwoStringsAndGetScore(testStringOne, testStringTwo));
//console.log(compareTwoStringsAndGetScore(testStringThree, testStringFour));
//console.log(compareTwoStringsAndGetScore(testStringSix, testStringFive));

console.log(compareThreeStringsAndGetScore(testStringsPartTwoOne[0], testStringsPartTwoOne[1], testStringsPartTwoOne[2]));
console.log(compareThreeStringsAndGetScore(testStringsPartTwoTwo[0], testStringsPartTwoTwo[1], testStringsPartTwoTwo[2]));

const answer1: number = compareTwoDimensionalStringArrays(input);
const answer2: number = compareThreeStringsFromArray(inputPartTwo);
console.log(answer1);
console.log(answer2);

// npx ts-node src/day-3/day_3.ts