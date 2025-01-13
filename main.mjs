import Board from "./Board.mjs";
import Knight from "./Knight.mjs";

const board = new Board();
const knight = new Knight(board);

knightMoves([3,3], [4,3])
function knightMoves(start = [], end = []) {
    knight.position[0] = start[0];
    knight.position[1] = start[1];
    
    if (knight.position === end) return;
}