import Board from "./Board.mjs";
const board = new Board();

knightMoves([0,0], [7,7]);

function knightMoves(start = [], end = []) {
    shortPath(board, start, end);

    function bfs(graph, source, previous, distance) {
        const queue = [];
        queue.push(graph.squares[source[0]][source[1]]);
        distance[source[0]][source[1]] = 0;

        while (queue.length > 0) {
            const node = queue.shift();
            
            for (const neighbour of node.moves) {
                if (distance[neighbour[0]][neighbour[1]] === Infinity) {
                    previous[neighbour[0]][neighbour[1]] = node.coordinates;
                    distance[neighbour[0]][neighbour[1]] = distance[node.coordinates[0]][node.coordinates[1]] + 1;
                    queue.push(graph.squares[neighbour[0]][neighbour[1]]);
                }
            }
        }
    }
    function shortPath(graph, source, destination, size = 8) {
        const prev = Array(size);
        const dist = Array(size);
        for (let i = 0; i < size; i++) {
            prev[i] = Array(size).fill(-1);
            dist[i] = Array(size).fill(Infinity);
        }
        
        bfs(graph, source, prev, dist);

        const path = [];
        let currentNode = destination;
        path.push(destination);
        
        while (prev[currentNode[0]][currentNode[1]] !== -1) {   
            path.push(prev[currentNode[0]][currentNode[1]]);
            currentNode = prev[currentNode[0]][currentNode[1]];
        }

        console.log(path.reverse());
    }
}