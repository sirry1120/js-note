const targetObj = {
  a: "1",
  b: "2",
  c: "3",
};
const Result = Reflect.has(targetObj, "a");
console.log(Result); //true
