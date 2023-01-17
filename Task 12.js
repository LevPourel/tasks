//Напишите решение в одну строчку, которое считает
//сумму квадратных корней для всех чётных чисел внутри массива
const arr = [1, 4, 3, 0, 4, 5, 4];
function findRoot(massive) {
    let arr1 = massive.reduce((accumulator ,item)=> accumulator + (item % 2 ? 0 : item **0.5),0)
    return arr1}
console.log(findRoot(arr))  // 6