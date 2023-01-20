//Написать функцию, которая принимает массив, символ для замены, с какой ячейки начинать заменять и на какой остановиться.
// Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива
function replaceIn(array , item , firstIndex = 0, lastIndex = array.length) {
    let newArr = array.slice();
    newArr.forEach(function (elem , index) {
        if((index >= firstIndex) && (index != lastIndex)){
            newArr.splice(index , 1 , item)
        }
    })
    return newArr;
}
const arr1 = [1, 2, 3];


console.log(replaceIn(arr1,'a')); // ['a', 'a', 'a']


console.log(replaceIn(arr1 , 2)); // [2, 2, 2]

const arr2 = [4, 6, 8, 10];
console.log(replaceIn(arr2,'*' , 1 , 3)); // [4, '*', '*', 10]