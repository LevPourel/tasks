//Напишите функцию, которая берет массив объектов и возвращает массив значений определенного поля:
const chars = [
    { 'name': 'tony', 'age': 20 },
    { 'name': 'feel', 'age': 30 }
];
function pluck(massive, field) {
    let newMassive = [];
    for(let i = 0; i<massive.length;i++) {
        newMassive.push(massive[i][field]);
    }
    return newMassive;
}
console.log(pluck(chars, 'name')); // ['tony', 'feel']
