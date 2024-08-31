type Person = {
  name: string;
  age: number;
  nike: string;
  photo: string;
};

type First = Partial<Person>;

type Second = Omit<Readonly<Person>, 'photo'>;
