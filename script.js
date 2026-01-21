// 0. 1 taskas dovanu
// 1. Parasyti funkcija kuri grazina dazniausia skaiciu is masyvo (3 taskai)
// 2. Prasyti funkcija kuri grazina giliausia elementa paslepta objekte (3 taskai)
// pvz:
// obj={a: 3, b: {c: 2, d: {e: 3, f: {g: 4}}}}
// rezultatai: 4
// 3. Parasyti funkcija kuri suras trumpiausia kelia labirinte (3 taskai)
// 0 - laisvas langelis
// 1 - siena
// grid = {
//     [0, 0, 0, 1],
//     [1, 0, 0, 1],
//     [1, 0, 0, 1],
//     [0, 1, 1, 1]
// }
// start = [0, 0] end [3, 3]
// 4. surasti visus pirminius skaicius iki 10000
// 5. atlikti fibonacci sequence 1000 kartu
// 6. project euler 14/16

let numbers = [1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5]

let object = {
    a: 3, 
    b: {
        c: 2, 
        d: {
            e: 3, 
            f: {
                g: 4
                }
            }
        }
    }

let mazeGrid = [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 0]
]

// 1.
const doMostNum = (array) => {
    let tempArray = array
    let mostUsed = {num: 0, use: 0}
    for(let i = 0; i < array.length; i++){
        let tempNum = {num: tempArray[i], use: 0}
        for(let e = 0; e < array.length; e++){
            if(tempNum.num == tempArray[e]){
                tempNum.use++
            }
            if(tempNum.use > mostUsed.use){
                mostUsed = tempNum
            }
        }
    }
    console.log(`Most frequent number is ${mostUsed.num}, used about ${mostUsed.use}`)
}

// 2.
const doDeepestObj = (obj) =>{

}

// 3.
const doMaze = (grid) => {
    console.log(grid)
    let start = [0, 0]
    let end = [3, 1]
    let incomplete = true
    // console.log(start[0] + 1)
    // if(grid[i][e + 1] != 1 && start[1] < grid.length)
    while(incomplete){
        if(start[1] == end[1] && start[0] == end[0]){
            console.log("COMPLETE")
            incomplete = !incomplete
        }else if(grid[start[0 + 1]][start[1]] < 1 && start[0] < grid.length){
            console.log(`{LEFT}, Position: ${start}`)
            start[0]++
        }else if(grid[start[0]][start[1 + 1]] < 1 && start[1] < grid.length){
            console.log(`{BOTTOM}, Position: ${start}`)
            start[0]++
        }else if(grid[start[0 - 1]][start[1]] < 1 && start[0] < grid.length){
            console.log(`{RIGHT}, Position: ${start}`)
            start[0]++
        }else if(grid[start[0]][start[1 - 1]] < 1 && start[1] < grid.length){
            console.log(`{UP}, Position: ${start}`)
            start[0]++
        }else{
            start[0]++
        }
    }
}

// 4.
const primeCheck = (number) => {
    if (number <= 1) return false
    if (number <= 3) return true
    if (number % 2 === 0 || number % 3 === 0) return false

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false
    }
    return true
}

const doPrimeNums = (total) => {
    for(let i = 0; i < total; i++){
        if(primeCheck(i)){
            console.log(i)
        }
    }
}

// 5.

const doFibonacci = (number) => {
    let sndValue = 0
    let fstValue = 0
    let trdValue = 0
    let times = 0
    if(sndValue <= 0){sndValue++}
    while(times < number){
        times++
        trdValue = fstValue + sndValue
        console.log(`${fstValue} + ${sndValue} = ${trdValue}`)
        fstValue = sndValue
        sndValue = trdValue
    }
    console.log(times)
}

// 6.

const euler14 = (number) => {
    let num = 0
    let fullNArray = []
    let largestNum = 0
    for(let i = 1; i <= number; i++){
        let nArray = []
        let tempNumber = i
        while (tempNumber !== 1){
            if(tempNumber % 2 == 0){
                tempNumber = tempNumber / 2
            }else{
                tempNumber = 3 * tempNumber + 1
            }
            nArray.push(tempNumber)
        }
        newNum = nArray.length + 1
        if(num > newNum){
        }else{
            num = nArray.length + 1
            fullNArray = nArray
            largestNum = i
        }
    }
    console.log(fullNArray)
    console.log(largestNum)
    console.log(`From ${largestNum}, this contains ${num} terms`)
}

const euler16 = (number) => {
    let num = BigInt(number).toString().split('')
    let total = 0
    for(let i = 0; i < num.length; i++){
        total += parseInt(num[i])
    }
    console.log(total)
}


// doMostNum(numbers)
// doDeepestObj(object)
// doMaze(mazeGrid)
// doPrimeNums(10000)
// doFibonacci(1000)
// euler14(1000000)
// euler16(2 ** 1000)