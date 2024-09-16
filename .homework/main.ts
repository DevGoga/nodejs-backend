type Wrapper <T> = {value: T}

type User = { id: number; name: string };

type DeepWrapper<T> = {
  [K in keyof T]: T[K] extends object ? DeepWrapper <T[K]> : Wrapper<T[K]>;
}

type Profile = {
  id: number;
  name: string;
  data: {
    age: number;
    nick: string;
  };
  a: {
    b: { c: boolean };
  };
};

const wrappedUser: Wrapper<User> = {
  value: {
    id: 1,
    name: 'n',
  },
};

const deepWrappedProfile: DeepWrapper<Profile> = {
  id: { value: 1 },
  name: { value: 'example' },
  data: {
    age: { value: 22 },
    nick: { value: 'nick' },
  },
  a: { b: { c: { value: true } } },
};