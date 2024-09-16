type ChangePropertyType<T extends object, K extends keyof T, N> = {
    [Key in keyof T]: Key extends K ? N : T[Key];
}

type User = {
  id: number;
  name: string;
};

// В User меняем тип поля 'id' на boolean
type ChangedUser = ChangePropertyType<User, 'id', boolean>;
const user: ChangedUser = {
  id: true,
  name: 'name',
};

// В {age:number} меняем тип поля 'age' на string
const obj: ChangePropertyType<{ age: number }, 'age', string> = {
  age: 'just my age',
};

type p1 = ChangePropertyType<{}, 'age', string>; // Ошибка! age нет в {}
type p2 = ChangePropertyType<{ id: number }, 'age', string>; // Ошибка! age нет в { id: number }