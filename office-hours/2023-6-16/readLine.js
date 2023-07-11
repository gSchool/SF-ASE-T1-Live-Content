import * as readline from "node:readline/promises"
import {stdin as input, stdout as output} from "node:process"


const read = readline.createInterface({input, output})
const myName = await read.question("What is your name?");

console.log(`Hello ${myName}`);