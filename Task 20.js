//Напишите функцию, которая вернет самый частый элемент массива
const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
function fn(arr) {
    let newArr = arr.slice();
    newArr.sort()
    const counter = arr.reduce(function (acc , item) {

        if(acc.indexOf(item) === -1) {
            acc.push(item)
        }
    }, [])
    return counter
}
console.log(fn(arr)); // 'z'