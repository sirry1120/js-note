# Reflect

## 相关英语翻译

- [Reflect:反射](https://dict.youdao.com/result?word=reflect&lang=en)
- [target:目标对象](https://dict.youdao.com/result?word=target&lang=en)
- [recevier:接收](https://dict.youdao.com/result?word=receiver&lang=en)

## 一、Reflect

### 1.相关参考文档

1. [阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/reflect.md)
2. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

### 2.描述

Reflect是一个内置对象,不是一个函数对象,所以它是不可构造的,不能使用new关键字对其调用,同时Reflect内部的属性和方法都是静态的

相关静态方法如下

- Reflect.get(target, key[,recevier])
- 

### 3.相关方法

#### 1.Reflect.get(target, key[,recevier])

获取对象中的属性值,

**入参**:****

- target:需要取值的目标对象
- key:获取的键值
- recevier:接收对象,非必输,如果有getter调用时的this

**用法**

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

