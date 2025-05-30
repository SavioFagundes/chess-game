import { Color, Coords, FENChar} from "../models";

export abstract class Piece{
    protected abstract _FENchar: FENChar;
    protected abstract _directions: Coords[];

    constructor(private _color: Color) { }
    
    public get FENChar(): FENChar {
        return this._FENchar;
    }

    public get directions(): Coords[] {
        return this._directions;
    }
    
    public get color(): Color {
        return this._color;
    }
}