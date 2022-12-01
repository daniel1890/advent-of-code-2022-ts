import { readFileSync } from 'fs';

const linesString: string = readFileSync('src/day-1/day_1.txt','utf8');
let linesArr = linesString.split("\n");

// Solution to part 1 & 2
const findHighestElfCaloriesAndDeleteHighestElfCalories = (lines: string[]) => {
    let elfCalories: number = 0;
    let highestElf = 0;
    let highestElfIndexes: number[] = [];
    let elfIndexes: number[] = [];

    lines.map(
        line => {
    
            if(isNaN(parseInt(line))) {
                if(elfCalories > highestElf) {
                    highestElf = elfCalories;
                    highestElfIndexes = elfIndexes;
                }
    
                elfCalories = 0;
                elfIndexes = [];
            } else{
                elfCalories += parseInt(line);
                elfIndexes.push(lines.indexOf(line));
            }
        }
    );

    linesArr.splice(highestElfIndexes[0], highestElfIndexes[highestElfIndexes.length - 1]);
    return highestElf;
}


// Answers
let topOneElf = findHighestElfCaloriesAndDeleteHighestElfCalories(linesArr);
let topTwoElf = findHighestElfCaloriesAndDeleteHighestElfCalories(linesArr);
let topThreeElf = findHighestElfCaloriesAndDeleteHighestElfCalories(linesArr);

let answer1: number = topOneElf;
let answer2: number = topOneElf + topTwoElf + topThreeElf;


console.log(answer1);
console.log(answer2);