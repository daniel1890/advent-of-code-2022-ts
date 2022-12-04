import { readFileSync } from 'fs';

const linesString: string = readFileSync('src/day-4/day_4.txt','utf8');
const input: number[][] = linesString.split("\n").map(
    line => {
        let newLine = line.split(',');

        let first: string[] = newLine[0].trim().split('-');
        let second: string[] = newLine[1].trim().split('-');

        return [ parseInt(first[0]), parseInt(first[1]), parseInt(second[0]), parseInt(second[1]) ];
    }
);

let answers = {
    answer1: 0,
    answer2: 0
};

const calcFullyContains = (input: number[][]): number => {
    let nFullyContains = 0;

    input.forEach(
        pairs =>{ 
            if(pairs[0] - pairs[2] <= 0 && pairs[1] - pairs[3] >= 0) {
                nFullyContains += 1;
            }
            else if(pairs[2] - pairs[0] <= 0 && pairs[3] - pairs[1] >= 0 ) {
                nFullyContains += 1;
            }
        }
    )

    return nFullyContains;
}

const calcContains = (input: number[][]): number => {
    let nContains = 0;

    input.forEach(
        pairs =>{ 
            let AdiffB = pairs[0] >= pairs[2] && pairs[0] <= pairs[3];
            let BdiffA = pairs[2] >= pairs[0] && pairs[2] <= pairs[1];

            if(AdiffB) {
                nContains += 1;
            }
            else if(BdiffA) {
                nContains += 1;
            }
        }
    )

    return nContains;
}

console.log({input});

answers.answer1 = calcFullyContains(input);
answers.answer2 = calcContains(input);
console.log(answers);

// npx ts-node src/day-4/day_4.ts