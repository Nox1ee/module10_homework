let arr = [1, 5, 56, 22, 30, 41, 228];

let result = true;

const firstElement = arr[0];

if (arr.length == 0) {
  console.log(true); 
} else {
  for (i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      result = false;
      break;
    }
  }
  console.log(result);
}

