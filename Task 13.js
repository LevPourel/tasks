//Напишите функцию, которая вернет массив с группированными элементами исходных массивов. Логика группировки:
// первая группа состоит из всех первых элементов исходных массивов, вторая группа - из вторых элементов и т.д.
function group(arr1, arr2 , arr3) {
   let fullArr = [...arr1, ...arr2, ...arr3];
   let arrDone = [];
   let newArr1 = [];
   let newArr2 =[];
    let iteration = fullArr.length / 3;
      fullArr.map(function (item , index) {
        if(index == 0 || !(index % 2)){
            newArr1.push(item)
        }
            else{
                newArr2.push(item);
        }
      })
    arrDone.push(newArr1, newArr2);
    return arrDone;
}
console.log(group(['a', 'b'], [1, 2], [true, false]));
// [['a', 1, true], ['b', 2, false]]