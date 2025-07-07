let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '?', null, NaN];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (i = 0; i < arr.length; i++) {
  let element = arr[i];
  
  if ((typeof element === 'number') && (!isNaN(element))) {
    if (element === 0) {
      zeroCount++;
    } else if (element % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log(`Четных элементов: ${evenCount}`);
console.log(`Нечетных элементов: ${oddCount}`);
console.log(`Нулевых элементов: ${zeroCount}`);