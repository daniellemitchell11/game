<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkers Game</title>
    <style>
        /* Add your CSS styles here */
        /* You can style the board, pieces, and other elements as needed */
    </style>
</head>
<body>
    <div id="board" class="board"></div>

    <script>
        // Define the game board and pieces using JavaScript
        const board = [
            ['_', 'B', '_', 'B', '_', 'B', '_', 'B'],
            ['B', '_', 'B', '_', 'B', '_', 'B', '_'],
            ['_', 'B', '_', 'B', '_', 'B', '_', 'B'],
            ['_', '_', '_', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '_', '_', '_'],
            ['R', '_', 'R', '_', 'R', '_', 'R', '_'],
            ['_', 'R', '_', 'R', '_', 'R', '_', 'R'],
            ['R', '_', 'R', '_', 'R', '_', 'R', '_'],
        ];

        // Function to render the game board
        function renderBoard() {
            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';

            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const square = document.createElement('div');
                    square.classList.add('square');
                    square.dataset.row = row;
                    square.dataset.col = col;

                    if ((row + col) % 2 === 0) {
                        square.classList.add('light');
                    } else {
                        square.classList.add('dark');
                    }

                    if (board[row][col] === 'B') {
                        const blackPiece = document.createElement('div');
                        blackPiece.classList.add('piece', 'black');
                        square.appendChild(blackPiece);
                    } else if (board[row][col] === 'R') {
                        const redPiece = document.createElement('div');
                        redPiece.classList.add('piece', 'red');
                        square.appendChild(redPiece);
                    }

                    boardElement.appendChild(square);
                }
            }
        }

        // Initialize the game board
        renderBoard();

        // Add event listeners for user interactions (e.g., moving pieces)

    </script>
</body>
</html>
