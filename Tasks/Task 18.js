//Напишите функцию, которая вернет разницу двух массивов (т.е. элементы, которых нет в исходных массивах)
const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];

function diff(arr1, arr2) {
    let repItems = [];
    let uniqItems = [];
    for (let i = 0; i <= arr2.length; i++) {
        if (arr1[i] == arr2[i]) {
            repItems.push(i)
        } else {
            uniqItems.push(i)
        }
    }
    return uniqItems
}

console.log(diff(arr1, arr2)) // [a,3,4,b]