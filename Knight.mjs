import Board from "./Board.mjs";
export default class {
    constructor(board = new Board()) {
        this.board = board;
        this.position = [null,null];
    }
}