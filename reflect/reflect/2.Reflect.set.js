const targetObj = {
  a: 1,
  b: 2,
  set setA(val) {
    this.a = val;
  },
};
const newObj = {
  a: 2,
};
const result = Reflect.set(targetObj, "setB", 3, newObj);
console.log(targetObj, newObj);

console.log(result);
