class CustomWorker {
  constructor(
    public name: string,
    public surname: string,
    public rate: number,
    public days: number,
  ) {}
  getSalary = () => {
    return this.rate * this.days;
  };
}

const worker = new CustomWorker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
