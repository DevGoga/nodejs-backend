import dayjs from 'dayjs';

class Person {
  constructor(
    public name: string,
    public surname: string,
  ) {}

  getFullName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(
    public name: string,
    public surname: string,
    public year: number,
  ) {
    super(name, surname);
  }
  getCourse() {
    return dayjs().year() - this.year;
  }
  getFullName(): string {
    return `${super.getFullName()} ${this.surname}`;
  }
}

const student = new Student('Иван', 'Иванов', 2020);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2020
console.log(student.getCourse()); //выведет 4 - четвертый курс, так как текущий год 2024, а дата поступления 2020
