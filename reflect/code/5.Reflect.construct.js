function GetA(name, age) {
  this.name = name;
  this.age = age;
}

function GetB(name, age) {
  this.name = name;
  this.age = age;
}

const a = Reflect.construct(GetA, ["sirry", "18"],GetB);
console.log(a)
