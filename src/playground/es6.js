const getFirstName = (fullName) => {
  const names = fullName.split(/\s+/);
  return names[0];
}
const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map( number => number * this.multiplyBy);
  },
};

console.log(getFirstName('Fatai    Balogun'));
console.log(multiplier.multiply());