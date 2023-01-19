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
    let a = target.reduce( function (acc, item, index, arr) {
        let maxNum = item[1];
        c.push(maxNum)
        index = Math.max.apply(null, c)
        console.log(target.indexOf(index))
        return acc
    },target)
    return a
}
console.log(fn(arr)); // 'z'