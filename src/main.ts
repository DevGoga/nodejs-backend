type Person = {
  name: string;
};

type WithId<T> = T & {
  id: number;
};

const p: WithId<Person> = {
  id: 1,
  name: 'name',
};
