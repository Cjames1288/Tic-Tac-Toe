const squares = Array.from(document.querySelectorAll('#board div'))
console.log("Game has started")

const winning_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

let mark = "X"
let board
let image = "<img src='images/x_mark.png'>"
blank_image = "<img src='o_mark'>"
let game_over = false

let turn_change = () => {
    if(mark == "X"){
        mark = "O"
    }
    else {
        mark = "X"
    }
    if(image == "<img src='images/x_mark.png'>"){
        image = "<img src='images/o_mark_1.png'>"
    } else {
        image = "<img src='images/x_mark.png'>"
    }
}

let win_check = () => {
    winning_combos.forEach(combo => {
        if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){
            console.log("Winner is: " + `${mark}`)
            document.getElementById("winner").innerHTML = (`${mark}` + " Won!")
            game_over = true
            mark = "X"
            image == "<img src='images/x_mark.png'>"
            
            
        }
    })
}


let start_game = () => {
    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]

    squares.forEach((square) => {
        square.innerHTML = ''
    })

    document.getElementById('board').addEventListener('click', thing =>{
        console.log('you clicked the board')

        if(game_over == false){

            let idx = squares.findIndex((square) => {
                return square === event.target
            })
            // console.log('this is the value of idx: ' + idx)
            squares[idx].innerHTML = image
            board[idx] = mark
            
            console.log(board)
            win_check()
            turn_change()

        }
})
}

squares.forEach((square) => {
    square_size = square.getBoundingClientRect()
    x_center = (square_size.left + square_size.right) /2
    y_center = (square_size.top + square.bottom) /2
    console.log(x_center, y_center)
})
