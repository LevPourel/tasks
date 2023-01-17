//апишите функцию которая преобразует массив из чисел в строку через указанный разделитель,
// оставив только четные числа или не четные цифры,
// в зависимости от третьего аргумента (true - четные, false - нечетные)

const arr = [1,2,3,4,5,6,7,8,9];
function implode(array, separator , argue){
    const arrDone = [];
    let even =[];
    let odd = [];
    array.reduce(function (acc , item , index){
        if(item%2) {
            odd.push(item)

        }
        else {
            even.push(item)
        }
    },0)
    let evenDone = even.join(separator)
    let oddDone = odd.join(separator)
    if(argue == true) {
        return evenDone;
    }
    else {
        return oddDone
    }
}
console.log(implode(arr, ':', true)); // '2:4:6:8'
console.log(implode(arr, '*', false)); // '1*3*5*7*9'
