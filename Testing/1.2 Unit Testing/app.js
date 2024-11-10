const users = [
  { name: "Suman", age: 30 },
  { name: "Kumar", age: 18 },
  { name: "Maharana", age: 22 },
];

function sortingByAge() {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;