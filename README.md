# How to init TypeScript

create new package.json
in terminal:

```
npm init
```

install TypeScript in project
in terminal:

```
npm install typescript --save-dev
```

add new tsconfig.json to base folder of project
add following code to file:

```
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {},
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

to make the compiler recognize node modules
in terminal:

```
npm install @tsconfig/node16 --save-dev
```

# How to run a typescript file in terminal

use this command in terminal:

```
npx ts-node src/day-00/day_00.ts
```

replace 00 with day number to run
