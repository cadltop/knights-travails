export default class {
    squares = [];
    constructor() {
        for (let x = 0; x < 8; x++) {
            this.squares[x] = [];
            for (let y = 0; y < 8; y++) {
                this.squares[x].push({
                    visited: false,
                    adjacent: {
                        up: null,
                        down: null,
                        left: null,
                        right: null
                    }
                });
            }
        }

        for (let x = 0; x < this.squares.length; x++) {
            for (let y = 0; y < this.squares[x].length; y++) {
                if (this.squares[x][y+1])
                    this.squares[x][y].adjacent.up = [x,y+1];
                if (this.squares[x][y-1])
                    this.squares[x][y].adjacent.down = [x,y-1];
                if (this.squares[x-1])
                    this.squares[x][y].adjacent.left = [x-1,y];
                if (this.squares[x+1])
                    this.squares[x][y].adjacent.right = [x+1,y];
            }
        }

    }
}