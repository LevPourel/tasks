//Напишите функцию, которая вернет самый частый элемент массива
const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
function fn(arr) {
    let newArr = arr.slice();
    let target;
    let c = [];
    newArr.sort()
    const counter = arr.reduce(function (acc , item) {
        acc[item] = (acc[item] || 0) +1;
        return acc
    }, {})
    target = Object.entries(counter)
    target.sort();
    const a = target.reduce( function (acc, item, index, arr) {
        let maxNum = item;
        c.push(maxNum)
        index = Math.max.apply(null, c)
        return acc
    },target)
    return c
}
console.log(fn(arr)); // 'z'