console.log("1, Synchronous code started!");

setTimeout(() => {
  console.log("5, setTimeout call back(macro task)!");
}, 0);
 promise.resolve().then(() => {
  console.log("3, promise then(micro task)!");
});

console.log("2, Synchronous code ended!");

setTimeout(() => {
  console.log("6, setTimeout call back(macro task)!");
}, 0);

promise.resolve().then(() => {
  console.log("4, promise then(micro task)!");+
});

const people = [
  { name: "Rohithh", age: 50 },
  { name: "Madhanaee", age: 40 },
  { name: "maniii", age: 40 },
  { name: "saravanan", age: 35 },
];
people
  .filter((person) => person.age > 30)
  .map((person) => person.name)
  .join(", ");
people.push({ name: "muthuuu", age: 35 });
people.shift();
people.unshift({ name: "Rohithh", age: 50 });
people.pop();
console.log(
  people

const prices = [120, 60, 899];

const total = prices.reduce((total, price) => total + price);

console.log(total);

function makeGreeter(greeting) {
  return function (name) {
    return greeting + " " + name;
  };
}

console.log(makeGreeter("Hello")("MUTHURAJ"));

async function loadusers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();
    console.log(users);
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}
loadusers();
