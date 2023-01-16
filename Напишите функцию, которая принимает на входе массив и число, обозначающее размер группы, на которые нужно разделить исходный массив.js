//Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы, на которые нужно
// разделить исходный массив
function splitArray(massive, number) {
    let iteration = massive.length/number;
    for(let i = 0; i<iteration; i++) {
    let a = massive.slice(0, number);
    massive.shift()
        massive.shift()
    massive.push(a);
    }
    return massive;
}
const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);
console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
