import { readFileSync } from 'fs';

const linesString: string = readFileSync('src/day-2/day_2.txt','utf8');
let input: string[][] = linesString.split("\n").map(
    line => {
        let ABC = line.slice(0, 1);
        let LDW = line.slice(2, 3);

        return [ABC, LDW]
    }
);

const calcPart = (input: string[][], determineMatchOutcome: Function) => {
    let sum: number = 0;

    input.forEach(
        line => sum += determineMatchOutcome(line)
    )

    return sum;
}

// A - X = ROCK
// B - Y = PAPER
// C - Z = SCISZORS
const determineMatchOutcomePartOne = (match: string[]): number  => {
    let score!: number;
    switch(match[0]) {
        case 'A':
            if(match[1] == 'X'){
                score = 4;
            }
            else if(match[1] == 'Y') {
                score = 8;
            }
            else if(match[1] == 'Z') {
                score = 3;
            }

            return score;
        case 'B':
            if(match[1] == 'X'){
                score = 1;
            }
            else if(match[1] == 'Y') {
                score = 5;
            }
            else if(match[1] == 'Z') {
                score = 9;
            }
            return score;
        case 'C':
            if(match[1] == 'X'){
                score = 7;
            }
            else if(match[1] == 'Y') {
                score = 2;
            }
            else if(match[1] == 'Z') {
                score = 6;
            }
            return score;

        default: return score;
    }

}

// X LOSE
// Y DRAW
// Z WIN
const determineMatchOutcomePartTwo = (match: string[]): number  => {
    let score!: number;
    switch(match[0]) {
        case 'A':
            if(match[1] == 'X'){
                score = 3;
            }
            else if(match[1] == 'Y') {
                score = 4;
            }
            else if(match[1] == 'Z') {
                score = 8;
            }

            return score;
        case 'B':
            if(match[1] == 'X'){
                score = 1;
            }
            else if(match[1] == 'Y') {
                score = 5;
            }
            else if(match[1] == 'Z') {
                score = 9;
            }
            return score;
        case 'C':
            if(match[1] == 'X'){
                score = 2;
            }
            else if(match[1] == 'Y') {
                score = 6;
            }
            else if(match[1] == 'Z') {
                score = 7;
            }
            return score;

        default: return score;
    }

}

const answer1 = calcPart(input, determineMatchOutcomePartOne);
const answer2 = calcPart(input, determineMatchOutcomePartTwo);

console.log(answer1);
console.log(answer2);

// npx ts-node src/day-2/day_2.ts