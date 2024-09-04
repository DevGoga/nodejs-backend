class Instrument {
  constructor(readonly type: string) {}
}

class Builder {
  constructor(
    readonly name: string,
    readonly instrument: Instrument,
  ) {}
}

const hammer = new Instrument('hammer');

const builder1 = new Builder('Builder', hammer);
const builder2 = new Builder('Builder', hammer);

console.log(builder1 === builder2); // выводит false, так как при сравнивании обьектов будет false
console.log(builder1.instrument === builder2.instrument); // выведет true, так как мы обращаемся  к инструменту билдеров
// и будет hamer = hamer , это как с обьектами, когда вызываешь, допустим, name.age = name.age и при этом обьект у тебя const name = {age: 10}
