import Vector2D from "./vector2d.js";

let vector = new Vector2D(45, 45);


const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const CANVAS_CENTER_X = CANVAS_WIDTH / 2;
const CANVAS_CENTER_Y = CANVAS_HEIGHT / 2;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.translate(CANVAS_CENTER_X, CANVAS_CENTER_Y);
ctx.scale(1, -1);

const SCALE_FACTOR = 3;

updateInfo();

drawVector();


function drawVector() {

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();


    ctx.clearRect(CANVAS_CENTER_X, CANVAS_CENTER_Y, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.beginPath();
    ctx.moveTo(-CANVAS_CENTER_X, 0);
    ctx.lineTo(CANVAS_WIDTH, 0);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -CANVAS_CENTER_Y);
    ctx.lineTo(0, CANVAS_HEIGHT);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 10 * SCALE_FACTOR, 0, Math.PI / 2 - vector.getAngle(), false);
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(vector.getX() * SCALE_FACTOR, vector.getY() * SCALE_FACTOR);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#008000";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(vector.getX() * SCALE_FACTOR - 1, vector.getY() * SCALE_FACTOR);
    ctx.lineTo((vector.getX() - 3) * SCALE_FACTOR, vector.getY() * SCALE_FACTOR);

    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#008000";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(vector.getX() * SCALE_FACTOR, vector.getY() * SCALE_FACTOR + 1);
    ctx.lineTo((vector.getX()) * SCALE_FACTOR, (vector.getY() - 3) * SCALE_FACTOR);

    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#008000";
    ctx.stroke();

    ctx.restore();

}

function updateInfo() {

    console.log(`vector: (${vector.getX()}, ${vector.getY()})`)
    console.log("Angle in Degrees: ", vector.getAngle());
    console.log("Angle in Radians: ", vector.getAngleInDeg());
    console.log("Vector Length: ", vector.getLength());


    const container = document.getElementById("info");

    container.innerHTML = '';

    const vectorDiv = document.createElement("div");
    vectorDiv.innerHTML = `<strong>Vector:</strong> (${vector.getX()}, ${vector.getY()})`;
    container.appendChild(vectorDiv);

    const angleInDegreeDiv = document.createElement("div");
    angleInDegreeDiv.innerHTML = `<strong>Angle in Degrees: </strong> ${vector.getAngleInDeg()}`;
    container.appendChild(angleInDegreeDiv);

    const angleInRadDiv = document.createElement("div");
    angleInRadDiv.innerHTML = `<strong>Angle in Radians: </strong> ${vector.getAngle()}`;
    container.appendChild(angleInRadDiv);

    const lengthDiv = document.createElement("div");
    lengthDiv.innerHTML = `<strong>Length of the vector: </strong> ${vector.getLength()}`;
    container.appendChild(lengthDiv);
}


export function handleOnSubmit(e) {
    e.preventDefault();
    const x = parseFloat(document.getElementById("value-x").value);
    const y = parseFloat(document.getElementById("value-y").value);

    vector = new Vector2D(x, y);
    updateInfo();
    drawVector();
}


document.getElementById("form-main").addEventListener("submit", handleOnSubmit);