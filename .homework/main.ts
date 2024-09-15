type DeepString <T extends object> = {
  [key in keyof T]: T[key] extends object ? DeepString<T[key]> : string | undefined
};

type Person = {
  age: number;
  name: string;
  son: { age: 10, name: string };
}

type GenericPerson = DeepString<Person>

const obj: GenericPerson = { age: '1', name: 'John Doe', son: {age: '10', name: undefined} }