function isEven (number) {
return number % 2 === 0;
}
function map(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));}
         return newArr; 
    }
console . log ( map ([5 , 8 , 10] , isEven ) );
