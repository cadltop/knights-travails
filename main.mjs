import Board from "./Board.mjs";
const board = new Board();

const knight = {
    path: null,
    showSteps() {
        const steps = [];
        let currentPath = this.path;
        while (currentPath !== null) {
            steps.push(currentPath.currentStep);
            currentPath = currentPath.next
        }
        return steps;
    }
};

knight.path = knightMoves([0,0], [7,7]);
console.log(knight.showSteps());

function knightMoves(start = [], end = []) {
    if (start[0] === end[0] && start[1] == end[1]) {
        return {currentStep: start, next: null};
    }

    const square = board.squares[start[0]][start[1]];
    if (square.visited === true) return undefined;
    else square.visited = true;

    const path = {
        currentStep: square.coordinates,
        next: null
    }
    let value;
    
    for (const corner in square.moves) {
        for (const move of square.moves[corner]) {
            if (value === undefined) {
                value = knightMoves(move, end);
                if (value !== undefined) {
                    path.next = value;
                    return path;
                }
            } 
        }
    }

    // const queue = [board.squares[start[0]][start[1]]];
    // while (queue.length !== 0) {
    //     const square = queue.shift();
    //     if (square.coordinates[0] === end[0] && square.coordinates[1] === end[1]) {
    //         console.log("fin");
    //         break;
    //     } else {
    //         for (const corner in square.moves) {
    //             for (const move of square.moves[corner]) {
    //                 queue.push(board.squares[move[0]][move[1]]);
    //             }
    //         }
    //     }
    // }
}