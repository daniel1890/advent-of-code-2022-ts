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

const compareTwoDimensionalStringArrays = (stringsArr :string[][]): number => {
    let score: number = 0;

    stringsArr.forEach(
        strings => score += compareTwoStringsAndGetScore(strings[0], strings[1])
    );

    return score;
}

// Test strings
const testStringOne: string = 'vJrwpWtwJgWr';
const testStringTwo: string = 'hcsFMMfFFhFp';
const testStringThree: string = 'jqHRNqRjqzjGDLGL';
const testStringFour: string = 'rsFMfFZSrLrFZsSL';
const testStringFive: string = 'PmmdzqPrV';
const testStringSix: string = 'vPwwTWBwg';

console.log(compareTwoStringsAndGetScore(testStringOne, testStringTwo));
console.log(compareTwoStringsAndGetScore(testStringThree, testStringFour));
console.log(compareTwoStringsAndGetScore(testStringSix, testStringFive));

const answer1: number = compareTwoDimensionalStringArrays(input);
console.log(answer1);

// npx ts-node src/day-3/day_3.ts