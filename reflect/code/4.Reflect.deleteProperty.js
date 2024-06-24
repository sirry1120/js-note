const targetObj = {
  a: "1",
  b: 3,
};

const result = Reflect.deleteProperty(targetObj, "a");//true
console.log(targetObj); //{b:3}
