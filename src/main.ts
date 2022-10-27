
//Object declared below
let person = {
  name: 'Mosh',
  age: 30
};

person.name = 'John';

person["name"] = "Mary";

console.log(person);
console.log(person.name);
console.log(person['name']);

function greet(name: any) {
  console.log('Hello' + name);
}

greet('person.name');
