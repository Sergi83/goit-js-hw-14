// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const counter = document.querySelector('#counter');

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener('click', handlePlus1);
btnDecrement.addEventListener('click', handleMinus1);

function handlePlus1(evt) {}

function handleMinus1(evt) {}
