let peopleInfo = [
  { name: "Parth", age: 35 },
  { name: "Manu", age: 14 },
  { name: "Mukul", age: 27 },
  { name: "Ashu", age: 12 },
];
peopleInfo.sort((a, b) => a.age - b.age);
for(val in peopleInfo)
{
    console.log(peopleInfo[val]);
}
