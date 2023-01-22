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

  setAngle(a) {
    var length = this.getLength();
    this._x = Math.cos(a) * length;
    this._y = Math.sin(a) * length;
  }

  getAngle() {
    return Math.atan2(this._x, this._y);
  }

  getAngleInDeg() {
    return (Math.atan2(this._y, this._x) * 180) / Math.PI;
  }

  setLength(length) {
    let angle = this.getAngle();
    this._x = length * Math.cos(angle);
    this._y = length * Math.sin(angle);
  }

  getLength() {
    return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
  }

  add(v2) {
    return vector.create(this._x + v2.getX(), this._y + v2.getY());
  }

  subtract(v2) {
    return vector.create(this._x - v2.getX(), this._y - v2.getY());
  }

  multiply(val) {
    return vector.create(this._x * val, this._y * val);
  }

  divide(val) {
    return vector.create(this._x / val, this._y / val);
  }

  addTo(v2) {
    this._x += v2.getX();
    this._y += v2.getY();
  }

  subtractFrom(v2) {
    this._x -= v2.getX();
    this._y -= v2.getY();
  }

  multiplyBy(val) {
    this._x *= val;
    this._y *= val;
  }

  divideBy(val) {
    this._x /= val;
    this._y /= val;
  }
}
