
//! https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

console.log('---------------------');
/*** 打印原型链 */////////////////////////////////////////////////////////

const myDate = new Date();
let tmp = myDate;
do {
  tmp = Object.getPrototypeOf(tmp);
  console.log(tmp);
} while (tmp);

console.log('---------------------');
/*** 设置原型 *//////////////////////////////////////////////////////////
/*** 1. Object.create */ 

const personPrototype_1 = {
  greet() {
    console.log("Hello!");
  },
};
// 创建一个以 personPrototype_1 为原型的新对象 carl
const carl = Object.create(personPrototype_1);
carl.greet(); // Hello

/*** 2. 构造函数 */ 

const personPrototype_2 = {
  greet() {
    console.log(`Hi! I am ${this.name}!`);
  },
};
function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, personPrototype_2);
// 此后 Person 构造的所有实例，都会以 personPrototype_2 为原型
const reuben = new Person("Reuben");
reuben.greet(); // Hi! I am reuben

/*** 3. 自有属性 */ 
const irma = new Person("Irma");
console.log(Object.hasOwn(irma, "name"));  // true
console.log(Object.hasOwn(irma, "greet")); // false
