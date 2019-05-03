console.log('utils is running');

const add = (a,b) => a + b;
export const sub = (a,b) => a - b;
const isSenior = (age) => {
  if(age < 65) return false;
  return true;
};
const age = 31;

export default isSenior;

export {add, /* age as default */};