let myMap = new Map([
  
  ['name', 'Michael'],
  
  ['surname', 'Johnson'],
  
  ['age', 28],
  
  ['city', 'Los-Angeles']
  
]);

for (let key of myMap.keys()) {
  console.log(`Ключ - ${key}, Значение - ${myMap.get(key)}`);
}
