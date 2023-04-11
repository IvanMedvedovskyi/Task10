let arrLength = 0;
do {
    arrLength = parseInt(prompt("Введіть довжину масива: "));
} while (arrLength <= 0 && isNaN(arrLength));

let arr = [];
console.log("Початковий пустий масив: ", arr);
for (let i = 0; i<arrLength; i++) {
    let enteredValues = prompt(`Введіть ${i + 1} елемент масиву: `);
    arr.push(enteredValues);
}

console.log("Оновлений масив: ", arr);

arr.sort((a,b) => a - b);
console.log('Відсортований масив за зростанням: ', arr);

arr.splice(1, 3);
console.log("Видалені елементи з 2 по 4 включно: ", arr);