//Напишите функцию, которая перемешает массив в случайном порядке
function rnd(array) {
    let newArray = array.sort(function() { return Math.random() - 0.5 })
    return newArray
}
console.log(rnd([1,2,3,4,5,6])); // [6,1,5,4,3,2]
