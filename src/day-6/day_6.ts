import { readFileSync } from 'fs';

const input: string = readFileSync('src/day-6/day_6.txt','utf8');

let answers = {
    answer1: 0,
    answer2: 0
};

const calcMarkerArrivesAt = (input: string, nUniqueCharacters: number): number => {
    let arrivesAtIndex = 0;
    let uniqueStrings: Set<string> = new Set();

    for(let i = 0; i < input.length; i++) {
        if(uniqueStrings.size == nUniqueCharacters) {
            arrivesAtIndex = i - 1;
            return arrivesAtIndex;
        }
        if(uniqueStrings.has(input[i])) {
            uniqueStrings.clear();
        }
        else if(!uniqueStrings.has(input[i])) {
            uniqueStrings.add(input[i]);
        }
    }

    
    return arrivesAtIndex
}

answers.answer1 = calcMarkerArrivesAt(input, 4);
answers.answer2 = calcMarkerArrivesAt(input, 14);
console.log(answers);

// npx ts-node src/day-6/day_6.ts