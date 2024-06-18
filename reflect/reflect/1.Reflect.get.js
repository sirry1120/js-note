"use static";
/**
 * Reflect.get(targetObj,key,receiver)
 */
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    },
  };
  
  var myReceiverObject = {
    foo: 4,
    bar: 4,
  };
  
Reflect.get(myObject, 'baz', myReceiverObject) // 8