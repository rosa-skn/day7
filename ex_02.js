let angle = 0; 
function rotateCircle(step) {
    const circle = document.getElementById('circle'); 
    angle += step;
    circle.style.transform = 'rotate(' + angle + 'deg)';}
document.getElementById('rotate-add-90').addEventListener('click', function() {
    rotateCircle(90);
});
document.getElementById('rotate-add-45').addEventListener('click', function() {
    rotateCircle(45);
});
document.getElementById('rotate-reset').addEventListener('click', function() {
    angle = 0; 
    const circle = document.getElementById('circle');
    circle.style.transform = `rotate(0deg)`;
});
document.getElementById('rotate-sub-45').addEventListener('click', function() {
    rotateCircle(-45);
});
document.getElementById('rotate-sub-90').addEventListener('click', function() {
    rotateCircle(-90);
});
