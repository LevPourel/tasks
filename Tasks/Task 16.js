//Напишите функцию, которая найдет високосные года в указанном диапазоне дат

function findYear(startYear , endYear) {
    let Years = [];
    let targetYears = [];
    for(let i = startYear; i<=endYear; i++){
        let Year = i
        Years.push(Year);}
    Years.map(function (item) {
        let newItem = item-2000
        if(newItem%4 == 0){
            let doneYear = newItem+2000
        targetYears.push(doneYear)}
    })
    return targetYears
}
console.log(findYear(2000,2018)); // [2000,2004,2008,2012,2016]