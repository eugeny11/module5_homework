x = prompt('Введите значение x');

if (typeof x === "number") {
  alert('x - это числовая переменная')
} else if (typeof x === "string") {
  alert('x - это строчная пепеменная')
} else if (typeof x === "boolean") {
  console.log('x - это логическая переменная')
} else {
  console.log('Тип x не определён')
}