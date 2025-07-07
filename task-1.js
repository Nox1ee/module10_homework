let input = prompt('Введите значение')

let num = +input 

if (typeof num === 'number' && !isNaN(num) && num != "") {
  if (num % 2 === 0) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
} else {
  console.log('Кажется вы ошиблись, попробуйте ввести число');
}
