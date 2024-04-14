// DrawRectangle.js
function main() {

    // Retrieve <canvas> element <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d');
    // Draw a blue rectangle <- (3)

    // Set a black canvas background
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    // Create the vector
    var v1 = new Vector3;
    v1.elements[0] = 2.25;
    v1.elements[1] = 2.25;

    // Draw the vector
    drawVector(ctx, v1, "red");

    // Use the function when the button is clicked
    document.getElementById('submit-1').addEventListener('click', function () {
        handleDrawEvent(ctx, canvas);
    });

    document.getElementById('submit-2').addEventListener('click', function () {
        handleDrawEvent(ctx, canvas);
        handleDrawOperationEvent(ctx, canvas);
    });
}

function drawVector(ctx, v, color) {
    ctx.beginPath();
    ctx.moveTo(200, 200); // center
    var x = v.elements[0] * 20; // scale up the vector
    var y = v.elements[1] * 20; // scale up the vector
    ctx.lineTo(200 + x, 200 - y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function handleDrawEvent(ctx, canvas) {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    // Get the values from the input fields
    var x = parseFloat(document.getElementById('x-1').value);
    var y = parseFloat(document.getElementById('y-1').value);

    // Create the vector
    var v1 = new Vector3;
    v1.elements[0] = x;
    v1.elements[1] = y;

    drawVector(ctx, v1, "red");

    // Get the values from the input fields
    var x = parseFloat(document.getElementById('x-2').value);
    var y = parseFloat(document.getElementById('y-2').value);

    // Create the vector
    var v2 = new Vector3;
    v2.elements[0] = x;
    v2.elements[1] = y;

    drawVector(ctx, v2, "blue");
}

function handleDrawOperationEvent(ctx, canvas) {
    // Get info from the input fields
    var operation = document.getElementById('operation').value;
    var scalar = parseFloat(document.getElementById('scalar').value);

    // Get the values from the input fields
    var x = parseFloat(document.getElementById('x-1').value);
    var y = parseFloat(document.getElementById('y-1').value);

    // Create the vector
    var v1 = new Vector3;
    v1.elements[0] = x;
    v1.elements[1] = y;

    // Get the values from the input fields
    var x = parseFloat(document.getElementById('x-2').value);
    var y = parseFloat(document.getElementById('y-2').value);

    // Create the vector
    var v2 = new Vector3;
    v2.elements[0] = x;
    v2.elements[1] = y;

    if (operation === "add") {
        var res = v1.add(v2);

        drawVector(ctx, res, "green");
    }
    if (operation === "sub") {
        var res = v1.sub(v2);

        drawVector(ctx, res, "green");
    }

    if (operation === "mul") {
        var scalar = parseFloat(document.getElementById('scalar').value);

        var res_1 = v1.mul(scalar);
        var res_2 = v2.mul(scalar);

        drawVector(ctx, res_1, "green");
        drawVector(ctx, res_2, "green");
    }

    if (operation === "div") {
        var scalar = parseFloat(document.getElementById('scalar').value);

        var res_1 = v1.div(scalar);
        var res_2 = v2.div(scalar);

        drawVector(ctx, res_1, "green");
        drawVector(ctx, res_2, "green");
    }

    if (operation === "mag") {
        var res_1 = v1.magnitude();
        var res_2 = v2.magnitude();

        console.log("Magnitude v1: " + res_1);
        console.log("Magnitude v2: " + res_2);
    }

    if (operation === "nor") {
        var res_1 = v1.normalize();
        var res_2 = v2.normalize();

        drawVector(ctx, res_1, "green");
        drawVector(ctx, res_2, "green");
    }

    if (operation === "ang") {
        var theta = Math.acos(Vector3.dot(v1, v2) / (v1.magnitude() * v2.magnitude()));
        var degrees = theta * (180 / Math.PI);

        console.log("Angle: " + degrees);
    }

    if (operation === "area") {
        var cross_product = Vector3.cross(v1, v2);
        var res = 0.5 * cross_product.magnitude();

        console.log("Area of the triangle: " + res);
    }
}