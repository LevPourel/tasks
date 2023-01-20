//Напишите функцию, которая вернет массив с всеми значениями, которые повторяются в исходном массиве
function uni(massive) {
    let newArr = [];
    let tech = massive.sort()
    let ada = [];
    const counter = massive.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) +1;
        return acc
    } ,{})
    newArr = Object.entries(counter)
    newArr.forEach((item , index) => {
       item.forEach((element , index) => {
           if(element>1 && index === 1) {
               let a = parseInt(item[0] , 10)
               ada.push(a)
           }
       })
    })

    return ada
}
const arr1 = [1,2,3,4,2,5,6,1,3];
const arr2 = uni(arr1);

console.log(arr2); // [1,2,3]