
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I am ${this.name}`);
  }
}

const panda = new Person("panda");
panda.introduceSelf();