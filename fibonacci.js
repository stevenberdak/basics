export function printFibonacci(length) {

    const values = []

    for (let i = 0; i < length; i++) {
        if (i > 1) {
            values[i] = values[i - 1] + values[i - 2]
        } else if (i === 0) {
            values[i] = i
        } else if (i === 1){
            values[i] = i
        }
    }

    console.log(values.toString())
}

export default {
    printFibonacci
}