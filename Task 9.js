// Напишите функцию, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки
function init(array) {
    array.pop();
    return array
}
const arr1 = [1,2,3,4];
const arr2 = init(arr1);

console.log(arr2); // [1,2,3]