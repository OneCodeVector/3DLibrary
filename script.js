class GameClass {
    constructor() {
        GL.clearColor(0.0, 0.0, 0.0, 1.0);
        GL.clear(GL.COLOR_BUFFER_BIT);

        const MyCube = new Cube();
    }
}

const Game = new GameClass();
