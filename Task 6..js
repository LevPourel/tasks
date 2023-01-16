//Напишите функцию, которая удалит указанное кол-во элементов с начала исходного массива. Аргумент функции, который
// означает кол-во элементов, опциональный  и равен 1 по умолчанию. Если элементов меньше, чем указанное кол-во
// для удаления - вернуть пустой массив
function rm (array , itemsForDel = 1) {
    let copy = array.slice();
    for(let i = 0; i < itemsForDel; i++) {
        copy.shift();
    }
    return copy;
}

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]