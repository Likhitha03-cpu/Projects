const r = require("raylib");

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

function draw() {
    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        r.ClearBackground(r.LIGHTGRAY);
        drawGrid();

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
