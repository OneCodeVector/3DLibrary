const Canvas = document.getElementById("canvas");
const GL = Canvas.getContext("webgl");

function typeofAccurate(Value) {
    if (typeof(Value) != "object") {
        return typeof(Value);
    }

    // else
    return Object.getPrototypeOf(Value).constructor.name;
}

class Vec3 {
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
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
