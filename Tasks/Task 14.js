//Напишите функцию которая преобразует массив в строку через указанный разделитель

const arr = ['a','b','c'];
function implode(array , separator){
    return array.join(separator);
}
console.log(implode(arr, '-')); // 'a-b-c'