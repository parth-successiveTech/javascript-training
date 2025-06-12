let obj = [
  { name: "John", age: 27, id: 1 },
  { name: "parth", age: 28, id: 2 },
  { name: "ross", age: 29, id: 3 },
];
for (val in obj) {
  delete obj[val].id;
}
console.log(obj);
