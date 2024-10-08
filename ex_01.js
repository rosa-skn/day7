function reduceOpacity(square) {
    square.addEventListener('mouseover', function() {
        square.style.opacity = 0.5; });
}
function resetOpacity(square) {
    square.addEventListener('mouseout', function() {
        square.style.opacity = 1;  });
}
document.addEventListener("DOMContentLoaded", function() {
    let square = document.getElementById('square'); 
    reduceOpacity(square); 
    resetOpacity(square);  
});
