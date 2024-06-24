# Reflect

## 相关英语翻译

- [Reflect:反射](https://dict.youdao.com/result?word=reflect&lang=en)
- [target:目标对象](https://dict.youdao.com/result?word=target&lang=en)
- [recevier:接收](https://dict.youdao.com/result?word=receiver&lang=en)



## 1.相关参考文档

1. [阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/reflect.md)
2. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

## 2.描述

Reflect是一个内置对象,不是一个函数对象,所以它是不可构造的,不能使用new关键字对其调用,同时Reflect内部的属性和方法都是静态的,

### 使用原因



## 3.相关方法

### 1.Reflect.get()

#### 语法

```
Reflect.get(target,key)
Reflect.get(target,key,recevier)
```

获取对象中的属性值

#### 入参

- target:需要取值的目标对象
- key:获取的属性的名称
- recevier:接收对象,非必输,如果有getter调用时的this指向recevier对象

#### 返回值

属性值

#### 异常

如果目标对象并非[`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 类型，抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)。

#### 用法

```js
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
```

### 2.Reflect.set()

#### 语法

```
Reflect.set(target,key,value)
Reflect.set(target,key,value,recevier)
```

#### 入参

- target:需要取值的目标对象
- key:设置的属性的名称
- value:设置的值
- recevier:接收对象,非必输,如果有getter调用时的this指向recevier对象

#### 返回值

Boolean

#### 异常

如果目标对象并非[`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 类型，抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)。

#### 用法

```js
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
```

### 3.Reflect.has()

#### 语法

```javascript
Reflect.has(target,key)
```

静态方法Reflect.has()作用与in操作符相同

#### 参数

- target:需要取值的目标对象
- key:设置的属性的名称

#### 返回值

返回boolean值,判断目标对象上是否有key

#### 异常

如果目标对象并非[`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 类型，抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)。

#### 用法

```javascript
const targetObj = {
  a: "1",
  b: "2",
  c: "3",
};
const Result = Reflect.has(targetObj, "a");
console.log(Result); //true
```

### 4.Reflect.deleteProperty()

#### 语法

```javascript
Reflect.deleteProperty(target,key)
```

删除目标对象的属性

#### 参数

[`target`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty#target)

删除属性的目标对象。

[`propertyKey`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty#propertykey)

需要删除的属性的名称。

#### 返回值

Boolean值表明该属性是否被成功删除。

#### 异常

抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)，如果`target`不是 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)。

#### 用法

```javascript
const targetObj = {
  a: "1",
  b: 3,
};

const result = Reflect.deleteProperty(targetObj, "a");//true
console.log(targetObj); //{b:3}
```



### 5.Reflect.construct()

#### 语法

```javascript
Reflect.construct(target,argsList[,newTarget])
```

类似于new操作符,相当于运行new target(...args)

#### 参数

- [`target`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct#target)

  被运行的目标构造函数

- [`argumentsList`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct#argumentslist)

  类数组，目标构造函数调用时的参数。

- [`newTarget`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct#newtarget) 可选

  作为新创建对象的原型对象的 `constructor` 属性，参考 [`new.target`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 操作符，默认值为 `target`。

#### 返回值

以`target`（如果`newTarget`存在，则为`newTarget`）函数为构造函数，`argumentList`为其初始化参数的对象实例。

#### 异常

如果 target 或者 newTarget 不是构造函数，抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError),异常。

#### 用法

```javascript
function GetA(name, age) {
  this.name = name;
  this.age = age;
}

function GetB(name, age) {
  this.name = name;
  this.age = age;
}

const a = Reflect.construct(GetA, ["sirry", "18"],GetB);
console.log(a)//GetB { name: 'sirry', age: '18' }
```



































### 4.Reflect.construct()

#### 语法

```javascript

```

#### 参数

#### 返回值

#### 异常

#### 用法

```javascript

```



















