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

const doDeepestObj = (obj) =>{

}

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

doMaze(mazeGrid)

// doMostNum(numbers)