var mouseEvent="empty";
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color="black";
radius=20;
widthLine=5;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    widthLine=document.getElementById("widthLine").value;

    mouseEvent="mouseDown"
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    PositionMouseX=e.clientX-canvas.offsetLeft;
    PositionMouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
function limpar() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}