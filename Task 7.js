//Аналогично заданию 6, только удаление с конца массива
function rm (array , itemsForDel = 1) {
    let copy = array.slice();
    for(let i = 0; i < itemsForDel; i++) {
        copy.pop();
    }
    return copy;
}

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]