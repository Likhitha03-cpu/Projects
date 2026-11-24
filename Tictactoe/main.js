const r = require("raylib");
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let currentPlayer = "X";

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(600, 600, "Raylib");
    r.SetTargetFPS(60);
}

function drawGrid() {
    const cellSize = 180;
    const gap = 10;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            r.DrawRectangle(
                20 + i * (cellSize + gap),
                20 + j * (cellSize + gap),
                cellSize,
                cellSize,
                r.WHITE,
            );
        }
    }
}

function drawXO(row, column, symbol) {
    const x = 10 + column * 190 + 90;
    const y = 10 + row * 190 + 90;

    r.DrawText(symbol, x, y, 60, r.BLACK);
}

function draw() {
    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        r.ClearBackground(r.LIGHTGRAY);
        drawGrid();
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                if (board[row][column] !== null) {
                    drawXO(row, column, board[row][column]);
                }
            }
        }

        if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_LEFT)) {
            if (
                r.GetMouseX() >= 20 &&
                r.GetMouseX() < 580 &&
                r.GetMouseY() >= 20 &&
                r.GetMouseY() < 580
            ) {
                const column = Math.floor((r.GetMouseX() - 20) / 190);
                const row = Math.floor((r.GetMouseY() - 20) / 190);
                board[row][column] = currentPlayer;
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
            }
        }

        r.EndDrawing();
    }
}

function loop() {
    draw();
}

function main() {
    setup();
    loop();
}

main();
