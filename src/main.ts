import dayjs from 'dayjs';

abstract class Person {
  protected constructor(
    protected name: string,
    protected surname: string,
  ) {}

  get FullName() {
    return `${this.name} ${this.surname}`;
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
  get Course() {
    return dayjs().year() - this.year;
  }
}

const student = new Student('Иван', 'Иванов', 2020);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.FullName); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2020
console.log(student.Course); //выведет 4 - четвертый курс, так как текущий год 2024, а дата поступления 2020
