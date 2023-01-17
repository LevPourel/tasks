//Напишите функцию которая преобразует массив в строку через указанный разделитель

const arr = ['a','b','c'];
function implode(array , separator){
    let newArr = array.join(separator)
    return newArr;
}
console.log(implode(arr, '-')); // 'a-b-c'