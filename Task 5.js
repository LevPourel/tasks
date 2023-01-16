//Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями
function concatArray (addedMassive , item , item1 , item2){
    const concatedArray = [];
    const itemArray = [item , item1 , item2];
    concatedArray.push(addedMassive);
    itemArray.forEach(item => {concatedArray.push(item)})
    return concatedArray;
}
const arr1 = [1];
const arr2 = concatArray(arr1, 2, [3], [[4]]);
console.log(arr2); // [1, 2, 3, [4]]
console.log(arr1); // [1]