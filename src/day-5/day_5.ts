import { readFileSync } from 'fs';

const linesString: string = readFileSync('src/day-5/day_5.txt','utf8');
const splitInput: string[] = linesString.split("\r\n\r\n");
const stacksString: string = splitInput[0];
const stacksLines: string[] = stacksString.split("\n");

let answers = {
    answer1: '',
    answer2: ''
};

const instructions: number[][] = splitInput[1].split("\n").map(
    instruction => {
        let instructionOne = instruction.split(" ");
        let amount = parseInt(instructionOne[1]);
        let from = parseInt(instruction.split(" ")[3]);
        let to = parseInt(instruction.split(" ")[5]);

        return [ amount, from, to]
    }
);

let stacks = new Array(9).fill(0).map(() => new Array(0).fill(0));
let stacks2 = new Array(9).fill(0).map(() => new Array(0).fill(0));


for (let i = 0; i < stacksLines.length; i++){
  let line = stacksLines[i];

      for(let j = 0; j < 9; j++) {
        let stackIndex = j + 1 + (j * 3)
        if(line[stackIndex] != ' ') {
            stacks[j].push(line.slice(stackIndex, stackIndex + 2).split(']')[0]);
            stacks2[j].push(line.slice(stackIndex, stackIndex + 2).split(']')[0]);
        }
    }
}

stacks.map(
    stack => stack.reverse().shift()
);
stacks2.map(
    stack => stack.reverse().shift()
);

// SOLUTION FOR PART 1
const solvePartOne = (stacks: any[][], instructions: number[][]) => {
    let answer = '';
    for (let i = 0; i < instructions.length; i++){
        let instruction = instructions[i];
        let stackToRemove: string[] = [];

        for(let j = 0; j < instruction[0]; j++) {
            let removedElementFromStack = stacks[instruction[1] - 1].pop();
            stackToRemove.push(removedElementFromStack);
        }

        for(let k = 0; k < (instruction[0] - 1); k++) {
            stacks[instruction[2] - 1].push(stackToRemove[k])
        }

        stacks[instruction[2] - 1].push(stackToRemove[instruction[0] - 1]);
    }

    stacks.forEach(
        stack => {
            answer += stack[stack.length - 1]; 
        }
    )

    return answer;
}

// SOLUTION FOR PART 2
const solvePartTwo = (stacks: any[][], instructions: number[][]) => {
    let answer = '';
    for (let i = 0; i < instructions.length; i++){
        let instruction = instructions[i];
        let stackToRemove: string[] = [];

        for(let j = 0; j < instruction[0]; j++) {
            let removedElementFromStack = stacks[instruction[1] - 1].pop();
            stackToRemove.push(removedElementFromStack);
        }

        for(let k = (instruction[0] - 1); k > 0; k--) {
            stacks[instruction[2] - 1].push(stackToRemove[k])
        }

        stacks[instruction[2] - 1].push(stackToRemove[0]);
    }

    stacks.forEach(
        stack => {
            answer += stack[stack.length - 1]; 
        }
    )

    return answer;
}

answers.answer1 = solvePartOne(stacks, instructions);
answers.answer2 = solvePartTwo(stacks2, instructions);

console.log(stacks)
console.log(answers);

// npx ts-node src/day-5/day_5.ts