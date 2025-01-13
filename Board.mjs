export default class {
    squares = [];
    constructor() {
        for (let y = 0; y < 8; y++) {
            this.squares[y] = [];
            for (let x = 0; x < 8; x++) {
                this.squares[y].push({
                    visited: false,
                    adjacent: []
                });
            }
        }

        for (let y = 0; y < this.squares.length; y++) {
            for (let x = 0; x < this.squares[y].length; x++) {
                if (this.squares[y+1])
                    this.squares[y][x].adjacent.push([y+1,x]);
                if (this.squares[y-1])
                    this.squares[y][x].adjacent.push([y-1,x]);
                if (this.squares[y][x+1])
                    this.squares[y][x].adjacent.push([y,x+1]);
                if (this.squares[y][x-1])
                    this.squares[y][x].adjacent.push([y,x-1]);
            }
        }

    }
}