class Vector2D {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    getX() {
        return this._x;
    }

    getY() {
        return this._y;
    }

    setX(x) {
        this._x = x;
    }

    setY(y) {
        this._y = y;
    }

    getAngle() {
        return Math.atan2(this._x, this._y);
    }

    setLength(length) {
        let angle = this.getAngle();
        this._x = length * Math.cos(angle);
        this._y = length * Math.sin(angle);
    }

    getLength() {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    }

}

export default Vector2D;