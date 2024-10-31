
class Person {
  name = "";

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}


class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }
}

class Student extends Person {
  // 以 # 开头的 变量名、函数名 是私有的
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I'm in year ${this.#year}.`
    );
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

