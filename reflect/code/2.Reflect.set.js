const targetObj = {
  a: 1,
  b: 2,
  set setA(val) {
    this.b = val;
  },
};
const newObj = {
  b: 2,
};

const result = Reflect.set(targetObj, "a", "2");

console.log(result, targetObj.a); // true 2

console.log("before", targetObj.b);//2
Reflect.set(targetObj, "setA", "new", newObj);//true
console.log("after", targetObj.b);//2
console.log("after", newObj.b);//new

try {
  Reflect.set("a", "b", "c");
} catch (error) {
  console.log(error); // TypeError: Reflect.set called on non-object
}
