import { Color, Coords, FENChar } from "../models";
import { Piece } from "./piece";

export class King extends Piece {
    private _hasMoved: boolean = false;
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        
        { x: 0, y: 1 },
        { x: 0, y: -1 }, 
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 1, y: 1 },   
        { x: -1, y: 0 },  
        { x: -1, y: 1 },  
        { x: -1, y: -1 }  
    ];

    constructor(pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
    }

    public get HasMoved(): boolean {
        return this._hasMoved;
    }

    public set HasMoved(_){
        this._hasMoved = true;
    }
}