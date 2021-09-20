var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

The_color = "Purple"
Line_width = 10;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
   color = document.getElementById("The_color").value;
   Width_of_line = document.getElementById("Line_width").value;
   radius = document.getElementById("The_radius").value;
   mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_mouse_x = e.clientX - canvas.offsetLeft;
    var current_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        console.log("Current Position Of X And Y Coordinates = ");
        console.log("X = "+current_mouse_x+",Y = "+current_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = The_color;

        ctx.lineWidth = Line_width;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0 ,2 * Math.PI);

        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
function Clear_the_paint() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}