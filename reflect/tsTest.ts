interface Target {
    a:Number,
    b:String,
    set setA(value:string)
}

const targetObj1:Target = {
    a: 1,
    b: '2',
    set setA(val:string) {
      this.b = val;
    },
  };
const result1 = Reflect.set(targetObj1,'b',9)
console.log(result1)