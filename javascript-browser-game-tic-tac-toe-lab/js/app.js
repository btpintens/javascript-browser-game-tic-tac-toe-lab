/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '', '', '', '', '', '', '',]
let turnX = "X"
let turnO = "O"
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector(".sqr");
const messageEl = document.querySelector("#message")

console.log(messageEl)
/*-------------------------------- Functions --------------------------------*/
// init = upon loading the game state should be initialized
// and we need to call the INIT function when the game loads. add
// a CONSOLE.LOG within INIT so we can make sure it's been created corretly

// function RENDER() at the end of the init() function 

udpateBoard () => {
    (let i = 0; i < board.length; i++)
}

updateMessage () => {
    if (winner === false && tie === false)
        return ("WHOS TURN IS IT NOW");
}   else if (winner === false && tie === true) {
        return ("You tied!")
}   else 
        return ("PLAYER _ WINS")

render () => {
      updaateBoard and updateMessage
}
    
handleClick () => {
}
 
placePiece () => {

}

checkForWinner () => {
    
}
/*----------------------------- Event Listeners -----------------------------*/

squareEls.addEVentListenter('click', (event) => {
    console.log(event...)
});



//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

