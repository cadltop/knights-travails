export default class {
    squares = [];
    constructor() {
        for (let x = 0; x < 8; x++) {
            this.squares[x] = [];
            for (let y = 0; y < 8; y++) {
                this.squares[x].push({
                    coordinates: [x,y],
                    visited: false,
                    moves: []
                });
            }
        }

        for (let x = 0; x < this.squares.length; x++) {
            for (let y = 0; y < this.squares[x].length; y++) {
                if (this.squares[x-2] && this.squares[x-2][y+1])
                    this.squares[x][y].moves.push([x-2,y+1]);
                if (this.squares[x-1] && this.squares[x-1][y+2])
                    this.squares[x][y].moves.push([x-1,y+2]);
                if (this.squares[x+2] && this.squares[x+2][y+1])
                    this.squares[x][y].moves.push([x+2,y+1]);
                if (this.squares[x+1] && this.squares[x+1][y+2])
                    this.squares[x][y].moves.push([x+1,y+2]);
                if (this.squares[x-2] && this.squares[x-2][y-1])
                    this.squares[x][y].moves.push([x-2,y-1]);
                if (this.squares[x-1] && this.squares[x-1][y-2])
                    this.squares[x][y].moves.push([x-1,y-2]);
                if (this.squares[x+2] && this.squares[x+2][y-1])
                    this.squares[x][y].moves.push([x+2,y-1]);
                if (this.squares[x+1] && this.squares[x+1][y-2])
                    this.squares[x][y].moves.push([x+1,y-2]);
            }
        }
    }
}