const Canvas = document.getElementById("canvas");
const GL = Canvas.getContext("webgl");

function FixFloat(Float, Precision) {
    Math.round(Float * Math.pow(10, Precision)) / Math.pow(10, Precision);
}

function typeofAccurate(Value) {
    if (Array.isArray()) {
        return "array";
    }

    if (typeof(Value) != "object") {
        return typeof(Value);
    }

    // else
    return Value.__proto__.type || "object";
}

class Vec3 {
    static Zero = new this(0, 0, 0);

    constructor(X, Y, Z) {
        this.__proto__.type = "Vec3";
        this.__proto__.value = [X, Y, Z];
    }

    set X(NewX) {
        this.__proto__.value[0] = NewX;
    }

    set Y(NewY) {
        this.__proto__.value[1] = NewY;
    }

    set Z(NewZ) {
        this.__proto__.value[2] = NewZ;
    }

    get X() {
        return this.__proto__.value[0];
    }

    get Y() {
        return this.__proto__.value[1];
    }

    get Z() {
        return this.__proto__.value[2];
    }

    set XYZ(NewXYZ) {
        if (typeofAccurate(NewXYZ) == "object") {
            this.__proto__.value = [
                NewXYZ.X || NewXYZ.x,
                NewXYZ.Y || NewXYZ.y,
                NewXYZ.Z || NewXYZ.z,
            ]

            return
        }

        this.__proto__.value
    }

    get XYZ() {
        return this.__proto__.value;
    }
}

class Cube {
    contructor(Position, Size, Rotation) {
        this.Position = Position;
        this.Size = Size;
        this.Rotation = Rotation;
    }

    static Draw() {
        
    }

    get GetVertecies() {

    }
}

class Program {
    constructor() {
        GL.clearColor(0.0, 0.0, 0.0, 1.0);
        GL.clear(GL.COLOR_BUFFER_BIT);
    }
}

function GameLoop(Game, Time) {
    Game.Frame();
    requestAnimationFrame(function(Time) {
        GameLoop(Game, Time);
    });
}

function StartGame(GameClass) {
    let Game = new GameClass();
    console.log(Game);
    Game.Start();

    requestAnimationFrame(function(Time) {
        GameLoop(Game, Time);
    });
}
