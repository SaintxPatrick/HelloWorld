let carTypes: any [] = [1, "Volvo", "BMW"];

let len: number = carTypes.length;
let carCopy: any [] = [];
let i : number = 0;

for (i = 0; i < len; i += 1) {
  carCopy[i] = carTypes[i];
}

console.log(carTypes);

