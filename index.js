import readline from 'readline'
import { printFibonacci } from './fibonacci.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let running = true;

(() => {

    // Program initialized confirmation
    console.log('program start')

    // Initialize console input/output
    evaluateInputLoop()
})()

function doTask(task) {
    switch (task.name) {
        case "fib":
            printFibonacci(task.args[0])
            break;
        case "end": case "exit": case "quit": case "stop":
            running = false
            break;
        default:
            console.log("Unrecognized command")
    }
}

function evaluateInputLoop() {

    rl.question("Enter command:", input => {

        const tokens = tokenize(input)

        const tasks = evaluateTokens(tokens)

        tasks.forEach(task => {
            doTask(task)
        })

        if (running) evaluateInputLoop()
        else {
            rl.close()
        }
    })
}

function evaluateTokens(tokens) {
    const tasks = tokens.map(token => {

        const args = token.substring(token.indexOf("(") + 1, token.indexOf(")")).split(",")

        const trimmedArgs = args.map(arg => {
            return arg.trim()
        })

        return {
            name: token.split("(")[0],
            args: trimmedArgs
        }
    })

    return tasks
}

function tokenize(input) {
    const tokens = input.split(" ")

    return tokens
}