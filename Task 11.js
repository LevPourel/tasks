// Напишите функцию, которая вернет элемент из массива по указанному индексу. Но если индекс отрицательный,
// то считаем с конца массива
function nfa(array , index) {
    let newArr = array.slice();
    if(index >=0) {
    console.log(newArr[index]);
    }
    else {
        console.log(newArr[-index]);
    }
    return newArr
}
const arr = ['a', 'b', 'c', 'd'];

console.log(nfa(arr, 1)); // 'b'
console.log(nfa(arr, -2)); // 'c';