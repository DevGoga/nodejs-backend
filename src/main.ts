type Person = {
  name: string;
};

type Paginated<T = unknown> = {
  total: number;
  limit: number;
  offset: number;
  items: T[];
};

const responseOfPersons: Paginated<Person> = {
  total: 10,
  limit: 5,
  offset: 0,
  items: [{ name: 'P1' }],
};

const responseOfSomething: Paginated = {
  total: 10,
  limit: 5,
  offset: 0,
  items: [],
};
